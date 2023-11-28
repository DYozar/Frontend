/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://insightmedium.blog/',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['//server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://insightmedium.blog/server-sitemap-index.xml', // <==== Add here
      ],
    },
  }