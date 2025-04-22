/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://asamvn.com.vn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
