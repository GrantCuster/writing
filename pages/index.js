import fetch from 'isomorphic-unfetch'

import Head from 'next/head'
import Header from '../parts/Header'
import { debounce } from 'lodash'
import { font_size, line_height, font_min, sm } from '../parts/Static'
import { p } from '../parts/Utils'
import { Hd, Vd, Rect } from '../parts/Dividers'
import posts from '../posts'
import PostPreview from '../parts/PostPreview'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing_posts: 25,
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
    } = this.props

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
          <div style={{ padding: p(grem / 4, ogrem / 2) }}>
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
                {posts
                  .filter(post => post.published === true)
                  .slice(0, showing_posts)
                  .map((post, i) => (
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
                    />
                  ))}
                {showing_posts < posts.length ? (
                  <button
                    className="gray-backer"
                    onClick={() => {
                      this.setState({ showing_posts: showing_posts + 25 })
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

            <div style={{ padding: p(0, 0), marginBottom: grem * 2 }}>
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

export default Index
