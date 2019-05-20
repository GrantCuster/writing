const withMDX = require('@next/mdx')()
const path = require('path')

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: function(defaultPathMap) {
    let pathMap = Object.assign({}, defaultPathMap)
    delete pathMap['/index']
    for (let key of Object.keys(pathMap)) {
      if (key.startsWith('/posts')) {
        // main dir, then replace first three hyphens
        // modifications to match jekyll urls
        let mod_key = key
          .replace('/posts', '')
          .replace('-', '/')
          .replace('-', '/')
          .replace('-', '/')
        mod_key = mod_key + '.html'
        pathMap[mod_key] = pathMap[key]
        delete pathMap[key]
      }
    }
    console.log(pathMap)
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
