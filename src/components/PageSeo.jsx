import { Helmet } from 'react-helmet-async'

function PageSeo({ title, description, image = 'https://picsum.photos/1200/630?grayscale' }) {
  const pageTitle = `${title} | The Total Forge`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="The Total Forge" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default PageSeo
