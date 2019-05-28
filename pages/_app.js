import App, { Container } from 'next/app'
import { PostLayout } from '../parts/Layout'
import React from 'react'
import { font_size, line_height, font_min, sm } from '../parts/Static'
import { debounce } from 'lodash'
import Header from '../parts/Header'
import Head from 'next/head'

// Override the App class to put layout component around the page contents
// https://github.com/zeit/next.js#custom-app

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      ww: 600,
      optimal: 600,
      grid_canvas: null,
      mode: 'light',
      grid: 'hide',
      showing_posts: 25,
      scroll_check: false,
      loaded: false,
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
    this.setState(
      {
        ww: window.innerWidth,
        wh: window.innerHeight,
        // optimal: width + font_size * line_height,
        optimal: 633.50244140625,
        loaded: true,
      },
      () => {
        // account for scroll bar
        if (this.state.scroll_check === false) {
          this.setState({
            ww: document.documentElement.clientWidth,
            scroll_check: true,
          })
        }
      }
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
    let {
      ww,
      wh,
      optimal,
      mode,
      grid,
      grid_canvas,
      showing_posts,
      loaded,
    } = this.state
    const { Component, pageProps } = this.props
    const { pathname } = this.props.router

    let is_post = pathname.startsWith('/posts/')

    let ogrem = font_size * line_height
    let afs = font_size

    let font_ratio = optimal / font_size
    if (ww - ogrem < optimal) {
      let aspect_font = (ww - ogrem) / font_ratio
      if (aspect_font > font_min) {
        afs = aspect_font
      } else {
        afs = font_min
      }
    }

    ogrem = afs * line_height

    let stacked = false
    if (ww - ogrem < optimal) stacked = true

    let divisions = 4

    let avail = stacked ? ww - ogrem / 2 : ww - ogrem
    let target_width = optimal / divisions
    let columns = Math.floor(avail / target_width)
    let column_width = avail / columns

    let offset = 0
    let even = columns % 2 === 0
    if (!even) {
      columns = columns - 1
      offset = column_width / 2
    }

    let ratio = column_width / target_width

    let optim_width = column_width * divisions
    let optim_center_left =
      (columns / 2 - divisions / 2) * column_width + offset

    // TODO rethink stacked
    if (stacked) {
      offset = 0
      columns = divisions
      column_width = avail / divisions
      optim_width = column_width * divisions
      optim_center_left = 0
      // grem = grem / 2
      ratio = 1
    }

    // Adjust grem
    let fs = afs * ratio
    let grem = fs * line_height

    let center_text = {
      width: optim_width,
      marginLeft: optim_center_left,
    }
    let ofsn = {
      fontSize: afs,
      lineHeight: line_height,
    }
    // font-size normal
    let fsn = {
      fontSize: fs,
      lineHeight: line_height,
    }

    let logo_stroke = 'black'
    let ocap = ogrem * (2048 / 2816)
    let cap = grem * (2048 / 2816)

    let grid_props = {
      grem,
      ogrem,
      center_text,
      afs,
      fsn,
      fs,
      columns,
      column_width,
      offset,
      ww,
      wh,
      cap,
      optim_width,
      stacked,
    }

    return (
      <Container>
        <Head>
          <style>{`.js-no-flash { display: none }`}</style>
          <noscript>
            <style>{`.js-no-flash { display: block }`}</style>
          </noscript>
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            src: url('/static/fonts/Inter-Regular.woff2?v=3.5') format('woff2'),
              url('/static/fonts/Inter-Regular.woff?v=3.5') format('woff');
          }
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 400;
            src: url('/static/fonts/Inter-Italic.woff2?v=3.5') format('woff2'),
              url('/static/fonts/Inter-Italic.woff?v=3.5') format('woff');
          }
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            src: url('/static/fonts/Inter-Bold.woff2?v=3.5') format('woff2'),
              url('/static/fonts/Inter-Bold.woff?v=3.5') format('woff');
          }
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 700;
            src: url('/static/fonts/Inter-BoldItalic.woff2?v=3.5')
                format('woff2'),
              url('/static/fonts/Inter-BoldItalic.woff?v=3.5') format('woff');
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
            font-feature-settings: 'ss02' 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          pre {
            -webkit-font-smoothing: auto;
            -moz-osx-font-smoothing: auto;
            overflow-x: auto;
            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
              Monaco, Courier New, monospace;
          }
          body {
            margin: 0;
            overflow-x: hidden;
          }
          a {
            color: inherit;
            text-decoration: none;
            transition: opacity 0.025s linear;
          }
          a:hover {
            opacity: 0.75;
          }
          a.no-hover:hover {
            opacity: 1;
          }
          .hover_box_overlay {
            opacity: 0;
            transition: opacity 0.025s linear;
          }
          .hover_box:hover .hover_box_overlay {
            opacity: 1;
          }
          a.gray-backer {
            transition: background 0.05s linear;
          }
          a.gray-backer:hover {
            background: #f3f3f3;
          }
          button:focus {
            outline: #999 auto 3px;
          }
        `}</style>
        <style jsx global>{`
          html {
            font-size: ${afs}px;
            line-height: ${afs * line_height}px;
          }
          a,
          .display-link {
            background-image: linear-gradient(
              to right,
              black 100%,
              transparent 0%
            );
            background-position: 0em calc(${1 + sm}em);
            background-repeat: repeat-x;
            background-size: 1em ${sm}em;
          }
          a.no-underline {
            background-image: none;
          }
          a.no-hover {
            background-image: none;
          }
          a.no-hover:hover {
            background-image: none;
            opacity: 1;
          }
        `}</style>

        {optimal !== null ? (
          <div
            className="js-no-flash"
            style={{ display: loaded ? 'block' : null }}
          >
            <Header
              grem={grem}
              logo_stroke={logo_stroke}
              cap={cap}
              fsn={fsn}
              fs={fs}
              is_post={is_post}
            />
            {is_post ? (
              <PostLayout pathname={pathname} {...grid_props}>
                <Component {...pageProps} />
              </PostLayout>
            ) : (
              <Component {...pageProps} {...grid_props} />
            )}
          </div>
        ) : null}
      </Container>
    )
  }
}
