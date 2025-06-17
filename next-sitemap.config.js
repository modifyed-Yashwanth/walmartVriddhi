/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://walmart-vriddhi-ybmx.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ]
  },
  generateIndexSitemap: false
}