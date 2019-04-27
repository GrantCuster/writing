import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { styles, p, track, sizeMap, small_style } from '../parts/Utils'
import FFuture from '../parts/FFuture'
import { Hd, Vd, Rect, Fdiv } from '../parts/Dividers'
import ExpGrid from '../parts/ExpGrid'
import * as chroma from 'chroma-js'
import { debounce } from 'lodash'
import { pack } from '../parts/Binpack-2d-port'
import Svggraph from '../parts/Svggraph'
import { sortBy } from 'lodash'

const dev = process.env.NODE_ENV !== 'production'
const server = dev
  ? 'http://localhost:3000'
  : 'https://your_deployment.server.com'

function size_to_weight2(size) {
  let weight = Math.pow(2, 6 - Math.log(size) / Math.log(2)) * Math.pow(10, 2)
  if (weight < 100) weight = 100
  return weight
}

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
      hex: chroma
        // .hsl(Math.floor((hour_in_year / (365 * 24)) * 360), 1.0, 0.5)
        .hcl(Math.floor((day_in_year / 365) * 360), 60, 80),
      // .hcl(Math.floor(Math.random() * 360), 60, 80),
      active_node: null,
      day: day_in_year,
    }
    this.setSize = this.setSize.bind(this)
    this.setSize = debounce(this.setSize, 100)
    this.setActiveNode = this.setActiveNode.bind(this)
  }

  setSize() {
    this.setState({ ww: window.innerWidth, wh: window.innerHeight })
  }

  setActiveNode(i) {
    this.setState({ active_node: i })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSize)
    this.setState({
      ww: window.innerWidth,
      wh: window.innerHeight,
      loaded: true,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize)
  }

  render() {
    let { ww, wh, loaded, hex } = this.state
    let { experiments } = this.props
    let { grem } = styles

    let target_size = grem * 4
    let column_num = Math.round(ww / target_size)
    let actual_size = ww / column_num

    let fl = styles.font_size * styles.stroke_mult
    let flc = Math.ceil(fl)

    let cap = grem * (2048 / 2816)

    let dtrack = track(styles.font_size)

    let spacer = 0 + grem

    let side_width = grem * 16 + spacer

    let grid_width = ww - side_width - grem
    let target_width = grem * 10 + spacer
    let target_height = grem * 10
    let avail = grid_width - grem / 4
    let columns = Math.floor(avail / target_width)
    let column_width = Math.floor(avail / columns - spacer)

    let sized_experiments = experiments.map(e => {
      let w = Math.round(column_width)
      let h = Math.round(target_height)
      if (e.featured === true) {
        return {
          width: w * 2 + spacer,
          height: h * 2 + spacer,
        }
      } else {
        return {
          width: w,
          height: h,
        }
      }
    })

    let packed = pack(
      { width: avail, height: Infinity },
      sized_experiments,
      spacer
    )

    // slice off first and last spaces
    let spaces = packed.spaces.slice(1, packed.spaces.length - 1)

    let spaces_set = spaces.map(s => {
      return {
        x: s.x,
        y: s.y,
        width: s.width,
        height:
          s.height === Infinity ? packed.container.height - s.y : s.height,
        spacer: true,
        featured: false,
      }
    })

    // experiments.push(...spaces_set)
    // packed.boxes.push(...spaces_set)

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

    // altered.unshift({ x: grid_width / 2, y: -grem * 2, width: 0, height: 0 })
    // altered.push({
    //   x: grid_width / 2,
    //   y: packed.container.height + grem * 2,
    //   width: 0,
    //   height: 0,
    // })

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
    // connections = []

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
              .luminance(0.7)
              .hex()};
            --lighter_background: ${chroma(hex)
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
            background: var(--lighter_background);
            background: #ddd;
            font-family: 'Inter var', serif;
            background: white;
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
          .color {
            display: none;
          }
          .color2 {
            display: none;
          }
          .hover:hover {
          }
          .hover:hover .color {
            display: block;
            display: none;
          }
          .hover:hover .color2 {
            display: block;
          }

          .item_name {
            background: none;
          }
          .hover:hover .item_name {
            background: linear-gradient(var(--background), var(--background));
            background: none;
          }
        `}</style>
        <div
          className="js-no-flash"
          style={{
            display: loaded ? 'block' : null,
            overflowX: 'hidden',
          }}
        >
          <div
            style={{
              padding: p(grem / 4, grem / 2),
              paddingLeft: cap * 2 + grem / 4 + cap * 0.5,
              paddingLeft: grem / 2,
              position: 'relative',
              background: 'white',
              display: 'none',
            }}
          >
            <FFuture
              width={cap * 2}
              height={cap}
              style={{
                position: 'absolute',
                right: grem / 2,
                top: grem / 4 + (grem - cap) / 2,
              }}
            />
            <span>Cloudera Fast Forward</span>
            <Hd width={ww} align="b" />
          </div>
          <div
            style={{
              position: 'relative',
              position: 'fixed',
              left: 0,
              top: 0,
              height: '100vh',
              width: side_width,
              background: 'white',
              background: 'black',
              background: 'var(--background)',
              background: 'var(--dark_background)',
            }}
          >
            <div
              style={{
                padding: grem / 2,
                background: 'white',
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
              />
              <Hd width={side_width} align="b" />
            </div>
            <div
              style={{
                fontSize: styles.font_size * 3,
                padding: p(4 + grem / 2, grem / 2),
                lineHeight: 1,
              }}
            >
              Experiments
            </div>
            <Svggraph
              width={grid_width}
              side_width={side_width}
              packed={packed}
              grem={grem}
              adjusted_height={
                packed.container.height + (target_height + grem) * 1
              }
              connections={connections}
              center_points={center_points}
              experiments={experiments}
              fl={fl}
              spacer={spacer}
              ww={ww}
              wh={wh}
              active_node={this.state.active_node}
            />
            <div
              style={{
                padding: p(grem, grem / 2),
                position: 'absolute',
                width: side_width,
                bottom: grem * 0.5,
              }}
            >
              <div
                style={
                  {
                    // fontSize: styles.font_size * 1.5,
                    // lineHeight: 1.5,
                  }
                }
              >
                Cloudera Fast Forward is an applied machine learning research
                group. We help organizations recognize and develop new product
                and business opportunities through emerging technologies.{' '}
              </div>
              <div style={{ paddingTop: grem / 2, paddingBottom: grem / 2 }}>
                <a href="http://fastforwardlabs.com">
                  Learn more about working with us.
                </a>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: grem / 2,
                padding: p(0, grem / 2),
                width: side_width,
                color: 'var(--dark_background)',
                color: 'black',
                fontSize: (styles.font_size / 4) * 3,
                lineHeight: 1,
              }}
            >
              GEN: {this.state.day}-{this.state.ww}x{this.state.wh}
            </div>
            <Vd height={wh} top={0} align="right" />
          </div>
          <div>
            <div style={{ paddingLeft: side_width }}>
              <div
                style={{
                  position: 'absolute',
                  left: side_width,
                  top: grem * 2,
                  width: ww - side_width,
                }}
              >
                {spaces_set.map(s => {
                  let width =
                    Math.round(s.width / (column_width + spacer)) *
                      (column_width + spacer) -
                    spacer
                  let height = s.height
                  return (
                    <div
                      style={{
                        position: 'absolute',
                        left: s.x + spacer,
                        top: s.y - spacer,
                        width: width,
                        height: height,
                      }}
                    >
                      <Fdiv width={width} height={height} />
                    </div>
                  )
                })}
              </div>

              <ExpGrid
                width={grid_width}
                grem={grem}
                experiments={experiments}
                packed={packed}
                spacer={spacer}
                target_height={target_height}
                setActiveNode={this.setActiveNode}
              />
            </div>
          </div>
          <div
            style={{
              padding: grem / 2,
              height: grem,
            }}
          />
          <div
            style={{
              padding: p(grem / 4, grem / 2),
              paddingLeft: cap * 2 + grem / 4 + cap * 0.5,
              paddingLeft: grem / 2,
              position: 'relative',
              background: 'white',
              display: 'none',
            }}
          >
            <FFuture
              width={cap * 2}
              height={cap}
              style={{
                position: 'absolute',
                right: grem / 2,
                top: grem / 4 + (grem - cap) / 2,
              }}
            />
            <span>cloudera fast forward</span>
            <Hd width={ww} align="t" />
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
