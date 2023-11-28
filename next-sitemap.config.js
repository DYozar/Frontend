/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'http://localhost:3000/',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'http://localhost:3000/sitemap.xml', // <==== Add here
      ],
    },
  }