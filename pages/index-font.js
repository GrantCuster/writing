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
    let height = this.top.clientHeight
    this.setState({ top_height: height })
  }

  setBottomHeight() {
    let height = this.bottom.clientHeight
    this.setState({ bottom_height: height })
  }

  setSize() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = `normal ${font_size}px Inter`
    let width =
      ctx.measureText(
        'Anything from 45 to 75 characters is widely regarded as a satisfactory len'
      ).width + ogrem

    window.ratio = Math.max(window.innerWidth / width, 1)
    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        ratio: Math.max(window.innerWidth / width, 1),
      },
      () => {
        this.setTopHeight()
        this.setBottomHeight()
      }
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
        'Anything from 45 to 75 characters is widely regarded as a satisfactory len'
      ).width + ogrem

    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        loaded: true,
        ratio: Math.max(window.innerWidth / width, 1),
      },
      () => {
        console.log(this.state.ratio)
        this.setTopHeight()
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
    } = this.state

    let fs = font_size * ratio
    let grem = fs * line_height

    let cap = grem * (2048 / 2816)
    let st = styles.stroke_mult * fs

    let spacer = 0 + grem
    let grid_width = ww - grem
    let target_width = grem * 10 + spacer
    let target_height = grem * 12
    let avail = grid_width
    let columns = Math.floor(avail / target_width)
    if (ratio === 1) {
      columns = 1
      spacer = font_size * line_height
    } else if (ratio < 2) {
      columns = 2
      spacer = font_size * line_height
    } else if (ratio < 3) {
      columns = 3
      spacer = font_size * line_height * 1.5
    } else if (ratio < 4) {
      columns = 4
      spacer = font_size * line_height * 2
    }
    let column_width = Math.min(
      Math.floor((avail - spacer * (columns - 1)) / columns),
      grid_width
    )
    target_height = Math.min(column_width, wh / 2 - spacer * 1.5)

    let sized_experiments = experiments.map(e => {
      let w = Math.round(column_width)
      let h = Math.round(target_height)
      if (e.featured === true) {
        return {
          width: Math.min(w * 2 + spacer, grid_width),
          height: columns === 1 ? h * 1.5 : h * 2 + spacer,
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
            font-family: 'Inter var', serif;
            font-size: ${fs}px;
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
            box-shadow: 0 0 ${grem / 4}px rgba(0, 0, 0, 0.4);
          }
        `}</style>
        <div style={{}}>
          <div
            style={{
              padding: p(grem / 4, grem / 2, 0, grem / 2),
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
                top: grem / 4 + (grem - cap) / 2,
              }}
              stroke={st * 1}
            />
            <Hd
              width={ww}
              align="b"
              stroke={ratio * styles.font_size * styles.stroke_mult}
              style={{ display: 'none' }}
            />
          </div>

          <div
            style={{ padding: p(0, 0, grem / 4, 0) }}
            ref={top => {
              this.top = top
            }}
          >
            <div
              style={{
                fontSize: fs * 3,
                lineHeight: 1,
                padding: p(grem / 2, grem / 2, 0, grem / 2),
              }}
            >
              Experiments
            </div>
            <div style={{ padding: p(grem / 2, grem / 2, 0, grem / 2) }}>
              Machine learning visualizations and code
            </div>
          </div>
          <div style={{ position: 'relative', padding: p(grem / 2, grem / 2) }}>
            <ExpGrid
              width={grid_width}
              grem={grem}
              experiments={experiments}
              packed={packed}
              spacer={spacer}
              target_height={target_height}
              setActiveNode={this.setActiveNode}
              ngrem={grem}
              st={st}
              sentence_width={ww / ratio}
            />
            <Hd
              width={ww}
              align="b"
              stroke={ratio * styles.font_size * styles.stroke_mult}
              style={{ display: 'none' }}
            />
          </div>
          <div
            style={{
              padding: p(0, 0, grem / 4, 0),
            }}
            ref={bottom => {
              this.bottom = bottom
            }}
          >
            <div
              style={{
                padding: p(0, grem / 2, grem / 4, grem / 2),
                fontSize: ratio * styles.font_size * 2,
                lineHeight: 1.25,
                paddingTop: grem / 2,
              }}
            >
              About
            </div>
            <div style={{ padding: p(grem / 4, grem / 2) }}>
              Cloudera Fast Forward is an applied machine learning research
              group. We help organizations recognize and develop new product and
              business opportunities through emerging technologies.
            </div>
            <div style={{ padding: p(grem / 4, grem / 2) }}>
              <a href="#">Learn more about working with us.</a>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              position: 'relative',
              paddingBottom: bottom_height + grem,
              paddingTop: top_height + grem / 2,
              display: 'none',
            }}
          />
        </div>
        <div style={{ padding: p(grem / 4, grem / 2), position: 'relative' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: grem / 2 }}>Experiments</div>
            <div style={{ marginRight: grem / 2 }}>
              <a href="#">Main</a>
            </div>
            <div style={{ marginRight: grem / 2 }}>
              <a href="#">Blog</a>
            </div>
          </div>
          <Hd
            width={ww}
            align="t"
            stroke={ratio * styles.font_size * styles.stroke_mult}
            style={{ display: 'none' }}
          />
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
