import App, { Container } from 'next/app'
import Link from 'next/link'
import { PostLayout } from '../parts/Layout'
import React from 'react'
import { font_size, line_height, font_min, sm } from '../parts/Static'
import { debounce } from 'lodash'
import Header from '../parts/Header'
import Head from 'next/head'
import * as Bowser from 'bowser'

// Override the App class to put layout component around the page contents
// https://github.com/zeit/next.js#custom-app

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      ww: 640,
      wh: 480,
      optimal: 600,
      loaded: false,
      render_info: null,
      origin: null,
    }
    this.setSize = this.setSize.bind(this)
    this.setSize = debounce(this.setSize, 100)
    this.link = this.link.bind(this)
  }

  link(href) {
    return <a href={href}>{href}</a>
  }

  setSize() {
    this.setState({
      ww: document.documentElement.clientWidth,
      wh: window.innerHeight,
      loaded: true,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSize)
    this.setSize()
    let render_info = Bowser.getParser(window.navigator.userAgent).parse()
      .parsedResult
    this.setState({ render_info, origin: window.location.href })
  }

  render() {
    let { ww, wh, loaded, optimal, render_info, origin } = this.state
    const { Component, pageProps } = this.props
    const { pathname } = this.props.router

    let is_post = pathname.startsWith('/posts/')

    let grem = font_size * line_height

    let dividers = 4
    let column_raw = Math.floor(ww / (optimal / dividers))
    let column_num = Math.floor(column_raw / 2) * 2
    let c = Math.round((ww / column_raw) * 10) / 10

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
            background: #efefef;
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
          }
          p {
            margin: 0 0 0 0;
            text-indent: ${grem}px;
          }
          a {
            color: black;
          }
        `}</style>
        <div
          className="js-no-flash"
          style={{ display: loaded ? 'block' : 'block' }}
        >
          <div style={{ padding: grem / 2 }}>
            <div>Grant Custer</div>
            <div>Design–Code</div>
            <div style={{ display: 'none' }}>
              {ww}x{wh}
            </div>
            <div style={{ display: 'flex', paddingLeft: grem / 2 }}>
              <div style={{ marginRight: grem / 2 }}>
                {is_post ? (
                  <Link href="/">
                    <a>Writing</a>
                  </Link>
                ) : (
                  <span>Writing</span>
                )}
              </div>
              <div style={{ marginRight: grem / 2 }}>
                <a href="http://feed.grantcuster.com">Feed</a>
              </div>
            </div>
          </div>
          {is_post ? (
            <PostLayout pathname={pathname} grem={grem} c={c}>
              <Component {...pageProps} />
            </PostLayout>
          ) : (
            <Component {...pageProps} grem={grem} c={c} />
          )}
        </div>
        {is_post ? (
          <div
            style={{
              textIndent: grem,
              padding: grem / 2,
            }}
          >
            Generated
            {origin !== null ? (
              <span> from {this.link(origin)}</span>
            ) : null} on {new Date().toLocaleString()}
            {render_info !== null
              ? ` with ${render_info.browser.name} ${
                  render_info.browser.version
                } on ${render_info.os.name} ${
                  render_info.os.version ? render_info.os.version : ''
                }`
              : null}
            .
          </div>
        ) : null}
      </Container>
    )
  }
}
