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
    let columns = Math.floor((ww - ogrem) / target_width)
    let column_width = (ww - ogrem) / columns

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
      column_width = (ww - ogrem) / divisions
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

    let spacer = Math.round(grem)
    if (stacked) {
      fs = font_size * 1
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

    let avail = ww - offset * 2 - ogrem

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
                backgroundPosition: `${offset + ogrem / 2 - 0.5}px -0.5px`,
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
                    d="M240.246 7.54867H236.339V5.94881C236.339 4.37213 237 3.51423 238.723 3.51423C239.455 3.51423 239.974 3.67654 240.305 3.78088L241.131 0.975322C240.635 0.789831 239.608 0.5 238.18 0.5C235.312 0.5 232.798 2.14624 232.798 5.48508V7.54867H230V10.331H232.798V25.3558H236.339V10.331H240.246V7.54867Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M248.423 25.75C251.421 25.75 253.109 24.2545 253.782 22.9213H253.924V25.3558H257.37V13.5308C257.37 8.3486 253.215 7.31681 250.335 7.31681C247.054 7.31681 244.032 8.61524 242.852 11.8613L246.168 12.6033C246.688 11.3396 248.01 10.1224 250.383 10.1224C252.661 10.1224 253.829 11.2933 253.829 13.3105V13.3916C253.829 14.6553 252.507 14.6321 249.249 15.0031C245.814 15.3973 242.297 16.2784 242.297 20.3244C242.297 23.8255 244.976 25.75 248.423 25.75ZM249.19 22.9676C247.195 22.9676 245.755 22.0865 245.755 20.3708C245.755 18.5158 247.432 17.855 249.474 17.5884C250.619 17.4377 253.334 17.1362 253.841 16.6377V18.9332C253.841 21.0432 252.13 22.9676 249.19 22.9676Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M275.658 11.8961C274.926 9.12535 272.719 7.31681 268.8 7.31681C264.704 7.31681 261.8 9.43836 261.8 12.5917C261.8 15.119 263.358 16.8 266.758 17.542L269.827 18.2028C271.574 18.5854 272.388 19.3505 272.388 20.4635C272.388 21.8431 270.889 22.9213 268.575 22.9213C266.462 22.9213 265.105 22.0286 264.68 20.278L261.269 20.7881C261.859 23.9415 264.527 25.7152 268.599 25.7152C272.978 25.7152 276.012 23.4314 276.012 20.2084C276.012 17.6927 274.383 16.1392 271.054 15.3857L268.174 14.7365C266.179 14.2727 265.317 13.6119 265.329 12.4062C265.317 11.0382 266.828 10.0644 268.835 10.0644C271.031 10.0644 272.046 11.2585 272.459 12.4526L275.658 11.8961Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M288.356 7.54867H284.638V3.28237H281.108V7.54867H278.452V10.331H281.108V20.8461C281.096 24.0806 283.611 25.6457 286.396 25.5877C287.518 25.5761 288.273 25.3674 288.686 25.2167L288.049 22.3532C287.813 22.3996 287.376 22.5039 286.81 22.5039C285.665 22.5039 284.638 22.1329 284.638 20.1273V10.331H288.356V7.54867Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M309.745 7.54867H305.838V5.94881C305.838 4.37213 306.499 3.51423 308.222 3.51423C308.954 3.51423 309.473 3.67654 309.804 3.78088L310.63 0.975322C310.134 0.789831 309.107 0.5 307.679 0.5C304.811 0.5 302.296 2.14624 302.296 5.48508V7.54867H299.499V10.331H302.296V25.3558H305.838V10.331H309.745V7.54867Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M320.315 25.7152C325.426 25.7152 328.767 22.0402 328.767 16.5334C328.767 10.9919 325.426 7.31681 320.315 7.31681C315.204 7.31681 311.864 10.9919 311.864 16.5334C311.864 22.0402 315.204 25.7152 320.315 25.7152ZM320.327 22.8053C316.986 22.8053 315.428 19.9418 315.428 16.5218C315.428 13.1134 316.986 10.2151 320.327 10.2151C323.644 10.2151 325.202 13.1134 325.202 16.5218C325.202 19.9418 323.644 22.8053 320.327 22.8053Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M332.706 25.3558H336.236V14.4814C336.236 12.1512 338.065 10.4702 340.568 10.4702C341.3 10.4702 342.126 10.5977 342.409 10.6788V7.36318C342.055 7.31681 341.359 7.28203 340.91 7.28203C338.785 7.28203 336.968 8.46453 336.307 10.3774H336.118V7.54867H332.706V25.3558Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M349.686 25.3558H353.275L356.958 12.499H357.229L360.912 25.3558H364.512L369.836 7.54867H366.188L362.659 20.5678H362.482L358.941 7.54867H355.293L351.729 20.6258H351.551L347.998 7.54867H344.351L349.686 25.3558Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M378.462 25.75C381.46 25.75 383.148 24.2545 383.821 22.9213H383.962V25.3558H387.409V13.5308C387.409 8.3486 383.254 7.31681 380.374 7.31681C377.092 7.31681 374.071 8.61524 372.89 11.8613L376.207 12.6033C376.726 11.3396 378.048 10.1224 380.421 10.1224C382.699 10.1224 383.868 11.2933 383.868 13.3105V13.3916C383.868 14.6553 382.546 14.6321 379.288 15.0031C375.853 15.3973 372.335 16.2784 372.335 20.3244C372.335 23.8255 375.015 25.75 378.462 25.75ZM379.229 22.9676C377.234 22.9676 375.794 22.0865 375.794 20.3708C375.794 18.5158 377.47 17.855 379.512 17.5884C380.657 17.4377 383.372 17.1362 383.88 16.6377V18.9332C383.88 21.0432 382.168 22.9676 379.229 22.9676Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M392.11 25.3558H395.639V14.4814C395.639 12.1512 397.469 10.4702 399.971 10.4702C400.703 10.4702 401.53 10.5977 401.813 10.6788V7.36318C401.459 7.31681 400.762 7.28203 400.314 7.28203C398.189 7.28203 396.371 8.46453 395.71 10.3774H395.521V7.54867H392.11V25.3558Z"
                    fill={logo_stroke}
                  />
                  <path
                    d="M411.005 25.7036C414.31 25.7036 415.609 23.7212 416.246 22.5851H416.541V25.3558H419.988V1.61295H416.459V10.4354H416.246C415.609 9.33402 414.405 7.31681 411.029 7.31681C406.649 7.31681 403.427 10.7136 403.427 16.487C403.427 22.2489 406.602 25.7036 411.005 25.7036ZM411.784 22.7474C408.633 22.7474 406.992 20.023 406.992 16.4523C406.992 12.9163 408.597 10.2615 411.784 10.2615C414.865 10.2615 416.518 12.7308 416.518 16.4523C416.518 20.1969 414.83 22.7474 411.784 22.7474Z"
                    fill={logo_stroke}
                  />{' '}
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

            <div style={{ paddingLeft: ogrem / 2, paddingRight: ogrem / 2 }}>
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
                  paddingTop: grem / 2,
                  paddingBottom: grem / 2,
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
                group. We help organizations recognize and develop new product
                and business opportunities through emerging technologies.{' '}
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
              <div style={{ marginRight: grem * (1 / 2) }}>↳ </div>
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
