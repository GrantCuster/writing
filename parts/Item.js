import React from 'react'
import {
  styles,
  p,
  track,
  sizeMap,
  small_style,
  smaller_style,
} from '../parts/Utils'
import { Hd, Vd, Rect } from './Dividers'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top_height: null,
      bottom_height: null,
    }

    this.top = React.createRef()
    this.bottom = React.createRef()

    this.setTopHeight = this.setTopHeight.bind(this)
    this.setBottomHeight = this.setBottomHeight.bind(this)
  }

  componentDidMount() {
    this.setTopHeight()
    this.setBottomHeight()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      this.setTopHeight()
      this.setBottomHeight()
    }
  }

  setTopHeight() {
    let height = this.top.current.clientHeight
    this.setState({ top_height: height })
  }

  setBottomHeight() {
    let height = this.bottom.current.clientHeight
    this.setState({ bottom_height: height })
  }

  render() {
    let { fs, b, i, grem, spacer, experiments, width, st, iratio } = this.props

    let { top_height, bottom_height } = this.state
    let e = experiments[i]
    let dstyle = e.featured ? {} : small_style
    let display_link
    if (e.url) {
      display_link = e.url.replace(/^.*:\/\//i, '')
    }
    let adjuster = e.featured ? 8 * grem : 4 * grem
    iratio = 1

    let igrem = iratio * styles.font_size * styles.line_height

    if (i === 1) {
      console.log(this.state)
      console.log(experiments[i])
    }

    return (
      <a
        style={{
          position: 'absolute',
          display: 'block',
          left: b.x,
          top: b.y,
          width: b.width,
          height: b.height,
          textDecoration: 'none',
          background: 'var(--lighter_background)',
          background: 'white',
        }}
        className="hover_box"
        href={e.url}
      >
        {top_height ? (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: top_height,
              width: (b.width / 4) * 3,
              width: b.width,
              height: b.height - top_height - bottom_height,
              backgroundImage: `url(${e.image})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          />
        ) : null}
        <div
          style={{
            position: 'relative',
          }}
          ref={this.top}
        >
          <div style={{}}>
            <div
              style={{
                position: 'relative',
                fontSize: fs * (3 / 4),
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                lineHeight: 1,
                padding: p(grem / 2, grem / 2, 0, grem / 2),
              }}
            >
              {e.head}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                fontSize: e.featured ? fs * 2 : fs * 1.5,
                position: 'relative',
                padding: p(grem / 4, grem / 2, grem / 2, grem / 2),
                lineHeight: 1.25,
              }}
            >
              <span className="hover_name">{e.name}</span>
            </div>
            <Hd width="100%" align="b" stroke={fs * styles.stroke_mult} />
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            fontSize: fs,
          }}
          ref={this.bottom}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: bottom_height,
              width: 10,
              background: 'red',
              display: 'none',
            }}
          />
          <Hd width="100%" align="t" stroke={fs * styles.stroke_mult} />
          <div
            style={{
              padding: p(igrem / 2, 0),
              fontSize: e.featured ? fs : fs * 0.875,
              lineHeight: 1.5,
            }}
          >
            <div style={{ padding: p(0, grem / 2) }}>{e.description}</div>
            <div style={{ position: 'relative', padding: p(0, grem / 2) }}>
              <div
                style={{
                  textDecoration: 'underline',
                  width: b.width - grem,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <span className="">{display_link}</span>
              </div>
            </div>
          </div>
          <Hd
            style={{ display: 'none' }}
            width={b.width}
            align="t"
            miter="extend"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: b.width,
            height: b.height,
            pointerEvents: 'none',
            background: 'var(--lighter_background)',
            mixBlendMode: 'darken',
            display: 'none',
          }}
        />
        <div
          className="color2"
          style={{
            display: 'none',
            position: 'absolute',
            left: (-grem / 2) * 0,
            top: (-grem / 2) * 0,
            width: b.width + (grem * 0) / 2,
            height: b.height + (grem * 0) / 2,
            pointerEvents: 'none',
            boxShadow: `0 0 ${grem * 0.5}px rgba(0,0,0,0.4)`,
          }}
        />
        <Rect width="100%" height="100%" stroke={fs * styles.stroke_mult} />
      </a>
    )
  }
}

export default Item
