const withMDX = require('@next/mdx')()
const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: function(defaultPathMap) {
    let pathMap = Object.assign({}, defaultPathMap)
    delete pathMap['/index']
    return pathMap
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {},
        },
        path.join(__dirname, './mdx-fm-loader'),
      ],
    })
    return config
  },
}