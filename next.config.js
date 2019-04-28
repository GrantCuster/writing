module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/exp' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
}
