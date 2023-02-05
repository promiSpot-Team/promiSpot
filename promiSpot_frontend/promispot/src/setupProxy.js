const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('1')
module.exports = function(app){
  app.use(
    createProxyMiddleware('/kakao', {
      target: 'https://place.map.kakao.com',
      pathRewrite: {
        '^/kakao':''
      },
      changeOrigin: true
    })
  )

  app.use(
    createProxyMiddleware('/api', {
      target: 'http://i8a109.p.ssafy.io/api',
      pathRewrite: {
        '^/api':''
      }
    })
  )
};