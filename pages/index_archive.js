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
          <title>Grant Custer – Writing</title>
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

        <div style={{ background: '#efefef' }}>
          <div
            style={{ padding: p(grem / 4, stacked ? ogrem / 4 : ogrem / 2) }}
          >
            <div
              style={{
                ...center_text,
                padding: p(grem / 2, grem / 2),
                background: '#fff',
              }}
            >
              <div style={{ textIndent: 0 }}>Header 1</div>
              <div style={{ textIndent: grem / 2 }}>Sub header</div>
              <div style={{ textIndent: grem }}>Sub 2 header</div>
              <div style={{ textIndent: grem * 1.5 }}>
                If I write an outline with titles
              </div>
              <div style={{ textIndent: grem }}>Sub 2 header</div>
            </div>

            <div
              style={{
                ...center_text,
                padding: p(grem / 4, grem / 2),
                fontSize: afs * 3,
                lineHeight: 1.25,
                position: 'relative',
              }}
            >
              SciFi
            </div>
            <div
              style={{
                padding: p(grem / 4, grem / 2),
                ...center_text,
                ...fsn,
              }}
            >
              A collection of short fiction inspired by new developments in
              machine learning. Each story takes its theme from the topic of the{' '}
              <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                Cloudera Fast Forward Labs
              </a>{' '}
              report it appears in.
            </div>

            <div style={{}}>
              <div
                style={{
                  position: 'relative',
                }}
              >
                {post_groups.map((g, i) => {
                  return (
                    <div key={'group_' + i} style={{ position: 'relative' }}>
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
                    </div>
                  )
                })}
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
                <div>Scifi – Cloudera Fast Forward Labs</div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ marginRight: grem / 2 }}>
                    <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                      Cloudera
                    </a>
                  </div>
                  <div style={{ marginRight: grem / 2 }}>
                    <a href="https://experiments.fastforwardlabs.com/">
                      AI Experiments
                    </a>
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
