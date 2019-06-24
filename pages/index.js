import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Header from '../parts/Header'
import { debounce } from 'lodash'
import { font_size, line_height, font_min, sm } from '../parts/Static'
import { p } from '../parts/Utils'
import { Hd, Vd, Rect } from '../parts/Dividers'
import posts from '../posts'
import PostPreview from '../parts/PostPreview'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Router from 'next/router'

let posts_per_page = 20

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { grem, c } = this.props

    let search = this.props.router.query
    let params = new URLSearchParams(search)

    let page_number = params.get('pages') || 1
    let post_groups = []
    let published = posts.filter(p => p.published)
    for (let i = 0; i < page_number; i++) {
      if (i * posts_per_page < published.length) {
        let _posts = published.slice(
          i * posts_per_page,
          (i + 1) * posts_per_page
        )
        post_groups.push(_posts)
      }
    }

    return (
      <div>
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="static/images/favicon.png"
          />
          <title>Grant Custer → Writing</title>
          <meta property="og:title" content="Grant Custer → Writing" />
          <meta content="Writing-in-progress about design, code, and ideas." />
          <meta
            property="og:description"
            content="Writing-in-progress about design, code, and ideas."
          />
          <meta
            property="og:image"
            content="https://writing.grantcuster.com/static/images/gray.png"
          />
          <meta property="og:url" content="https://writing.grantcuster.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div style={{ padding: p(grem / 2, 0) }}>
          <div
            style={{
              maxWidth: c * 4,
              padding: p(0, grem / 2),
              margin: `0 auto ${grem}px`,
            }}
          >
            <div>Writing</div>
            <p>Writing-in-progress on design, code, and ideas.</p>
          </div>

          {post_groups.map((g, i) => (
            <div key={'group_' + i} style={{ position: 'relative' }}>
              {g.map((post, i) => (
                <div
                  style={{
                    maxWidth: c * 4,
                    padding: p(0, grem / 2),
                    margin: '0 auto',
                  }}
                >
                  <div>
                    <div style={{ textIndent: grem }}>
                      {post.date.replace(/-/g, '/')}
                    </div>
                    <Link href={post.path_name}>
                      <a key={post.path_name}>{post.title}</a>
                    </Link>
                  </div>
                  {post.summary ? <p>{post.summary}</p> : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Index)
