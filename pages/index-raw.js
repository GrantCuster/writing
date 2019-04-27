import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { styles, p, track, sizeMap, small_style } from '../parts/Utils'
import { Hd, Vd, Rect, Fdiv } from '../parts/Dividers'
import { pack } from '../parts/Binpack-2d-port'
import FFuture from '../parts/FFuture'
import ExpGrid from '../parts/ExpGrid'
import * as chroma from 'chroma-js'
import { sortBy } from 'lodash'
import { debounce } from 'lodash'
import Svggraph from '../parts/Svggraph'

const dev = process.env.NODE_ENV !== 'production'
const server = dev
  ? 'http://localhost:3000'
  : 'https://your_deployment.server.com'

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  constructor(props) {
    super(props)
    var now = new Date()
    var start = new Date(now.getFullYear(), 0, 0)
    var diff =
      now -
      start +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000 * 24
    var oneDay = 1000 * 60 * 60 * 24
    var day_in_year = Math.floor(diff / oneDay)

    this.state = {
      ww: 600,
      wh: 800,
      loaded: false,
      hex: chroma.hcl(Math.floor((day_in_year / 365) * 360), 60, 80),
      active_node: null,
      day: day_in_year,
      cover_height: null,
    }
    this.setSize = this.setSize.bind(this)
    this.setSize = debounce(this.setSize, 100)
    this.setActiveNode = this.setActiveNode.bind(this)
  }

  setSize() {
    console.log('set size')
    let cover_height = this.cover.clientHeight
    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
      },
      () => {
        this.setCoverHeight()
      }
    )
  }

  setActiveNode(i) {
    this.setState({ active_node: i })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSize)
    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        loaded: true,
      },
      () => {
        this.setCoverHeight()
      }
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize)
  }

  setCoverHeight() {
    let height = this.cover.clientHeight
    this.setState({ cover_height: height })
  }

  render() {
    let { experiments } = this.props
    let { ww, wh, hex, loaded, cover_height } = this.state

    let grem = styles.font_size * styles.line_height

    let cap = grem * (2048 / 2816)

    let side_width = 16 * grem
    side_width = 0

    let min_for_side = side_width + 22 * grem

    let stacked = true

    let cover_style = { width: ww, position: 'relative' }
    let content_style = {}
    if (ww > min_for_side && false) {
      stacked = false
      cover_style = Object.assign({}, cover_style, {
        position: 'fixed',
        left: 0,
        top: 0,
        height: wh,
        width: side_width,
      })
      content_style = Object.assign({}, content_style, {
        paddingLeft: side_width,
      })
    }

    let spacer = 0 + grem * 2

    let grid_width = ww - side_width - grem
    if (stacked) grid_width = ww
    let target_width = grem * 10 + spacer
    let target_height = grem * 12
    let avail = grid_width
    let columns = Math.floor(avail / target_width)
    let column_width = Math.floor(avail / columns - spacer)

    let sized_experiments = experiments.map(e => {
      let w = Math.round(column_width)
      let h = Math.round(target_height)
      if (e.featured === true) {
        return {
          width: Math.min(w * 2 + spacer, ww - spacer),
          height: h * 2 + spacer,
        }
      } else {
        return {
          width: Math.min(w, ww - spacer),
          height: h,
        }
      }
    })

    let packed = pack(
      { width: avail, height: Infinity },
      sized_experiments,
      spacer
    )

    let altered = packed.boxes.slice()

    // altered.push(...spaces_set)

    altered.unshift({
      width: grid_width - grem * 2,
      height: target_height,
      x: 0,
      y: -(target_height + spacer),
      featured: false,
      spacer: true,
    })

    altered.push({
      width: grid_width - grem * 2,
      height: target_height,
      x: 0,
      y: packed.container.height + (target_height + spacer),
    })

    let center_points = altered.map((b, i) => {
      let lx = b.x + spacer / 2
      let x = lx + b.width / 2
      let y = b.y + b.height / 2 + (target_height + spacer) / 2
      return { i, x, y, spacer: b.spacer }
    })

    let top_left_points = altered.map((b, i) => {
      let lx = b.x + spacer / 2
      let x = lx + b.width / 2
      let y = b.y + grem + (target_height + spacer) / 2
      return { i, x, y }
    })

    let bottom_left_points = altered.map((b, i) => {
      let lx = b.x + spacer / 2
      let x = lx + b.width / 2
      let y = b.y + b.height + grem + (target_height + spacer) / 2
      return { i, x, y }
    })

    let y_sorted = sortBy(top_left_points, 'y')
    let y_sorted_bottom_left = sortBy(bottom_left_points, 'y').reverse()

    let rows = []
    for (let i = 0; i < y_sorted.length; i++) {
      let p = y_sorted[i]
      if (rows.length > 0) {
        let current_row = rows[rows.length - 1]
        let last_point_index = current_row[current_row.length - 1]
        // weird but correct
        let last_row_y = top_left_points[last_point_index].y
        let this_y = p.y
        if (this_y === last_row_y) {
          current_row.push(p.i)
        } else {
          rows.push([p.i])
        }
      } else {
        rows.push([p.i])
      }
    }

    let rows2 = []
    for (let i = 0; i < y_sorted_bottom_left.length; i++) {
      let p = y_sorted_bottom_left[i]
      if (rows2.length > 0) {
        let current_row = rows2[rows2.length - 1]
        let last_point_index = current_row[current_row.length - 1]
        // weird but correct
        let last_row_y = bottom_left_points[last_point_index].y
        let this_y = p.y
        if (this_y === last_row_y) {
          current_row.push(p.i)
        } else {
          rows2.push([p.i])
        }
      } else {
        rows2.push([p.i])
      }
    }

    rows = rows.concat(rows2)

    let connections = []
    for (let r = 0; r < rows.length; r++) {
      let dots = rows[r]
      let next_dots = rows[r + 1]
      if (next_dots !== undefined) {
        for (let d = 0; d < dots.length; d++) {
          let dot1 = center_points[dots[d]]
          for (let nd = 0; nd < next_dots.length; nd++) {
            let dot2 = center_points[next_dots[nd]]
            let line = { x1: dot1.x, y1: dot1.y, x2: dot2.x, y2: dot2.y }
            connections.push(line)
          }
        }
      }
    }

    console.log(sized_experiments)

    return (
      <div>
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <style>{`.js-no-flash { display: none; }`}</style>
            <noscript>
              <style>{`.js-no-flash { display: block; }`}</style>
            </noscript>
          </Head>
          <style jsx global>{`
            @import url('https://rsms.me/inter/inter.css');
            :root {
              --background: ${hex};
              --light_background: ${chroma(hex)
                .luminance(0.8)
                .hex()};
              --dark_background: ${chroma(hex)
                .luminance(0.4)
                .hex()};
            }
            ::selection {
              background: var(--background);
            }
            .inter {
              font-family: 'Inter var', serif;
            }
            .js-no-flash {
              display: none;
            }
            * {
              box-sizing: border-box;
            }
            html {
              background: white;
              font-family: 'Inter var', serif;
            }
            body {
              margin: 0;
              color: black;
              font: ${styles.font_size}px ${styles.font};
              line-height: ${styles.line_height};
            }
            a {
              color: inherit;
            }
            a:hover .item_name {
              background: var(--background);
            }
            .color {
              display: none;
            }
            .color2 {
              display: none;
            }
            .hover:hover .color2 {
              display: block;
            }
            .hover_box:hover {
              transition: box-shadow 0.05s linear;
              box-shadow: 0 0 ${grem / 2}px rgba(0, 0, 0, 0.4);
            }
          `}</style>
          <div
            className="js-no-flash"
            style={{
              display: loaded ? 'block' : null,
            }}
          >
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: ww,
                height: grem * 2,
                background: 'var(--background)',
              }}
            />
            <div
              style={{
                ...cover_style,
                background: 'var(--background)',
                background: 'transparent',
                height: '80vh',
              }}
              ref={cover => {
                this.cover = cover
              }}
            >
              <Svggraph
                width={grid_width}
                side_width={side_width}
                packed={packed}
                grem={grem}
                adjusted_height={packed.container.height + target_height * 2}
                connections={connections}
                center_points={center_points}
                experiments={experiments}
                fl={styles.stroke_mult * styles.font_size}
                spacer={spacer}
                ww={ww}
                wh={wh}
                active_node={this.state.active_node}
                set_width={stacked ? ww / 2 : side_width}
                set_height={this.state.cover_height - grem * 2}
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  height: cover_style.height,
                }}
              >
                <div
                  style={{
                    padding: p(grem / 2, grem / 2),
                    position: 'relative',
                  }}
                >
                  Cloudera Fast Forward
                  <FFuture
                    width={cap * 2}
                    height={cap}
                    style={{
                      position: 'absolute',
                      right: grem / 2,
                      top: grem / 2 + (grem - cap) / 2,
                    }}
                    stroke={2}
                  />
                </div>
                <div
                  style={{
                    padding: p(grem / 2, grem / 2, 0, grem / 2),
                    fontSize: styles.font_size * 3,
                    lineHeight: 1,
                  }}
                >
                  <div style={{ padding: p(4, 0) }}>Experiments</div>
                </div>
                <div
                  style={{
                    position: stacked ? 'relative' : 'absolute',
                    bottom: stacked ? 'auto' : 0,
                    width: cover_style.side_width,
                    padding: grem / 2,
                  }}
                >
                  <div style={{ marginBottom: grem / 2 }}>
                    Cloudera Fast Forward is an applied machine learning
                    research group. We help organizations recognize and develop
                    new product and business opportunities through emerging
                    technologies.
                  </div>
                  <div style={{ marginBottom: grem / 2 }}>
                    <a href="#">Learn more about working with us.</a>
                  </div>
                  <div>
                    GEN: {this.state.day}-{this.state.ww}x{this.state.wh}
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  top: 0,
                  left: 0,
                  width: cover_style.width,
                  height: 2 * grem,
                  pointerEvents: 'none',
                }}
              />
              {stacked ? (
                <Hd
                  width={ww}
                  align="b"
                  stroke={1}
                  style={{ zIndex: 9, display: 'none' }}
                />
              ) : (
                <Vd
                  height={wh}
                  align="r"
                  stroke={1}
                  style={{ zIndex: 9, display: 'none' }}
                />
              )}
            </div>
            <div style={{ ...content_style }}>
              <div
                style={{
                  position: 'relative',
                  paddingBottom: grem * 2,
                  paddingTop: grem * 0,
                }}
              >
                <ExpGrid
                  width={grid_width}
                  grem={grem}
                  experiments={experiments}
                  packed={packed}
                  spacer={spacer}
                  target_height={target_height}
                  setActiveNode={this.setActiveNode}
                  stacked={stacked}
                />
              </div>
              <div
                style={{
                  position: 'relative',
                  padding: p(grem / 2, stacked ? grem / 2 : grem),
                  display: 'none',
                }}
              >
                <FFuture
                  width={cap * 2}
                  height={cap}
                  style={{
                    position: 'absolute',
                    left: stacked ? grem / 2 : grem,
                    top: grem / 2 + (grem - cap) / 2,
                  }}
                  stroke={2}
                />
                <div style={{ textAlign: 'right' }}>
                  <a href="#">Main</a> &nbsp;<a href="#">Blog</a>
                </div>

                <Hd
                  width={stacked ? ww : ww - side_width}
                  align="t"
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch(server + '/static/data/experiments.json')
  const data = await res.json()

  return {
    experiments: data,
  }
}

export default Index
