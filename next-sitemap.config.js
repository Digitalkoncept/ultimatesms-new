/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ultimatesms.in',
    generateRobotsTxt: true, // (optional)
    sitemapBaseFileName:'sitemap.xml'
    // ...other options
  }