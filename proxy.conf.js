const PROXY_CONFIG = {
  '/api/proxy': {
    target: 'https://api.test-cobiro.com/api/v1/',
    secure: true,
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: { '^/api/proxy': '' },
    bypass: function(req, res, proxyOptions) {
      if (req.headers.accept.indexOf('html') !== -1) {
        console.log('Skipping proxy for browser request.');
        return '/index.html';
      }
      req.headers['X-Custom-Header'] = 'yes';
    }
  }
};

module.exports = PROXY_CONFIG;
