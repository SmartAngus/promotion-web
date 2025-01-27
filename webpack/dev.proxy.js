module.exports = {
  '/wkylin': {
    // target: 'https://jsonplaceholder.typicode.com',
    target: 'https://my-json-server.typicode.com',
    // pathRewrite: { '^/wkylin': '/wkylin' },
    secure: false,
    changeOrigin: true,
  },
  '/faker': {
    target: 'http://localhost:4000',
    pathRewrite: { '^/faker': '' },
    secure: false,
    changeOrigin: true,
    cookieDomainRewrite: 'localhost',
  },
}
