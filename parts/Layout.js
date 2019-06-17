import { p } from '../parts/Utils'
import Head from 'next/head'
import Link from 'next/link'
import { debounce } from 'lodash'
import posts from '../posts'
import { MDXProvider } from '@mdx-js/react'
import { font_size, line_height, font_min, sm } from '../parts/Static'

let ofs = 16

export class PostLayout extends React.Component {
  render() {
    let { children, pathname } = this.props
    let { grem, c } = this.props

    let post_index = posts.map(p => p.path_name).indexOf(pathname)
    let prev_index = post_index - 1
    let post = posts[post_index]
    let prev_post = posts[prev_index]

    let components = {}

    function getNewerPost(index, posts) {
      let next_try = posts[index - 1]
      if (next_try === undefined) {
        return undefined
      } else {
        if (next_try.external_url !== false) {
          return getNewerPost(index - 1, posts)
        } else {
          return next_try
        }
      }
    }

    let newer_post = getNewerPost(post_index, posts)

    function getOlderPost(index, posts) {
      let next_try = posts[index + 1]
      if (next_try === undefined) {
        return undefined
      } else {
        if (next_try.external_url !== false) {
          return getOlderPost(index + 1, posts)
        } else {
          return next_try
        }
      }
    }

    let older_post = getOlderPost(post_index, posts)

    let post_date = new Date(post.publishDate)
    let published_date = `${post_date.toLocaleString('en-us', {
      month: 'short',
    })} ${(post_date.getDay() + 1)
      .toString()
      .padStart(2, '0')} ${post_date.getFullYear()}`

    let fs = font_size

    return (
      <div>
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="static/images/favicon.png"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css"
            integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j"
            crossorigin="anonymous"
          />
          <title>{post.title}</title>
          <meta property="og:title" content={post.title} />
          <meta content={post.summary} />
          <meta property="og:description" content={post.summary} />
          <meta
            property="og:image"
            content="https://writing.grantcuster.com/static/images/gray.png"
          />
          <meta
            property="og:url"
            content={`https://writing.grantcuster.com${pathname}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <style jsx global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 400;
            font-style: normal;
            margin: 0;
            font-size: ${font_size}px;
            line-height: ${line_height};
            margin-top: 1.5rem;
          }
         ol,
          ul {
            margin: 0 0 0 0;
            // padding-left: ${grem}px;
            list-style-position: inside;
            padding-left: 0;
            text-indent: ${grem}px;
          }
          ol li,
          ul li {
            // text-indent: ${grem}px;
          }
          blockquote {
            margin: 0 0 ${grem}px ${grem}px;
          }
          .html-video-holder {
            margin: 0 0 ${grem}px 0;
          }
          video {
            max-width: 100%;
          }
          code {
            padding-right: 3px;
            background: #eaeaea;
            padding-left: 3px;
            font-size: 0.975em;
            word-break: break-word;
          }
        `}</style>
        <div
          style={{
            maxWidth: c * 4,
            padding: p(grem / 2, grem / 2, grem * 2, grem / 2),
            margin: `0 auto`,
          }}
        >
          <div style={{ marginBottom: grem }}>{post.title}</div>
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
      </div>
    )
  }
}
