import { p } from '../parts/Utils'
import Head from 'next/head'
import { debounce } from 'lodash'
import posts from '../posts'
import { MDXProvider } from '@mdx-js/react'
import { Hd, Vd, Rect } from '../parts/Dividers'
import MorePostsPreview from '../parts/MorePostsPreview'
import Highlight, { defaultProps } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import { katex_style } from '../parts/KatexStyle'

let ofs = 16

// Line highlighting from https://github.com/filoxo/blog/commit/3862bb4f5f5d4ebfafa3f773b7c1687fc8ca5bea
const RE = /{([\d,-]+)}/
let calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  } else {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(v => parseInt(v, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  }
}

export class PostLayout extends React.Component {
  render() {
    let { children, pathname } = this.props
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
      cap,
      optim_width,
      stacked,
    } = this.props

    let components = {
      img: props => {
        let address = props.src
        address.replace('{{ site.github.url }}', '')
        address = address.startsWith('http') ? address : `/static${address}`
        return (
          <div
            style={{
              // width: optim_width + ogrem,
              // marginLeft: -grem / 2 - ogrem / 2,
              position: 'relative',
            }}
          >
            <img
              src={address}
              alt={props.alt}
              style={{
                display: 'block',
                margin: '0',
                // maxWidth: optim_width + ogrem,
                width: '100%',
              }}
            />
          </div>
        )
      },
      pre: props => {
        return <div {...props} />
      },
      code: props => {
        let children = props.children
        let metastring = props.metastring
        let shouldHighlightLine = calculateLinesToHighlight(metastring)
        const language =
          props.className !== undefined
            ? props.className.replace(/language-/, '')
            : ''
        return (
          <Highlight
            {...defaultProps}
            code={children}
            language={language}
            theme={undefined}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <div
                style={{
                  position: 'relative',
                  marginBottom: grem,
                  width: stacked
                    ? 4 * column_width + ogrem / 2 + 2
                    : 4 * column_width,
                  marginLeft: stacked ? -ogrem / 4 - grem / 2 - 1 : -grem / 2,
                  marginRight: stacked ? -ogrem / 4 - grem / 2 - 1 : -grem / 2,
                }}
              >
                <div
                  className={className}
                  style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    background: '#f3f3f3',
                  }}
                >
                  <pre
                    style={{
                      ...style,
                      float: 'left',
                      fontSize: fs * 0.75,
                      minWidth: '100%',
                      position: 'relative',
                      lineHeight: 1.5,
                      margin: 0,
                      padding: grem / 2,
                      overflow: 'visible',
                    }}
                  >
                    {tokens.map((line, i) => {
                      let line_props = getLineProps({ line, key: i })
                      let highlight_style = {}
                      if (shouldHighlightLine(i)) {
                        highlight_style = {
                          background: '#ddd',
                          marginLeft: -grem / 2,
                          marginRight: -grem / 2,
                        }
                      }
                      return (
                        <div
                          key={i}
                          {...line_props}
                          style={{
                            ...highlight_style,
                          }}
                        >
                          <span>
                            {post.line_numbers === true ? (
                              <span>
                                style=
                                {{
                                  userSelect: 'none',
                                  marginRight: 12,
                                  color: '#aaa',
                                }}
                                >{(i + 1).toString().padStart(2, '0')}
                              </span>
                            ) : null}
                            {line.map((token, key) => (
                              <span
                                key={key}
                                {...getTokenProps({ token, key })}
                              />
                            ))}
                          </span>
                        </div>
                      )
                    })}
                  </pre>
                  <Rect />
                </div>
              </div>
            )}
          </Highlight>
        )
      },
    }

    let post_index = posts.map(p => p.path_name).indexOf(pathname)
    let prev_index = post_index - 1
    let post = posts[post_index]
    let prev_post = posts[prev_index]

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

    let preview_columns =
      columns > 6 ? Math.floor(columns / 2 / 2) * 2 : columns
    let preview_offset = Math.max(0, columns / 2 - preview_columns)

    let half = Math.floor(columns / 2 / 2) * 2

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
          <title>{post.title} - Cloudera Fast Forward</title>
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
          }
          h1 {
            font-size: ${fs * 3}px;
            line-height: 1.25;
          }
          h2 {
            font-size: ${fs * 2}px;
            line-height: 1.25;
            padding-top: ${grem}px;
            margin-bottom: ${grem}px;
          }
          h3 {
            font-size: ${fs * 1.5}px;
            line-height: 1.25;
            padding-top: ${grem}px;
            margin-bottom: ${grem}px;
          }
          h4 {
            font-size: ${fs * 1.25}px;
            line-height: 1.25;
            padding-top: ${0}px;
            margin-bottom: ${grem}px;
          }
          h5 {
            font-size: ${fs * 0.75}px;
            line-height: 1.4375;
            margin-bottom: ${grem / 2}px;
            padding-bottom: ${grem / 2}px;
            // margin-left: -${grem / 2 + ogrem / 2}px;
            // margin-right: -${grem / 2 + ogrem / 2}px;
            margin-top: -${grem / 2}px;
          }
          h5 em {
          }
          p {
            margin: 0 0 ${grem}px 0;
          }
          ol, ul {
            margin: 0 0 ${grem}px 0;
            padding-left: ${grem}px;
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
            background: #eaeaea;
            padding-right: 3px;
            padding-left: 3px;
            font-size: 0.975em;
            word-break: break-word;
          }
        `}</style>
        <style jsx global>{`
          /* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */
          /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

          code[class*='language-'],
          pre[class*='language-'] {
            color: black;
            background: none;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
              monospace;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;

            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;

            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
          }

          pre[class*='language-']::-moz-selection,
          pre[class*='language-'] ::-moz-selection,
          code[class*='language-']::-moz-selection,
          code[class*='language-'] ::-moz-selection {
            text-shadow: none;
          }

          pre[class*='language-']::selection,
          pre[class*='language-'] ::selection,
          code[class*='language-']::selection,
          code[class*='language-'] ::selection {
            text-shadow: none;
          }

          @media print {
            code[class*='language-'],
            pre[class*='language-'] {
              text-shadow: none;
            }
          }

          /* Code blocks */
          :not(pre) > code[class*='language-'],
          pre[class*='language-'] {
          }

          /* Inline code */
          :not(pre) > code[class*='language-'] {
            white-space: normal;
          }

          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: slategray;
          }

          .token.punctuation {
            color: #999;
          }

          .namespace {
            opacity: 0.7;
          }

          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #905;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #690;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #9a6e3a;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #07a;
          }

          .token.function,
          .token.class-name {
            color: #dd4a68;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }
          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        `}</style>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              paddingLeft: stacked ? ogrem / 4 : ogrem / 2,
              paddingRight: stacked ? ogrem / 4 : ogrem / 2,
              paddingTop: grem,
            }}
          >
            <div style={{}}>
              <div
                style={{
                  display: 'flex',
                  marginBottom: grem / 2,
                  width: Math.min(columns, 6) * column_width,
                  marginLeft:
                    ((columns - Math.min(columns, 6)) / 2) * column_width +
                    offset,
                }}
              >
                <div
                  style={{
                    width: columns === 4 ? column_width * 2 : column_width,
                    padding: p(0, grem / 2),
                    position: 'relative',
                    fontSize: fs * (6 / 8),
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  {published_date}
                </div>
                <div
                  style={{
                    width: columns === 4 ? column_width * 2 : column_width,
                    padding: p(0, grem / 2),
                    position: 'relative',
                    fontSize: fs * (6 / 8),
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  {post.post_type}
                </div>
              </div>
              <div style={{ marginBottom: 0 }}>
                <div
                  style={{
                    fontSize: stacked ? fs * 2.5 : fs * 3,
                    lineHeight: 1.25,
                    padding: p(0, grem / 2),
                    width: Math.min(columns, 6) * column_width,
                    marginLeft:
                      ((columns - Math.min(columns, 6)) / 2) * column_width +
                      offset,
                  }}
                >
                  {post.title}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: columns > 4 ? 5 * column_width : 4 * column_width,
                  marginLeft:
                    (columns > 4
                      ? ((columns - 4) / 2 - (post.author ? 1 : 0)) *
                        column_width
                      : ((columns - 4) / 2) * column_width) + offset,
                }}
              >
                {post.author ? (
                  <div
                    style={{
                      padding: p(
                        stacked ? grem / 2 : grem,
                        grem / 2,
                        stacked ? 0 : grem,
                        grem / 2
                      ),
                      width: stacked ? column_width * 4 : column_width,
                    }}
                  >
                    <div>
                      by{' '}
                      {post.author_link ? (
                        <a href={post.author_link}>{post.author}</a>
                      ) : (
                        post.author
                      )}
                    </div>
                  </div>
                ) : null}

                <div
                  style={{
                    width: column_width * 4,
                    padding: p(grem, grem / 2, grem, grem / 2),
                  }}
                >
                  <MDXProvider components={components}>{children}</MDXProvider>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: grem / 2,
                      display: 'none',
                    }}
                  >
                    <img
                      style={{
                        height: cap,
                        width: cap,
                        position: 'relative',
                        display: 'block',
                      }}
                      src="/static/images/ff.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <MorePostsPreview
              columns={columns}
              grem={grem}
              column_width={column_width}
              next_post={older_post}
              offset={offset}
              prev_post={newer_post}
              fs={fs}
              ww={ww}
              ogrem={ogrem}
            />

            <div style={{ paddingBottom: grem, paddingTop: grem }}>
              <div
                style={{
                  fontSize: fs * 2,
                  lineHeight: 1.25,
                  padding: p(0, grem / 2, 0, grem / 2),
                  marginBottom: grem / 2,
                  ...center_text,
                }}
              >
                About
              </div>
              <div
                style={{
                  padding: p(0, grem / 2),
                  marginBottom: grem / 2,
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
                  padding: p(0, grem / 2),
                  marginBottom: grem / 2,
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

          <div style={{}}>
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
                <div>
                  <a href="/">Blog</a>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ marginRight: grem / 2 }}>
                    <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                      Cloudera
                    </a>
                  </div>
                  <div style={{ marginRight: grem / 2 }}>
                    <a href="https://blog.fastforwardlabs.com/">
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
