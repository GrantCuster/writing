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
import Router from 'next/router'

let posts_per_page = 20

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing_posts: posts_per_page,
    }
  }

  render() {
    let { showing_posts } = this.state
    let {
      grem,
      ogrem,
      center_text,
      afs,
      fsn,
      fs,
      columns,
      column_width,
      offset,
      ww,
      wh,
      optimal,
      stacked,
    } = this.props

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
          <title>Blog – Cloudera Fast Forward</title>
          <meta
            property="og:title"
            content="Experiments - Cloudera Fast Forward"
          />
          property="description"
          <meta content="Machine learning visualizations and code by Cloudera Fast Forward." />
          <meta
            property="og:description"
            content="Machine learning visualizations and code by Cloudera Fast Forward."
          />
          <meta
            property="og:image"
            content="https://experiments.fastforwardlabs.com/static/images/experiments-share.png"
          />
          <meta
            property="og:url"
            content="https://experiments.fastforwardlabs.com"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div>
          <div
            style={{ padding: p(grem / 4, stacked ? ogrem / 4 : ogrem / 2) }}
          >
            <div
              style={{
                ...center_text,
                padding: p(grem / 4, grem / 2),
                fontSize: afs * 3,
                lineHeight: 1.25,
                position: 'relative',
              }}
            >
              Blog
            </div>
            <div
              style={{
                padding: p(grem / 4, grem / 2),
                ...center_text,
                ...fsn,
              }}
            >
              Posts on machine learning and other emerging technologies by{' '}
              <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                Cloudera Fast Forward Labs
              </a>
              .
            </div>

            <div style={{ padding: p(grem / 2, 0, grem, 0) }}>
              <div
                style={{
                  position: 'relative',
                }}
              >
                {post_groups.map((g, i) => {
                  let first = g[0]
                  let first_date = new Date(first.publishDate)
                  let first_short_date = `${first_date.toLocaleString('en-us', {
                    month: 'short',
                  })} ${first_date.getFullYear()}`
                  let last = g[g.length - 1]
                  let last_date = new Date(last.publishDate)
                  let last_short_date = `${last_date.toLocaleString('en-us', {
                    month: 'short',
                  })} ${last_date.getFullYear()}`

                  return (
                    <div key={'group_' + i} style={{ position: 'relative' }}>
                      {i !== 0 ? (
                        <div
                          style={{
                            paddingTop: grem * 2,
                            paddingBottom: grem / 2,
                            paddingLeft:
                              columns > 10
                                ? offset + ((columns - 10) / 2) * column_width
                                : offset,
                            display: 'flex',
                            fontSize: fs * 0.75,
                            lineHeight: 1.5,
                            textTransform: 'uppercase',
                            letterSpacing: '0.03em',
                          }}
                        >
                          <div
                            style={{
                              width:
                                columns > 8
                                  ? 3 * column_width
                                  : 2 * column_width,
                              padding: p(0, grem / 2),
                            }}
                          >
                            {first_short_date} &ndash; {last_short_date}
                          </div>
                          <div
                            style={{
                              width:
                                columns === 4
                                  ? 2 * column_width
                                  : ((columns - 4) / 2) * column_width,
                              padding: p(0, grem / 2),
                            }}
                          >
                            {`Page ${i + 1}`}
                          </div>
                        </div>
                      ) : (
                        <div style={{ height: grem / 2 }} />
                      )}
                      {g.map((post, i) => (
                        <PostPreview
                          key={post.title}
                          post={post}
                          grem={grem}
                          ww={ww}
                          fs={fs}
                          ogrem={ogrem}
                          columns={columns}
                          column_width={column_width}
                          extra_left={ogrem / 2 + offset}
                          extra_right={ogrem / 2 + offset}
                          adjust_left={-ogrem / 2}
                          adjust_right={-ogrem / 2}
                          stacked={stacked}
                        />
                      ))}
                      <div
                        style={{
                          position: 'relative',
                          marginLeft: -grem / 2,
                          marginRight: -grem / 2,
                        }}
                      >
                        <Hd align="b" />
                      </div>
                    </div>
                  )
                })}
                {page_number * posts_per_page < published.length ? (
                  <button
                    className="gray-backer"
                    onClick={() => {
                      Router.push({
                        pathname: this.props.router.pathname,
                        query: { pages: parseInt(page_number) + 1 },
                      })
                    }}
                    style={{
                      display: 'block',
                      paddingTop: grem / 2,
                      paddingBottom: grem / 2,
                      paddingLeft:
                        ogrem / 2 +
                        (columns > 4 ? ((columns - 4) / 2) * column_width : 0) +
                        offset +
                        grem / 2,
                      fontSize: fs * 1,
                      lineHeight: 1.5,
                      marginLeft: -ogrem / 2,
                      marginRight: -ogrem / 2,
                      position: 'relative',
                      fontFamily: 'inherit',
                      border: 'none',
                      width: '100vw',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textAlign: 'left',
                    }}
                  >
                    Load more posts
                    <Hd align="t" />
                  </button>
                ) : null}
                <div
                  style={{
                    marginLeft: -ogrem / 2,
                    marginRight: -ogrem / 2,
                    position: 'relative',
                  }}
                >
                  <Hd align="b" />
                </div>
              </div>
            </div>

            <div style={{ padding: p(0, 0) }}>
              <div
                style={{
                  fontSize: fs * 2,
                  lineHeight: 1.25,
                  padding: p(grem / 4, grem / 2),
                  ...center_text,
                }}
              >
                About
              </div>
              <div
                style={{
                  padding: p(grem / 4, grem / 2),
                  ...center_text,
                  ...fsn,
                }}
              >
                Cloudera Fast Forward Labs is an applied machine learning
                research group. We help organizations recognize and develop new
                product and business opportunities through emerging
                technologies.{' '}
              </div>
              <div
                style={{
                  padding: p(grem / 4, grem / 2),
                  ...center_text,
                  ...fsn,
                }}
              >
                <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                  Learn more about working with us.
                </a>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: grem / 2 }}>
            <div style={{ position: 'relative' }}>
              <Hd width="100%" align="t" fs={fs} />
              <div
                style={{
                  padding: grem / 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  ...fsn,
                }}
              >
                <div>Cloudera Fast Forward Labs</div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ marginRight: grem / 2 }}>
                    <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                      Cloudera
                    </a>
                  </div>
                  <div style={{ marginRight: grem / 2 }}>
                    <a href="https://blog.fastforwardlabs.com/">Blog</a>
                  </div>
                  <div style={{}}>
                    <a href="https://twitter.com/fastforwardlabs">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Index)
