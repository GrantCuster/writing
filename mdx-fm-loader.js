// front-matter loader for mdx
const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

module.exports = async function(src) {
  const callback = this.async()
  const { content, data } = matter(src)

  let import_check = data.imports !== undefined
  let imports = ''
  if (import_check) {
    imports = data.imports.join('\n')
  }

  console.log(imports)

  const code = `${imports}
export const frontMatter = ${stringifyObject(data)}

${content}
  `
  return callback(null, code)
}
