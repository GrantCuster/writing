import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { Hd, Vd, Rect, Fdiv } from '../parts/Dividers'
import { styles, p } from '../parts/Utils'
import { pack } from '../parts/Binpack-2d-port'
import FFuture from '../parts/FFuture'
import ExpGrid from '../parts/ExpGrid'
import { debounce } from 'lodash'
import * as chroma from 'chroma-js'
import { experiments } from '../data/experiments.json'

let font_size = 16
let line_height = 1.5

class Index extends React.Component {
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
      ww: 0,
      optimal: null,
      hex: chroma.hcl(Math.floor((day_in_year / 365) * 360), 60, 80),
    }
    this.setSize = this.setSize.bind(this)
    this.setSize = debounce(this.setSize, 100)
  }

  setSize() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = `normal ${font_size}px Interi`
    let width = ctx.measureText(
      'thousand writers. With over a million people from various fields working'
    ).width
    window.ratio = Math.max(window.innerWidth / width, 1)

    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        optimal: width + font_size * line_height,
      },
      () => {}
    )
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSize)
    this.setSize()
    let me = this
    document.fonts.ready.then(function() {
      me.setSize()
    })
  }

  render() {
    console.log(experiments)

    let { ww, wh, optimal, hex } = this.state

    let grem = font_size * line_height

    let divisions = 4

    let target_width = optimal / divisions
    let columns = Math.floor(ww / target_width)
    let og_columns = Math.floor(ww / target_width)
    let column_width = ww / columns

    let offset = 0
    let even = columns % 2 === 0
    if (!even) {
      columns = columns - 1
      offset = column_width / 2
    }

    let optim_width = column_width * divisions
    let optim_left = (columns / 2 - divisions / 2) * column_width + offset

    let ratio = column_width / target_width

    if (columns < divisions) {
      offset = 0
      columns = 2
      column_width = ww / 2
      optim_width = column_width * 2
      optim_left = 0
      ratio = 1
    }

    let fs = font_size * ratio

    let center_text = {
      width: optim_width,
      marginLeft: optim_left,
    }

    let target_height = grem * 12
    let spacer = grem

    let sized_experiments = experiments.map(e => {
      let w = Math.round(column_width * 2 - spacer)
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

    let avail = ww - offset * 2

    let packed = pack(
      { width: avail, height: Infinity },
      sized_experiments,
      spacer
    )

    let cap = grem * (2048 / 2816)

    let fs_normal = {
      fontSize: fs,
    }

    let svg_scale = 35 / (cap + grem / 8)

    let rounded_wh = Math.floor(wh / grem) * grem

    return (
      <div>
        <Head>
          <link
            rel="preload"
            href="static/fonts/Inter-Regular.woff2?v=3.5"
            as="font"
            type="font/woff2"
            crossOrigin="*"
          />
        </Head>
        <style jsx global>{`
          :root {
            --background: ${hex};
          }
          @font-face {
            font-family: 'Interi';
            font-style: normal;
            font-weight: 400;
            src: url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'),
              url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');
          }
          @font-face {
            font-family: 'Interi';
            font-style: italic;
            font-weight: 400;
            src: url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'),
              url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');
          }
          * {
            box-sizing: border-box;
          }
          html {
            font-family: 'Interi', serif;
            font-size: ${font_size}px;
            line-height: ${line_height};
            text-rendering: optimizelegibility;
            font-feature-settings: 'kern';
            font-kerning: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          body {
            margin: 0;
            overflow-x: hidden;
          }
          a {
            color: inherit;
            text-decoration: underline;
          }
          .hover_box:hover {
            transition: box-shadow 0.05s linear;
            box-shadow: 0 0 ${grem / 2}px rgba(0, 0, 0, 0.4);
          }
          .hover_box:hover .hover_name {
          }
        `}</style>
        {optimal !== null ? (
          <div>
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: ww,
                height: '100vh',
                zIndex: -1,
                display: 'none',
              }}
            >
              {[...Array(columns)].map((n, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: i * column_width + offset,
                    top: 0,
                    width: column_width,
                    height: '100vh',
                    outline: 'solid 1px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </div>

            <div
              style={{ position: 'fixed', left: 0, bottom: 0, display: 'none' }}
            >
              <div>og_columns: {og_columns}</div>
              <div>{even ? 'even' : 'odd'}</div>
              <div>font size: {fs}</div>
            </div>
            <div
              style={{
                padding: grem / 2,
                display: 'flex',
                justifyContent: 'space-between',
                ...fs_normal,
              }}
            >
              <div>
                <div style={{ paddingLeft: grem * 1.25 }}>
                  Cloudera Fast Forward
                </div>
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={cap + grem / 8}
                  height={cap + grem / 8}
                  style={{
                    position: 'absolute',
                    left: grem / 2,
                    top: grem / 2 + (grem - cap) / 2 - grem / 16,
                  }}
                >
                  <path
                    d="M18 18L1 1V35L18 18Z"
                    stroke="black"
                    strokeWidth={fs * styles.stroke_mult * svg_scale}
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M35 18L18 1V35L35 18Z"
                    stroke="black"
                    strokeWidth={fs * styles.stroke_mult * svg_scale}
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M1 1H35V18H1V1Z"
                    strokeWidth={fs * styles.stroke_mult * svg_scale}
                    stroke="black"
                  />
                  <path
                    d="M1 18H35V35H1V18Z"
                    strokeWidth={fs * styles.stroke_mult * svg_scale}
                    stroke="black"
                  />
                </svg>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: grem / 2 }}>
                  <a href="#">Main</a>
                </div>
                <div style={{}}>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: 0,
                paddingBottom: grem / 2,
                position: 'relative',
              }}
            >
              <div style={{ position: 'relative' }}>
                <Hd width={ww} align="b" stroke={fs * styles.stroke_mult} />
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                left: 0,
                top: grem * 2,
                height: grem * 4,
              }}
            >
              {false
                ? experiments.map((e, i) => {
                    let b = packed.boxes[i]
                    let new_width = grem * 6
                    let new_height = grem * 8
                    return (
                      <div
                        style={{
                          position: 'absolute',
                          left: Math.round((b.x / ww) * new_width),
                          top: Math.round(
                            (b.y / packed.container.height) * new_height
                          ),
                          width: Math.round((b.width / ww) * new_width),
                          height: Math.round(
                            (b.height / packed.container.height) * new_height
                          ),
                          backgroundImage: `url(${e.image_url})`,
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                          float: 'left',
                        }}
                      />
                    )
                  })
                : null}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: grem * 4,
                  filter: 'grayscale(100%)',
                  width: ww,
                }}
              />
            </div>
            <div
              style={{
                ...center_text,
                paddingLeft: grem / 2,
                paddingRight: grem / 2,
                fontSize: fs * 3,
                lineHeight: 1,
                paddingTop: grem / 2,
                marginTop: grem / 2,
                position: 'relative',
                background: 'white',
              }}
            >
              Experiments
            </div>
            <div
              style={{
                ...center_text,
                padding: grem / 2,
                background: 'white',
                position: 'relative',
                ...fs_normal,
              }}
            >
              Machine learning visualizations and code
            </div>

            <div
              style={{
                padding: grem / 2,
                paddingLeft: grem / 2 + offset,
              }}
            >
              <ExpGrid
                width={ww}
                grem={grem}
                experiments={experiments}
                packed={packed}
                spacer={spacer}
                target_height={target_height}
                fs={fs}
              />
            </div>

            <div
              style={{
                ...center_text,
                fontSize: fs * 2,
                lineHeight: 1.25,
                padding: grem / 2,
                paddingBottom: 0,
              }}
            >
              About
            </div>

            <div
              style={{
                ...center_text,
                padding: grem / 2,
                ...fs_normal,
              }}
            >
              Cloudera Fast Forward is an applied machine learning research
              group. We help organizations recognize and develop new product and
              business opportunities through emerging technologies.{' '}
            </div>
            <div style={{ ...center_text, padding: grem / 2, paddingTop: 0 }}>
              <a href="#">Learn more about working with us.</a>
            </div>
            <div
              style={{
                position: 'relative',
                paddingTop: grem,
              }}
            >
              <Hd width={ww} align="b" stroke={fs * styles.stroke_mult} />
            </div>
            <div
              style={{
                paddingTop: grem / 2,
              }}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Index
