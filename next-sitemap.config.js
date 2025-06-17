/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.walmartvriddhi.org',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ]
  },
  generateIndexSitemap: false
}