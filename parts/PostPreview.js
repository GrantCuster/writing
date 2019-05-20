import React from 'react'
import { Hd, Vd, Rect } from '../parts/Dividers'
import { p } from '../parts/Utils'
import Truncate from 'react-truncate'
import Link from 'next/link'

class PostPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top_height: null,
      bottom_height: null,
    }

    this.top = React.createRef()

    this.setTopHeight = this.setTopHeight.bind(this)
    this.setBottomHeight = this.setBottomHeight.bind(this)
  }

  componentDidMount() {
    this.setTopHeight()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ww !== this.props.ww || prevProps.grem !== this.props.grem) {
      this.setTopHeight()
    }
  }

  setTopHeight() {
    let height = this.top.current.getBoundingClientRect().height
    this.setState({ top_height: height })
  }

  setBottomHeight() {
    let height = this.bottom.current.getBoundingClientRect().height
    this.setState({ bottom_height: height })
  }

  render() {
    let {
      post,
      grem,
      column_width,
      fs,
      ogrem,
      columns,
      extra_left = 0,
      extra_right = 0,
      adjust_left = 0,
      adjust_right = 0,
    } = this.props
    let { top_height, bottom_height } = this.state
    let post_date = new Date(post.publishDate)
    let published_date = `${post_date.toLocaleString('en-us', {
      month: 'short',
    })} ${(post_date.getDay() + 1)
      .toString()
      .padStart(2, '0')} ${post_date.getFullYear()}`

    let post_height = post.feature ? grem * 7.5 * 2.5 : grem * 7.5
    let bottom_available_lines = 2
    if (top_height) {
      // subtract top_height, padding, read_more height
      let bottom_available = top_height - grem / 2
      bottom_available_lines = Math.floor(bottom_available / (grem * 0.625))
    }

    return (
      <Link
        href={post.external_url ? post.external_url : post.path_name}
        as={post.external_url ? post.external_url : post.urlPath}
      >
        <a
          className="hover-box no-underline no-hover gray-backer hover-extend"
          key={post.urlPath}
          onMouseEnter={() => {}}
          ref={this.top}
          style={{
            display: 'block',
            position: 'relative',
            width: columns * column_width + extra_left + extra_right,
            paddingLeft: extra_left,
            paddingRight: extra_right,
            marginLeft: adjust_left,
            marginRight: adjust_right,
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                width: columns > 6 ? column_width * 2 : column_width * 4,
                fontSize: fs * (6 / 8),
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                lineHeight: 1.5,
                marginLeft: Math.max(((columns - 10) / 2) * column_width, 0),
              }}
            >
              <div
                style={{
                  width: column_width,
                  padding: p(grem / 2, grem / 2, 0, grem / 2),
                }}
              >
                <div>{published_date}</div>
              </div>
              <div
                style={{
                  width: columns === 4 ? column_width * 2 : column_width,
                  padding: p(grem / 2, grem / 2, 0, grem / 2),
                }}
              >
                <div>{post.post_type}</div>
              </div>
            </div>

            {columns > 8 ? (
              <div
                style={{
                  width: column_width,
                  padding: grem / 2,
                  fontSize: fs * 0.875,
                  lineHeight: 1.5,
                }}
              >
                {post.author ? <span>by {post.author}</span> : null}
              </div>
            ) : null}

            <div
              style={{
                position: 'relative',
                width:
                  columns > 8
                    ? (columns - 4) * column_width
                    : columns === 6
                    ? columns * column_width
                    : columns === 4
                    ? column_width * 4
                    : (columns - 3) * column_width,
                padding: p(grem / 2, 0),
              }}
            >
              <div
                style={{
                  fontSize: post.feature ? fs * 2 : fs * 1.5,
                  lineHeight: 1.25,
                  padding: p(0, grem / 2),
                  marginTop: columns < 8 ? -grem / 4 : 0,
                }}
              >
                <div style={{ paddingLeft: columns === 6 ? column_width : 0 }}>
                  {post.title}
                  {post.external_url ? ' ↗' : ''}
                </div>
              </div>
              <div style={{ paddingTop: grem / 4, position: 'relative' }}>
                <div
                  style={{
                    fontSize: fs * 0.875,
                    lineHeight: '1.5em',
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingLeft: columns === 6 ? column_width : 0,
                  }}
                >
                  {columns < 10 && columns > 4 ? (
                    <div
                      style={{
                        width: column_width,
                        padding: p(0, grem / 2),
                      }}
                    >
                      {post.author ? <span>by {post.author}</span> : null}
                    </div>
                  ) : null}
                  <div
                    style={{
                      padding: p(0, grem / 2),
                      width:
                        columns > 8
                          ? column_width * 4
                          : columns === 4
                          ? column_width * 2
                          : column_width * 3,
                    }}
                  >
                    <div
                      style={{
                        height: grem * 0.875 * (columns === 4 ? 4 : 3),
                        overflow: 'hidden',
                        display: '-webkit-box',
                        webkitLineClamp: columns === 4 ? '4' : '3',
                        hyphens: 'auto',
                        webkitBoxOrient: 'vertical',
                      }}
                    >
                      {columns === 4 && post.author ? (
                        <span>by {post.author} ◦ </span>
                      ) : null}
                      {post.excerpt}
                    </div>
                    <div
                      style={{
                        overflow: 'hidden',
                        width: '100%',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span className="display-link">
                        {post.external_url ? (
                          post.external_url
                        ) : (
                          <span>
                            View{' '}
                            <span style={{ textTransform: 'lowercase' }}>
                              {post.post_type}
                            </span>
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                  {columns < 8 ? (
                    <div
                      style={{
                        position: 'relative',
                        width:
                          columns === 4 ? column_width * 2 : column_width * 1,
                      }}
                    >
                      <div
                        style={{
                          width: `calc(100% - ${grem}px)`,
                          height: `calc(100% - ${grem / 2}px)`,
                          marginLeft: grem / 2,
                          marginTop: grem / 4,
                          backgroundImage: `url(${
                            post.preview_image &&
                            post.preview_image.startsWith('http')
                              ? post.preview_image
                              : '/static' + post.preview_image
                          })`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {columns > 6 ? (
              <div
                style={{
                  position: 'relative',
                  width: column_width * 1,
                }}
              >
                <div
                  style={{
                    width: `calc(100% - ${grem}px)`,
                    height: `calc(100% - ${grem}px)`,
                    marginLeft: grem / 2,
                    marginTop: grem / 2,
                    backgroundImage: `url(${
                      post.preview_image &&
                      post.preview_image.startsWith('http')
                        ? post.preview_image
                        : '/static' + post.preview_image
                    })`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            ) : null}
          </div>
          <Hd align="t" />
        </a>
      </Link>
    )
  }
}

export default PostPreview
