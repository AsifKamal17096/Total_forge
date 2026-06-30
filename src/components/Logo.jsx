import { Link } from 'react-router-dom'

function Logo({ compact = false }) {
  return (
    <Link to="/" aria-label="The Total Forge home" className="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 320 72"
        role="img"
        aria-labelledby="total-forge-logo-title"
        className={compact ? 'h-10 w-auto' : 'h-12 w-auto'}
      >
        <title id="total-forge-logo-title">The Total Forge</title>
        <g transform="translate(4 8)">
          <path
            d="M24 0 44 11.5v23L24 46 4 34.5v-23Z"
            fill="none"
            stroke="var(--logo-accent)"
            strokeWidth="2.5"
          />
          <path d="M24 10 34 16v12L24 34 14 28V16Z" fill="var(--logo-accent)" opacity="0.45" />
          <path d="M17 40h14" stroke="var(--logo-accent)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text
          x="64"
          y="33"
          fill="var(--logo-base)"
          fontSize="22"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          letterSpacing="1.2"
        >
          THE TOTAL
        </text>
        <text
          x="64"
          y="58"
          fill="var(--logo-accent)"
          fontSize="28"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          letterSpacing="0.4"
        >
          Forge
        </text>
      </svg>
    </Link>
  )
}

export default Logo
