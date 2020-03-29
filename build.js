let fs = require('fs')

let htmlparser2 = require('htmlparser2')

let feed = {
  version: 'https://jsonfeed.org/version/1',
  title: 'Writing - Grant Custer',
  home_page_url: 'https://writing.grantcuster.com',
  feed_url: 'https://writing.grantcuster.com/feed.json',
  author: {
    name: 'Grant Custer',
    url: 'https://index.grantcuster.com',
  },
  items: [],
}

let filenames = fs.readdirSync('posts').reverse()
let files = filenames.map(filename => {
  let content = fs.readFileSync('posts/' + filename, 'utf-8')
  let item = {
    title: null,
    description: null,
    image: null,
    url: null,
    date_published: null,
  }
  let parser = new htmlparser2.Parser({
    onopentag(name, a) {
      if (name === 'meta') {
        if (a.property === 'og:title') {
          item.title = a.content
        } else if (a.property === 'og:description') {
          item.description = a.content
        } else if (a.property === 'og:image') {
          item.image = a.content
        } else if (a.property === 'og:url') {
          item.url = a.content
        } else if (a.property === 'og:date_published') {
          item.date_published = a.content
        }
      }
    },
  })
  parser.write(content)
  feed.items.push(item)
})
fs.writeFileSync('feed.json', JSON.stringify(feed))
