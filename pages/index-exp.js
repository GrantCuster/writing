import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { Hd, Vd, Rect } from '../parts/Dividers'
import { styles, p } from '../parts/Utils'
import { pack } from '../parts/Binpack-2d-port'
import ExpGrid from '../parts/ExpGrid'
import { debounce } from 'lodash'
import { experiments } from '../data/experiments.json'

let font_size = 16
let line_height = 1.5

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ww: 0,
      optimal: null,
      grid_canvas: null,
      mode: 'light',
      grid: 'hide',
    }
    this.setSize = this.setSize.bind(this)
    this.setSize = debounce(this.setSize, 100)
  }

  setSize() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    ctx.font = `normal ${font_size}px Inter`
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

    let mode_value = localStorage.getItem('mode') || 'light'
    let grid_value = localStorage.getItem('grid') || 'hide'

    let canvas = document.createElement('canvas')
    this.setState({ grid_canvas: canvas, mode: mode_value, grid: grid_value })
  }

  render() {
    let { ww, wh, optimal, mode, grid, grid_canvas } = this.state

    let divisions = 4

    let target_width = optimal / divisions
    let columns = Math.floor(ww / target_width)
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

    // Adjust grem
    let fs = font_size * ratio
    let grem = fs * line_height

    let center_text = {
      width: optim_width,
      marginLeft: optim_left,
    }

    let spacer = Math.round(grem)

    let target_height = grem * 12
    let sized_experiments = experiments.map(e => {
      let w = Math.round(column_width * 2 - spacer)
      let h = target_height
      if (e.featured === true) {
        return {
          width: Math.min(w * 2 + spacer, ww - spacer),
          height: columns === 2 ? h * 1.5 : h * 2 + spacer,
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

    let svg_scale = 38 / cap
    let ff_stroke = fs * styles.stroke_mult * svg_scale

    let stroke_color = mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#000'
    let logo_stroke = mode === 'dark' ? 'rgba(255,255,255,1)' : '#000'

    // Background grid
    let render_canvas = null
    let c_width = column_width
    let c_height = grem
    if (grid_canvas !== null) {
      render_canvas = grid_canvas
      render_canvas.width = c_width + 0.5
      render_canvas.height = c_height + 0.5
      let ctx = render_canvas.getContext('2d')
      ctx.fillStyle = mode === 'dark' ? '#333' : '#ddd'
      ctx.fillRect(0, 0, 1, c_height)
      let bd = 2
      for (let i = 0; i < bd; i++) {
        ctx.fillRect(0, (i * grem) / bd, c_width, 1)
      }
    }

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
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            src: url('static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'),
              url('static/fonts/Inter-Regular.woff?v=3.5') format('woff');
          }
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 400;
            src: url('static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'),
              url('static/fonts/Inter-Italic.woff?v=3.5') format('woff');
          }
          * {
            box-sizing: border-box;
          }
          html {
            font-family: 'Inter', serif;
            font-size: ${font_size}px;
            line-height: ${font_size * line_height}px;
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
          }
          button {
            background: none;
            border: none;
            padding: 0;
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            text-decoration: underline;
            cursor: pointer;
            color: inherit;
          }
        `}</style>
        <style jsx global>{`
          html {
            background: ${mode === 'dark' ? '#111' : '#fff'};
            color: ${mode === 'dark' ? '#fff' : '#000'};
          }
        `}</style>
        <style jsx global>{`
          .hover_box-dep:hover {
            box-shadow: ${mode === 'dark'
              ? `0 0 ${grem / 2}px rgba(255, 255, 255, 0.8)`
              : `0 0 ${grem / 2}px rgba(0, 0, 0, 0.4)`};
          }
          .box-holder {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transition: all 0.1s linear;
          }
          .box-holder:hover {
            left: -${grem / 2}px;
            top: -${grem / 2}px;
            width: calc(100% + ${grem / 1}px);
            height: calc(100% + ${grem / 1}px);
          }
          .hover_box:hover .hover_name {
            text-decoration: underline;
          }
        `}</style>

        {optimal !== null ? (
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: grid === 'show' ? 'block' : 'none',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${render_canvas.toDataURL()})`,
                backgroundPosition: `${offset - 0.5}px -0.5px`,
                backgroundSize: `${c_width}px ${c_height}px`,
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                padding: grem / 2,
                paddingLeft: grem / 2 + cap,
                display: 'flex',
                justifyContent: 'space-between',
                ...fs_normal,
              }}
            >
              <div>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    left: grem / 2,
                    top: (grem * 2 - cap - grem / 16) / 2,
                    width: cap + grem / 16,
                    height: cap + grem / 16,
                  }}
                >
                  <path
                    d="M19 19L2 2V36L19 19Z"
                    stroke={logo_stroke}
                    strokeWidth={ff_stroke}
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M36 19L19 2V36L36 19Z"
                    stroke={logo_stroke}
                    strokeWidth={ff_stroke}
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M2 2H36V19H2V2Z"
                    stroke={logo_stroke}
                    strokeWidth={ff_stroke}
                  />
                  <path
                    d="M2 19H36V36H2V19Z"
                    strokeWidth={ff_stroke}
                    stroke={logo_stroke}
                  />
                </svg>
                <div
                  style={{
                    position: 'relative',
                    padding: p(0, grem * (3 / 8)),
                  }}
                >
                  Cloudera Fast Forward
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: grem / 2 }}>
                  <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                    Main
                  </a>
                </div>
                <div style={{}}>
                  <a href="https://blog.fastforwardlabs.com/">Blog</a>
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
                <Hd
                  width={ww}
                  align="b"
                  color={stroke_color}
                  stroke={fs * styles.stroke_mult}
                />
              </div>
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
                marginBottom: grem / 2,
              }}
            >
              Blog
            </div>

            <div
              style={{
                position: 'relative',
              }}
            >
              <div
                style={{
                  ...center_text,
                  padding: grem / 2,
                  position: 'relative',
                  ...fs_normal,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: target_height * 2 + grem,
                    width: column_width * 2 - grem / 2 + 1,
                  }}
                >
                  <Rect
                    width="100%"
                    height="100%"
                    stroke={fs * styles.stroke_mult}
                  />
                  <div style={{ position: 'relative', padding: grem / 2 }}>
                    <div
                      style={{
                        position: 'relative',
                        fontSize: fs * (3 / 4),
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        paddingBottom: grem / 4,
                        paddingTop: grem,
                      }}
                    >
                      Report
                    </div>
                    <div
                      style={{
                        fontSize: fs * 2,
                        lineHeight: 1.25,
                        position: 'relative',
                      }}
                    >
                      Learning with Limited Labeled Data
                    </div>
                    <Hd
                      width="100%"
                      height="100%"
                      align="b"
                      stroke={fs * styles.stroke_mult}
                    />
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: grem * 9.5,
                      left: 0,
                      top: grem * 7.675,
                      backgroundImage: `url(https://clients.fastforwardlabs.com/static/images/ffreports/ff10-01.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center right',
                      zIndex: -1,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      fontSize: fs * 0.875,
                      lineHeight: 1.5,

                      padding: grem / 2,
                      bottom: 0,
                      left: 0,
                      width: '100%',
                    }}
                  >
                    Being able to learn with limited labeled data relaxes the
                    stringent labeled data requirement for supervised machine
                    learning. This report focuses on active learning, a
                    technique that relies on collaboration between machines and
                    humans to label smartly.
                    <Hd
                      width="100%"
                      height="100%"
                      align="t"
                      stroke={fs * styles.stroke_mult}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: grem / 2,
                  position: 'absolute',
                  top: 0,
                  left:
                    Math.floor(columns / 2) * column_width + offset - grem / 2,
                  ...fs_normal,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: target_height * 2 + grem,
                    width: column_width * 2 - grem / 2,
                  }}
                >
                  <Rect
                    width="100%"
                    height="100%"
                    stroke={fs * styles.stroke_mult}
                  />
                  <div
                    style={{
                      background: '#e56593',
                      position: 'absolute',
                      right: 0,
                      fontSize: fs * (3 / 4),
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      padding: p(grem / 4, grem / 2),
                      width: '200%',
                      paddingTop: grem * (3 / 8),
                    }}
                  >
                    FF10
                    <Rect
                      width="100%"
                      height="100%"
                      stroke={fs * styles.stroke_mult}
                    />
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      padding: grem / 2,

                      height: grem * 7.675,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        fontSize: fs * (3 / 4),
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        paddingBottom: grem / 4,
                        paddingTop: grem,
                      }}
                    >
                      Prototype
                    </div>
                    <div
                      style={{
                        fontSize: fs * 2,
                        lineHeight: 1.25,
                        position: 'relative',
                      }}
                    >
                      Active Learner
                    </div>
                    <Hd
                      width="100%"
                      height="100%"
                      align="b"
                      stroke={fs * styles.stroke_mult}
                    />
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: grem * 17.25,
                      left: 0,
                      top: grem * 4.25,
                      backgroundImage: `url(/static/images/uploads/active-learner-short.gif)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      zIndex: -1,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      fontSize: fs * 0.875,
                      lineHeight: 1.5,
                      padding: grem / 2,
                      bottom: 0,
                      left: 0,
                      width: '100%',
                    }}
                  >
                    An interactive visualization of active learning data
                    labeling strategies for supervised machine learning.{' '}
                    <Hd
                      width="100%"
                      height="100%"
                      align="t"
                      stroke={fs * styles.stroke_mult}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                ...center_text,
                padding: grem / 2,
                position: 'relative',
                ...fs_normal,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  padding: grem / 2,
                  height: target_height / 2 - grem / 2,
                }}
              >
                <Rect
                  width="100%"
                  height="100%"
                  stroke={fs * styles.stroke_mult}
                />
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: column_width,
                    height: '100%',
                    backgroundImage: `url(${experiments[0].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                />

                <div
                  style={{
                    paddingRight: column_width,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      fontSize: fs * (3 / 4),
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      paddingBottom: grem / 4,
                    }}
                  >
                    Post
                  </div>

                  <div style={{ fontSize: fs * 1.5, lineHeight: 1.25 }}>
                    An Invitation to Active Learning
                  </div>
                  <div
                    style={{
                      fontSize: fs * 0.875,
                      lineHeight: 1.5,
                      paddingTop: grem / 4,
                      height: grem * 2,
                      overflow: 'hidden',
                    }}
                  >
                    Many interesting learning problems exist in places where
                    labeled data is limited. As such, much thought has been
                    spent on how best to learn from limited labeled data. One
                    obvious answer is simply to collect more data. That is
                    valid, but for some applications, data is difficult or
                    expensive to collect. If we will collect more data, we ought
                    at least be smart about the data we collect. This motivates
                    active learning, which provides strategies for learning in
                    this scenario.
                  </div>
                  <div
                    style={{
                      fontSize: fs * 0.875,
                      lineHeight: 1.5,
                    }}
                  >
                    <a href="#">...read more</a>
                  </div>
                </div>
              </div>
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
                font_kick={this.state.font_kick}
                columns={columns}
                stroke_color={stroke_color}
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
              <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                Learn more about working with us.
              </a>
            </div>
            <div
              style={{
                position: 'relative',
                paddingTop: grem,
              }}
            >
              <Hd
                width={ww}
                color={stroke_color}
                align="b"
                stroke={fs * styles.stroke_mult}
              />
            </div>
            <div
              style={{
                padding: grem / 2,
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ marginRight: grem / 4, display: 'flex' }}>
                <div style={{ marginRight: grem / 4 }}>Screen:</div>
                <div style={{ marginRight: grem / 4 }}>
                  {ww}w{wh}h
                </div>
              </div>

              <div style={{ marginRight: grem / 4, display: 'flex' }}>
                <div style={{ marginRight: grem / 4 }}>Mode:</div>
                <div style={{ marginRight: grem / 4 }}>
                  {mode === 'light' ? (
                    'Light'
                  ) : (
                    <button
                      onClick={() => {
                        window.localStorage.setItem('mode', 'light')
                        this.setState({ mode: 'light' })
                      }}
                    >
                      Light
                    </button>
                  )}
                </div>
                <div style={{ marginRight: grem / 4 }}>
                  {mode === 'dark' ? (
                    'Dark'
                  ) : (
                    <button
                      onClick={() => {
                        window.localStorage.setItem('mode', 'dark')
                        this.setState({ mode: 'dark' })
                      }}
                    >
                      Dark
                    </button>
                  )}
                </div>
              </div>
              <div style={{ marginRight: grem / 4, display: 'flex' }}>
                <div style={{ marginRight: grem / 4 }}>Grid:</div>
                <div style={{ marginRight: grem / 4 }}>
                  {grid === 'show' ? (
                    'Show'
                  ) : (
                    <button
                      onClick={() => {
                        window.localStorage.setItem('grid', 'show')
                        this.setState({ grid: 'show' })
                      }}
                    >
                      Show
                    </button>
                  )}
                </div>
                <div style={{ marginRight: grem / 4 }}>
                  {grid === 'hide' ? (
                    'Hide'
                  ) : (
                    <button
                      onClick={() => {
                        window.localStorage.setItem('grid', 'hide')
                        this.setState({ grid: 'hide' })
                      }}
                    >
                      Hide
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Index