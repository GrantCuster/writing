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

    let ogrem = font_size * line_height

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

    let stacked = false
    if (columns < divisions) {
      offset = 0
      columns = divisions
      column_width = ww / divisions
      optim_width = column_width * divisions
      optim_left = 0
      grem = grem / 2
      ratio = 1
      stacked = true
    }

    // Adjust grem
    let fs = font_size * ratio
    let grem = fs * line_height

    let center_text = {
      width: optim_width,
      marginLeft: optim_left,
    }

    let spacer = Math.round(grem / 2)
    if (stacked) {
      fs = font_size * 0.875
      grem = fs * line_height
      spacer = Math.round(grem / 2)
    }

    let target_height = grem * 12
    let sized_experiments = experiments.map(e => {
      let w = Math.round(column_width * 2 - spacer)
      let h = target_height
      if (e.featured === true) {
        return {
          width: w * 2 + spacer,
          height: columns === 4 ? h * 1.5 : h * 2 + spacer,
        }
      } else {
        return {
          width: w,
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
      lineHeight: line_height,
    }

    let svg_scale = 19 / cap
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
            rel="icon"
            type="image/x-icon"
            href="static/images/favicon.png"
          />

          <title>Experiments - Cloudera Fast Forward</title>
          <meta
            property="og:title"
            content="Experiments - Cloudera Fast Forward"
          />
          <meta
            property="description"
            content="Machine learning visualizations and code by Cloudera Fast Forward."
          />
          <meta
            property="og:description"
            content="Machine learning visualizations and code by Cloudera Fast Forward."
          />
          <meta
            property="og:image"
            content="https://experiments.fastforwardlabs.com/static/images/experiments-share.png"
          />
          <meta
            property="og:url"
            content="https://experiments.fastforwardlabs.com"
          />
          <meta name="twitter:card" content="summary_large_image" />

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
          .hover_box:hover {
            box-shadow: ${mode === 'dark'
              ? `0 0 ${grem / 2}px rgba(255, 255, 255, 0.8)`
              : `0 0 ${grem / 2}px rgba(0, 0, 0, 0.4)`};
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
                display: 'flex',
                justifyContent: 'space-between',
                ...fs_normal,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: grem,
                }}
              >
                <svg
                  width="1390"
                  height="110"
                  viewBox="0 0 424 27"
                  fill="none"
                  style={{
                    height: cap - grem * (3 / 16),
                    width: (cap - grem * (3 / 16)) * (424 / 27),
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M136.744 0.876293H158.704V6.01421H140.372C139.507 4.06089 138.268 2.34477 136.744 0.876293ZM155.721 15.7703V10.6812H141.667C141.787 11.5532 141.872 12.4392 141.872 13.3635C141.872 14.1902 141.808 14.9855 141.716 15.7703H155.721ZM137.022 25.7392H158.82V20.6013H140.471C139.655 22.5476 138.484 24.2672 137.022 25.7392ZM74.8306 13.3461C74.8306 20.6152 69.2612 26.3077 61.5424 26.3077C53.8235 26.3077 48.2541 20.6152 48.2541 13.3461C48.2576 6.03513 53.8271 0.307739 61.5459 0.307739C69.2612 0.307739 74.8306 6.03513 74.8306 13.3461ZM68.7847 13.3461C68.7847 8.81163 65.7776 5.52239 61.5424 5.52239C57.3071 5.52239 54.3035 8.81163 54.3035 13.3461C54.3035 17.8352 57.3071 21.0931 61.5424 21.0931C65.7812 21.0931 68.7847 17.8352 68.7847 13.3461ZM134.372 13.3077C134.372 20.7443 128.824 25.7392 120.568 25.7392H110.488V0.876293H120.325C128.58 0.876293 134.372 5.8712 134.372 13.3077ZM128.326 13.3077C128.326 8.81861 125.044 5.84678 120.155 5.84678H116.312V20.7722H120.155C125.044 20.7722 128.326 17.7969 128.326 13.3077ZM13.4718 21.0582C9.16941 21.0582 6.04941 17.6992 6.04941 13.3077C6.04941 8.91278 9.16941 5.56425 13.4718 5.56425C15.5435 5.56425 17.2553 6.29325 18.7482 7.69196L22.5035 3.98067C20.2341 1.66459 17.0682 0.307739 13.4082 0.307739C5.83765 0.307739 0 6.01769 0 13.3077C0 20.5978 5.83765 26.3077 13.4082 26.3077C17.2306 26.3077 20.5835 24.78 22.8671 22.2162L19.1294 18.5224C17.6224 20.1722 15.8224 21.0582 13.4718 21.0582ZM34.32 0.876293H28.4929V25.7427H46.1224V20.6815H34.32V0.876293ZM180.858 17.3748L188.036 25.7427H181.249L174.568 17.8876H171.36V25.7392H165.649V0.876293H177.251C180.487 0.876293 182.859 1.65762 184.564 3.0947C186.265 4.53178 187.256 6.74321 187.256 9.37321C187.256 12.6659 185.838 16.0877 180.858 17.3748ZM181.429 9.45343C181.429 8.35469 180.985 7.32572 180.311 6.73972C179.548 6.07699 178.451 5.73167 176.926 5.73167H171.356V13.1996H176.944C178.44 13.1996 179.502 12.8648 180.258 12.2264C180.971 11.6195 181.429 10.5801 181.429 9.45343ZM216 25.7392H210.106L208.066 20.6641H197.354L195.314 25.7392H189.42L200.04 0.872805H205.26L216 25.7392ZM206.209 16.0528L202.708 7.33967L199.207 16.0528H206.209ZM97.3941 14.7797C97.3941 18.7177 95.1035 21.0966 91.8882 21.0966C88.6694 21.0966 86.3788 18.7212 86.3788 14.7797V0.876293H80.5518V14.5565C80.5518 21.7593 85.1294 26.3077 91.8882 26.3077C98.6471 26.3077 103.225 21.7593 103.225 14.5565V0.876293H97.3976V14.7797H97.3941Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M242.571 7.17682H238.64L238.912 5.54787C239.207 3.94253 240.01 3.06904 241.733 3.06904C242.465 3.06904 242.937 3.23429 243.256 3.34053L244.542 0.483964C244.106 0.2951 243.114 0 241.686 0C238.818 0 236.008 1.67617 235.489 5.07571L235.135 7.17682H232.325L231.865 10.0098H234.663L232.101 25.3077H235.642L238.168 10.0098H242.111L242.571 7.17682Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M247.679 25.7091C250.678 25.7091 252.613 24.1864 253.511 22.8289H253.652L253.227 25.3077H256.674L258.669 13.2677C259.542 7.99129 255.588 6.94074 252.708 6.94074C249.426 6.94074 246.145 8.26279 244.445 11.5679L247.609 12.3234C248.364 11.0367 249.981 9.7973 252.342 9.7973C254.608 9.7973 255.505 11.0013 255.175 13.0434V13.126C254.951 14.389 253.605 14.3772 250.312 14.7668C246.806 15.1681 243.147 16.077 242.45 20.1848C241.872 23.7378 244.233 25.7091 247.679 25.7091ZM248.883 22.8761C246.889 22.8761 245.625 21.979 245.909 20.232C246.204 18.3434 248.033 17.6706 250.111 17.3991C251.268 17.2456 254.03 16.9387 254.62 16.4311L254.231 18.7683C253.876 20.9166 251.823 22.8761 248.883 22.8761Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M277.251 11.6033C276.968 8.75855 275.056 6.94074 271.101 6.94074C267.041 6.94074 263.807 9.06546 263.275 12.2407C262.827 14.8494 264.149 16.5728 267.43 17.34L270.358 18.0129C272.069 18.4142 272.719 19.1342 272.53 20.2556C272.305 21.6839 270.558 22.8407 268.209 22.8289C266.144 22.8289 264.963 21.92 264.833 20.1376L261.34 20.657C261.41 23.8558 263.795 25.6737 267.926 25.6737C272.258 25.6737 275.646 23.3837 276.189 20.1376C276.614 17.5289 275.221 15.9354 272.01 15.1681L269.225 14.5071C267.324 14.0349 266.616 13.3739 266.817 12.2053C267.041 10.7652 268.752 9.73828 270.783 9.73828C272.978 9.73828 273.746 10.9305 273.958 12.1699L277.251 11.6033Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M290.681 7.17682H286.951L287.671 2.83296H284.142L283.422 7.17682H280.778L280.317 10.0098H282.961L281.191 20.716C280.636 23.9975 282.855 25.591 285.653 25.5438C286.786 25.532 287.577 25.3195 288.049 25.1661L287.86 22.2505C287.612 22.2977 287.175 22.404 286.609 22.404C285.464 22.404 284.484 22.0262 284.815 19.9841L286.479 10.0098H290.221L290.681 7.17682Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M312.07 7.17682H308.139L308.411 5.54787C308.706 3.94253 309.509 3.06904 311.232 3.06904C311.964 3.06904 312.436 3.23429 312.755 3.34053L314.041 0.483964C313.605 0.2951 312.613 0 311.185 0C308.316 0 305.507 1.67617 304.988 5.07571L304.634 7.17682H301.824L301.364 10.0098H304.161L301.6 25.3077H305.141L307.667 10.0098H311.61L312.07 7.17682Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M319.725 25.6737C324.753 25.6737 328.637 22.0144 329.546 16.4784C330.467 10.7534 327.716 6.94074 322.534 6.94074C317.494 6.94074 313.61 10.6 312.713 16.1714C311.793 21.861 314.543 25.6737 319.725 25.6737ZM319.926 22.7109C316.668 22.7109 315.653 19.8661 316.196 16.4666C316.774 12.9136 318.934 9.89173 322.334 9.89173C325.592 9.89173 326.607 12.7601 326.064 16.1714C325.485 19.7244 323.313 22.7109 319.926 22.7109Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M332.01 25.3077H335.539L337.357 14.2356C337.782 11.863 339.883 10.1514 342.374 10.1514C343.117 10.1514 343.932 10.2813 344.203 10.3639L344.77 6.98796C344.404 6.91713 343.731 6.90533 343.283 6.90533C341.158 6.90533 339.116 8.10933 338.148 10.057H337.959L338.443 7.17682H335.032L332.01 25.3077Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M349.055 25.3077H352.643L358.498 12.2171H358.77L360.28 25.3077H363.881L372.226 7.17682H368.579L362.83 20.4327H362.653L361.331 7.17682H357.684L351.9 20.4917H351.723L350.389 7.17682H346.741L349.055 25.3077Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M377.783 25.7091C380.781 25.7091 382.717 24.1864 383.614 22.8289H383.756L383.331 25.3077H386.777L388.772 13.2677C389.646 7.99129 385.691 6.94074 382.811 6.94074C379.53 6.94074 376.248 8.26279 374.549 11.5679L377.712 12.3234C378.467 11.0367 380.085 9.7973 382.445 9.7973C384.712 9.7973 385.609 11.0013 385.278 13.0434V13.126C385.054 14.389 383.708 14.3772 380.415 14.7668C376.909 15.1681 373.25 16.077 372.554 20.1848C371.975 23.7378 374.336 25.7091 377.783 25.7091ZM378.987 22.8761C376.992 22.8761 375.729 21.979 376.012 20.232C376.307 18.3434 378.137 17.6706 380.214 17.3991C381.371 17.2456 384.133 16.9387 384.724 16.4311L384.334 18.7683C383.98 20.9166 381.926 22.8761 378.987 22.8761Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M391.478 25.3077H395.008L396.826 14.2356C397.251 11.863 399.352 10.1514 401.842 10.1514C402.586 10.1514 403.4 10.2813 403.672 10.3639L404.238 6.98796C403.873 6.91713 403.2 6.90533 402.751 6.90533C400.626 6.90533 398.584 8.10933 397.616 10.057H397.428L397.912 7.17682H394.5L391.478 25.3077Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M410.439 25.6618C413.732 25.6618 415.361 23.6434 416.199 22.4866H416.482L416.01 25.3077H419.457L423.47 1.13318H419.941L418.442 10.116H418.229C417.792 8.99463 416.919 6.94074 413.555 6.94074C409.164 6.94074 405.363 10.3993 404.383 16.2777C403.427 22.1443 406.024 25.6618 410.439 25.6618ZM411.631 22.6518C408.467 22.6518 407.369 19.8779 407.971 16.2423C408.562 12.6421 410.545 9.93895 413.72 9.93895C416.813 9.93895 418.123 12.4532 417.497 16.2423C416.872 20.055 414.664 22.6518 411.631 22.6518Z"
                    fill={logo_stroke}
                  />
                </svg>
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
              }}
            >
              Experiments
            </div>
            <div
              style={{
                ...center_text,
                padding: grem / 2,
                position: 'relative',
                ...fs_normal,
              }}
            >
              Machine learning visualizations and code by{' '}
              <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                Cloudera Fast Forward
              </a>
              .
            </div>

            <div
              style={{
                padding: p(grem / 2, 0),
                paddingLeft: offset + spacer / 2,
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
                fontSize: fs * 2,
                lineHeight: 1.25,
                padding: grem / 2,
                paddingBottom: 0,
                ...center_text,
              }}
            >
              About
            </div>
            <div
              style={{
                padding: grem / 2,
                ...center_text,
                ...fs_normal,
              }}
            >
              Cloudera Fast Forward is an applied machine learning research
              group. We help organizations recognize and develop new product and
              business opportunities through emerging technologies.{' '}
            </div>
            <div
              style={{
                ...center_text,
                padding: grem / 2,
                paddingTop: 0,
                ...fs_normal,
              }}
            >
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
                ...fs_normal,
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
