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

    console.log(spacer)

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
                    fill="black"
                  />
                  <path
                    d="M240.06 7.54867H236.153V5.94881C236.153 4.37213 236.814 3.51423 238.538 3.51423C239.269 3.51423 239.789 3.67654 240.119 3.78088L240.946 0.975322C240.45 0.789831 239.423 0.5 237.995 0.5C235.126 0.5 232.612 2.14624 232.612 5.48508V7.54867H229.814V10.331H232.612V25.3558H236.153V10.331H240.06V7.54867Z"
                    fill="black"
                  />
                  <path
                    d="M248.238 25.75C251.236 25.75 252.924 24.2545 253.597 22.9213H253.738V25.3558H257.185V13.5308C257.185 8.3486 253.03 7.31681 250.15 7.31681C246.868 7.31681 243.846 8.61524 242.666 11.8613L245.983 12.6033C246.502 11.3396 247.824 10.1224 250.197 10.1224C252.475 10.1224 253.644 11.2933 253.644 13.3105V13.3916C253.644 14.6553 252.322 14.6321 249.064 15.0031C245.629 15.3973 242.111 16.2784 242.111 20.3244C242.111 23.8255 244.791 25.75 248.238 25.75ZM249.005 22.9676C247.01 22.9676 245.57 22.0865 245.57 20.3708C245.57 18.5158 247.246 17.855 249.288 17.5884C250.433 17.4377 253.148 17.1362 253.656 16.6377V18.9332C253.656 21.0432 251.944 22.9676 249.005 22.9676Z"
                    fill="black"
                  />
                  <path
                    d="M275.472 11.8961C274.74 9.12535 272.533 7.31681 268.614 7.31681C264.518 7.31681 261.614 9.43836 261.614 12.5917C261.614 15.119 263.172 16.8 266.572 17.542L269.641 18.2028C271.388 18.5854 272.203 19.3505 272.203 20.4635C272.203 21.8431 270.703 22.9213 268.39 22.9213C266.277 22.9213 264.919 22.0286 264.495 20.278L261.083 20.7881C261.673 23.9415 264.341 25.7152 268.413 25.7152C272.793 25.7152 275.826 23.4314 275.826 20.2084C275.826 17.6927 274.197 16.1392 270.869 15.3857L267.989 14.7365C265.994 14.2727 265.132 13.6119 265.144 12.4062C265.132 11.0382 266.643 10.0644 268.65 10.0644C270.845 10.0644 271.86 11.2585 272.273 12.4526L275.472 11.8961Z"
                    fill="black"
                  />
                  <path
                    d="M288.17 7.54867H284.452V3.28237H280.923V7.54867H278.267V10.331H280.923V20.8461C280.911 24.0806 283.425 25.6457 286.211 25.5877C287.332 25.5761 288.088 25.3674 288.501 25.2167L287.863 22.3532C287.627 22.3996 287.191 22.5039 286.624 22.5039C285.479 22.5039 284.452 22.1329 284.452 20.1273V10.331H288.17V7.54867Z"
                    fill="black"
                  />
                  <path
                    d="M309.559 7.54867H305.652V5.94881C305.652 4.37213 306.313 3.51423 308.036 3.51423C308.768 3.51423 309.288 3.67654 309.618 3.78088L310.444 0.975322C309.949 0.789831 308.922 0.5 307.493 0.5C304.625 0.5 302.111 2.14624 302.111 5.48508V7.54867H299.313V10.331H302.111V25.3558H305.652V10.331H309.559V7.54867Z"
                    fill="black"
                  />
                  <path
                    d="M320.13 25.7152C325.241 25.7152 328.581 22.0402 328.581 16.5334C328.581 10.9919 325.241 7.31681 320.13 7.31681C315.019 7.31681 311.678 10.9919 311.678 16.5334C311.678 22.0402 315.019 25.7152 320.13 25.7152ZM320.141 22.8053C316.801 22.8053 315.243 19.9418 315.243 16.5218C315.243 13.1134 316.801 10.2151 320.141 10.2151C323.458 10.2151 325.016 13.1134 325.016 16.5218C325.016 19.9418 323.458 22.8053 320.141 22.8053Z"
                    fill="black"
                  />
                  <path
                    d="M332.521 25.3558H336.05V14.4814C336.05 12.1512 337.88 10.4702 340.382 10.4702C341.114 10.4702 341.94 10.5977 342.224 10.6788V7.36318C341.87 7.31681 341.173 7.28203 340.725 7.28203C338.6 7.28203 336.782 8.46453 336.121 10.3774H335.932V7.54867H332.521V25.3558Z"
                    fill="black"
                  />
                  <path
                    d="M349.501 25.3558H353.089L356.772 12.499H357.044L360.726 25.3558H364.327L369.65 7.54867H366.003L362.473 20.5678H362.296L358.755 7.54867H355.108L351.543 20.6258H351.366L347.813 7.54867H344.165L349.501 25.3558Z"
                    fill="black"
                  />
                  <path
                    d="M378.276 25.75C381.274 25.75 382.962 24.2545 383.635 22.9213H383.777V25.3558H387.223V13.5308C387.223 8.3486 383.068 7.31681 380.188 7.31681C376.907 7.31681 373.885 8.61524 372.705 11.8613L376.021 12.6033C376.541 11.3396 377.863 10.1224 380.236 10.1224C382.514 10.1224 383.682 11.2933 383.682 13.3105V13.3916C383.682 14.6553 382.36 14.6321 379.102 15.0031C375.667 15.3973 372.15 16.2784 372.15 20.3244C372.15 23.8255 374.829 25.75 378.276 25.75ZM379.043 22.9676C377.048 22.9676 375.608 22.0865 375.608 20.3708C375.608 18.5158 377.285 17.855 379.327 17.5884C380.472 17.4377 383.186 17.1362 383.694 16.6377V18.9332C383.694 21.0432 381.982 22.9676 379.043 22.9676Z"
                    fill="black"
                  />
                  <path
                    d="M391.924 25.3558H395.454V14.4814C395.454 12.1512 397.283 10.4702 399.786 10.4702C400.518 10.4702 401.344 10.5977 401.627 10.6788V7.36318C401.273 7.31681 400.577 7.28203 400.128 7.28203C398.003 7.28203 396.186 8.46453 395.525 10.3774H395.336V7.54867H391.924V25.3558Z"
                    fill="black"
                  />
                  <path
                    d="M410.82 25.7036C414.125 25.7036 415.423 23.7212 416.061 22.5851H416.356V25.3558H419.802V1.61295H416.273V10.4354H416.061C415.423 9.33402 414.219 7.31681 410.843 7.31681C406.464 7.31681 403.241 10.7136 403.241 16.487C403.241 22.2489 406.417 25.7036 410.82 25.7036ZM411.599 22.7474C408.447 22.7474 406.806 20.023 406.806 16.4523C406.806 12.9163 408.412 10.2615 411.599 10.2615C414.68 10.2615 416.332 12.7308 416.332 16.4523C416.332 20.1969 414.644 22.7474 411.599 22.7474Z"
                    fill="black"
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
