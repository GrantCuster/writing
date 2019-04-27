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

let font_size = 16
let line_height = 1.5
let ogrem = font_size * line_height

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
      optimal: null,
      ratio: 1,
      top_height: null,
      bottom_height: null,
    }
    this.setTopHeight = this.setTopHeight.bind(this)
    this.setBottomHeight = this.setBottomHeight.bind(this)
    this.setSize = this.setSize.bind(this)
    this.setSize = debounce(this.setSize, 100)
    this.setActiveNode = this.setActiveNode.bind(this)
  }

  setTopHeight() {
    // let height = this.top.clientHeight
    // this.setState({ top_height: height })
  }

  setBottomHeight() {
    // let height = this.bottom.clientHeight
    // this.setState({ bottom_height: height })
  }

  setSize() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = `normal ${font_size}px Inter`
    let width =
      ctx.measureText(
        'Anything from 45 to 75 characters is widely regarded as a satisfa'
      ).width + ogrem

    window.ratio = Math.max(window.innerWidth / width, 1)
    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        ratio: Math.max(window.innerWidth / width, 1),
        optimal: width + styles.font_size * styles.line_height * 2,
      },
      () => {}
    )
  }

  setActiveNode(i) {
    this.setState({ active_node: i })
  }

  getBaseRatio() {}

  componentDidMount() {
    window.addEventListener('resize', this.setSize)

    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = `normal ${font_size}px Inter`
    let width =
      ctx.measureText(
        'Anything from 45 to 75 characters is widely regarded as a satisfa'
      ).width + ogrem

    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        loaded: true,
        ratio: Math.max(window.innerWidth / width, 1),
        optimal: width + styles.font_size * styles.line_height * 2,
      },
      () => {
        console.log(this.state.ratio)
        this.setBottomHeight()
      }
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize)
  }

  render() {
    let { experiments } = this.props
    let {
      ww,
      wh,
      hex,
      loaded,
      cover_height,
      ratio,
      top_height,
      bottom_height,
      optimal,
    } = this.state

    let targ = optimal / 2
    let optimal_columns = Math.floor(ww / targ)
    let splits = optimal_columns
    let split_width = Math.round(ww / splits)
    let center_two_span = Math.floor(splits / 2) - 1

    let grem = ogrem
    let cap = grem * (2048 / 2816)
    let st = styles.font_size * styles.stroke_mult

    let spacer = 0 + grem

    let grid_width = ww
    let target_width = grem * 10 + spacer
    let target_height = grem * 12
    let avail = grid_width
    let columns = Math.floor(avail / target_width)
    let column_width = Math.floor(avail / columns - spacer)
    columns = splits
    column_width = split_width - spacer
    console.log(columns)

    if (columns === Infinity) columns = 0

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

    console.log(columns)

    return (
      <div>
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
          * {
            box-sizing: border-box;
          }
          html {
            font-family: 'Inter var', 'Inter', serif;
            font-size: ${styles.font_Size}px;
            line-height: ${line_height};
          }
          body {
            margin: 0;
          }
          a {
            color: inherit;
            text-decoration: underline;
          }
          .hover_box:hover {
            transition: box-shadow 0.05s linear;
            box-shadow: 0 0 ${grem / 2}px rgba(0, 0, 0, 0.4);
          }
        `}</style>
        <div
          style={{
            position: 'fixed',
            right: 0,
            top: 0,
            background: 'white',
            padding: grem / 2,
            zIndex: 99,
            display: 'none',
          }}
        >
          <div>{Math.round(optimal / 2)}</div>
          <div>{split_width}</div>
          <div>{Math.round(optimal / 2) - split_width}</div>
          <div>{Math.round((ww / (optimal / 2)) * 100) / 100}</div>
          <div>{Math.round(optimal)}</div>
          <div>{column_width * 2}</div>
          <div>{Math.round(optimal) - column_width * 2}</div>
          <div>
            {Math.round(
              ((Math.round(optimal) - column_width * 2) / Math.round(optimal)) *
                100
            )}
            %
          </div>
        </div>

        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: ww,
            height: wh,
            display: 'none',
          }}
        >
          {[...Array(columns)].map((n, i) => (
            <div
              style={{
                position: 'absolute',
                left: i * (column_width + grem),
                top: 0,
                width: column_width + grem,
                height: wh,
                outline: 'solid 1px blue',
              }}
            />
          ))}
        </div>
        <div
          style={{
            padding: grem / 2,
            paddingBottom: grem / 2,
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
            stroke={st * 2}
          />
          <div style={{ position: 'relative', paddingTop: grem / 2 }}>
            <Hd width={ww - grem} align="b" stroke={1} />
          </div>
        </div>
        <div
          style={{
            padding: grem / 2,
            fontSize: styles.font_size * 3,
            lineHeight: 1,
            marginLeft: center_two_span * split_width,
            width: split_width * 2,
          }}
        >
          Experiments
        </div>
        <div
          style={{
            padding: p(0, grem / 2),
            marginLeft: center_two_span * split_width,
            width: split_width * 2,
            paddingBottom: grem / 2,
          }}
        >
          Machine learning visualizations and code
        </div>
        <div
          style={{
            position: 'relative',
            padding: grem / 2,
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
          />
        </div>
        <div
          style={{
            marginLeft: center_two_span * split_width,
            width: split_width * 2,
          }}
        >
          <div
            style={{
              fontSize: styles.font_size * 2,
              lineHeight: 1,
              padding: p(grem / 4, grem / 2),
              paddingTop: grem / 2,
            }}
          >
            About
          </div>

          <div
            style={{
              padding: p(grem / 4, grem / 2),
            }}
          >
            Cloudera Fast Forward is an applied machine learning research group.
            We help organizations recognize and develop new product and business
            opportunities through emerging technologies.
          </div>
          <div style={{ padding: p(grem / 4, grem / 2) }}>
            <a href="#">Learn more about working with us.</a>
          </div>
        </div>
        <div
          style={{
            padding: p(grem / 2, grem / 2),
            position: 'relative',
            paddingTop: (grem * 3) / 4,
          }}
        >
          <div style={{ position: 'relative', paddingBottom: grem / 2 }}>
            <Hd width={ww - grem} align="t" />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: grem / 2 }}>Experiments</div>
            <div style={{ marginRight: grem / 2 }}>
              <a href="#">Main</a>
            </div>
            <div style={{ marginRight: grem / 2 }}>
              <a href="#">Blog</a>
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
