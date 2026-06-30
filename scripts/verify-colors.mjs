import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium, firefox, webkit, devices } from 'playwright'

const baseUrl = process.env.BASE_URL || 'http://localhost:5174'
const outputDir = path.resolve('artifacts', 'color-verification')

const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'not-found', path: '/missing-route' },
]

const desktopConfigs = [
  { name: 'chromium', launcher: chromium, viewport: { width: 1440, height: 1080 } },
  { name: 'firefox', launcher: firefox, viewport: { width: 1440, height: 1080 } },
  { name: 'webkit', launcher: webkit, viewport: { width: 1440, height: 1080 } },
]

const mobileConfigs = [
  { name: 'iphone-13', launcher: webkit, device: devices['iPhone 13'] },
  { name: 'pixel-7', launcher: chromium, device: devices['Pixel 7'] },
]

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function collectPageState(page, url) {
  const errors = []
  const warnings = []

  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text())
    }

    if (message.type() === 'warning') {
      warnings.push(message.text())
    }
  })

  page.on('pageerror', (error) => {
    errors.push(error.message)
  })

  await page.goto(url, { waitUntil: 'networkidle' })
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(400)

  const themeMetrics = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement)
    const body = getComputedStyle(document.body)
    const accent = root.getPropertyValue('--accent').trim()
    const accentFg = root.getPropertyValue('--accent-fg').trim()
    const bg = root.getPropertyValue('--bg').trim()
    const text = root.getPropertyValue('--text').trim()
    const bodyBackground = body.backgroundImage
    const bodyColor = body.color

    return {
      accent,
      accentFg,
      bg,
      text,
      bodyBackground,
      bodyColor,
      theme: document.documentElement.dataset.theme || 'dark',
    }
  })

  return { errors, warnings, themeMetrics }
}

async function captureSet(config, kind) {
  const browser = await config.launcher.launch()
  const context = await browser.newContext(
    config.device
      ? { ...config.device }
      : { viewport: config.viewport, colorScheme: 'dark' },
  )

  const results = []

  for (const route of routes) {
    const page = await context.newPage()
    const targetUrl = new URL(route.path, baseUrl).toString()
    const state = await collectPageState(page, targetUrl)

    const screenshotDir = path.join(outputDir, kind, config.name)
    await ensureDir(screenshotDir)
    await page.screenshot({
      path: path.join(screenshotDir, `${route.name}.png`),
      fullPage: true,
    })

    results.push({
      browser: config.name,
      route: route.path,
      screenshot: path.join('artifacts', 'color-verification', kind, config.name, `${route.name}.png`),
      ...state,
    })

    await page.close()
  }

  await context.close()
  await browser.close()
  return results
}

async function main() {
  await ensureDir(outputDir)

  const desktopResults = []
  for (const config of desktopConfigs) {
    desktopResults.push(...(await captureSet(config, 'desktop')))
  }

  const mobileResults = []
  for (const config of mobileConfigs) {
    mobileResults.push(...(await captureSet(config, 'mobile')))
  }

  const report = {
    baseUrl,
    generatedAt: new Date().toISOString(),
    desktopResults,
    mobileResults,
  }

  await fs.writeFile(
    path.join(outputDir, 'report.json'),
    JSON.stringify(report, null, 2),
    'utf8',
  )

  const totalErrors = [...desktopResults, ...mobileResults].filter((entry) => entry.errors.length > 0)

  console.log(`Verification complete. Report saved to ${path.join('artifacts', 'color-verification', 'report.json')}`)
  console.log(`Captured ${desktopResults.length + mobileResults.length} page states.`)

  if (totalErrors.length > 0) {
    console.error(`Detected runtime issues on ${totalErrors.length} page captures.`)
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
