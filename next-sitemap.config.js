module.exports = {
  siteUrl: 'https://y-agent.cn',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    // 自定义优先级和更新频率
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};