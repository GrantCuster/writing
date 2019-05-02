import React from 'react'
import { styles, p } from '../parts/Utils'
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
    if (
      prevProps.width !== this.props.width ||
      prevProps.grem !== this.props.grem
    ) {
      this.setTopHeight()
      this.setBottomHeight()
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
      fs,
      b,
      i,
      grem,
      spacer,
      experiments,
      columns,
      width,
      stroke_color,
    } = this.props

    let { top_height, bottom_height } = this.state
    let e = experiments[i]

    let display_link = ''
    if (e.url) {
      display_link = e.url.replace(/^.*:\/\//i, '')
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
                fontSize: e.featured
                  ? fs * 2
                  : columns === 4
                  ? fs * 1.25
                  : fs * 1.5,
                position: 'relative',
                padding: p(grem / 4, grem / 2, grem / 2, grem / 2),
                lineHeight: 1.25,
              }}
            >
              <span className="hover_name">{e.name}</span>
            </div>
            <Hd
              width="100%"
              align="b"
              color={stroke_color}
              stroke={fs * styles.stroke_mult}
            />
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            fontSize: fs,
            width: '100%',
          }}
        >
          <div ref={this.bottom}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                height: bottom_height,
                width: 10,
              }}
            />
            <Hd
              width="100%"
              align="t"
              color={stroke_color}
              stroke={fs * styles.stroke_mult}
            />
            <div
              style={{
                padding: p(grem / 2, 0),
                fontSize: e.featured
                  ? fs
                  : columns === 4
                  ? fs * 0.75
                  : fs * 0.875,
                lineHeight: 1.5,
              }}
            >
              <div style={{ padding: p(0, grem / 2) }}>{e.description}</div>
              <div style={{ position: 'relative', padding: p(0, grem / 2) }}>
                <div
                  style={{
                    textDecoration: 'underline',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <span className="">{display_link}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Rect
          width="100%"
          height="100%"
          color={stroke_color}
          stroke={fs * styles.stroke_mult}
        />
      </a>
    )
  }
}

export default Item
