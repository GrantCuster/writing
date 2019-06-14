const mdx = require('@mdx-js/mdx')
const babel = require('@babel/core')
const fs = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const removeMd = require('remove-markdown')
const s = require('underscore.string')

function requireFromStringSync(src, filename) {
  const Module = module.constructor
  const m = new Module()
  m._compile(src, filename)
  return m.exports
}

function requireMDXSync(mdxSrc, filename) {
  const jsx = mdx.sync(mdxSrc)
  const babelOptions = babel.loadOptions({
    babelrc: false,
    presets: [
      '@babel/preset-react',
      // ^^^ mitigates error:
      // SyntaxError: unknown: Unexpected token (6:33)
      // > 6 | export default ({components}) => <MDXTag name="wrapper">{`
      //     |e                                 ^
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      // ^^^ mitigages error:
      // hello.mdx:1
      // (function (exports, require, module, __filename, __dirname) { export const meta = {
      //                                                               ^^^^^^
      //      SyntaxError: Unexpected token export
    ],
  })
  const transformed = babel.transformSync(jsx, babelOptions)
  return requireFromStringSync(transformed.code, filename)
}

function requireMDXFileSync(path) {
  const mdxSrc = fs.readFileSync(path, { encoding: 'utf-8' })
  return requireMDXSync(mdxSrc, path)
}

function getPostFromPath(path) {
  const mdxSrc = fs.readFileSync(path, { encoding: 'utf-8' })
  return matter(mdxSrc)
}

function scanDir(dirPath, extension) {
  const mdxFiles = []
  const scan = dirPath => {
    const filenames = fs.readdirSync(dirPath)
    filenames.sort()
    filenames.map(filename => {
      const filePath = path.join(dirPath, filename)
      const st = fs.statSync(filePath)
      if (st.isFile() && filePath.endsWith(extension)) {
        mdxFiles.push(filePath)
      }
      if (st.isDirectory()) {
        scan(filePath)
      }
    })
  }
  scan(dirPath)
  return mdxFiles
}

function readPostMetadata(postPath) {
  let post = getPostFromPath(postPath)

  let import_free_content = post.content.replace(/^import.*\n?/m, '')
  let excerpt = s.prune(
    removeMd(import_free_content, { useImgAltText: false }),
    140 * 2
  )
  // console.log(excerpt)
  let meta = post.data

  let url_path = postPath
    .replace(/\\/, '/')
    .replace(/^pages/, '')
    .replace(/\.mdx?$/, '')

  // Modified for serving according to jekyll file path conventions
  let path_name = url_path
  if (process.argv[2] === 'prod') {
    url_path =
      url_path
        .replace('/posts', '')
        .replace('-', '/')
        .replace('-', '/')
        .replace('-', '/') + '.html'
  }

  return {
    filePath: postPath,
    urlPath: url_path,
    path_name: path_name,
    publishDate: new Date(meta.date),
    title: meta.title || path.basename(postPath),
    summary: meta.summary || null,
    date: meta.date || null,
    preview_image: meta.preview_image,
    feature: meta.feature || false,
    published: meta.published || true,
    author: meta.author,
    post_type: meta.post_type || 'post',
    author_link: meta.author_link,
    excerpt: excerpt,
    external_url: meta.external_url || false,
  }
}

function generateRSS(posts) {
  const siteUrl = 'https://blog.fastforwardlabs.com'
  const feed = new RSS({
    title: 'Cloudera Fast Forward LAbs Blog',
    site_url: siteUrl,
  })
  posts.map(post => {
    feed.item({
      title: post.title,
      guid: post.urlPath,
      url: siteUrl + post.urlPath,
      date: post.publishDate,
    })
  })
  return feed.xml({ indent: true })
}

function main() {
  const postPaths = scanDir('pages/posts', '.md')
  // console.debug({ postPaths })
  // const now = new Date()
  let posts = postPaths.map(readPostMetadata)
  posts.sort((a, b) => b.publishDate - a.publishDate)
  // console.debug({ posts })
  const postsJSON = JSON.stringify(posts, null, 2)
  const exportPath = 'posts.js'
  fs.writeFileSync(
    exportPath,
    '// automatically generated by build_post_index.js\n' +
      `export default ${postsJSON}\n`
  )
  console.info(`Saved ${posts.length} posts in ${exportPath}`)
  const rssPath = 'static/rss-feed.xml'
  const rssXML = generateRSS(posts)
  fs.writeFileSync(rssPath, rssXML)
  console.info(`Saved RSS feed to ${rssPath}`)
}

main()
