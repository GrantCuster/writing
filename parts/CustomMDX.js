import React from 'react'

export class Certainty extends React.Component {
  render() {
    return (
      <p style={{ color: '#555', marginBottom: '1.5rem', textIndent: 0 }}>
        Certainty: {this.props.children}
      </p>
    )
  }
}

export class Effort extends React.Component {
  render() {
    return (
      <div
        style={{ color: '#666', marginBottom: '1.5rem', textIndent: '1.5rem' }}
      >
        Effort: {this.props.children}
      </div>
    )
  }
}

export class Context extends React.Component {
  render() {
    return <div style={{ color: '#666' }}>context</div>
  }
}

export class Person extends React.Component {
  render() {
    let { p, v, m, link, cap } = this.props
    let display = p.short
    if (v === 'full') display = p.full
    if (v === 'they') display = p.pronouns[0]
    if (v === 'them') display = p.pronouns[1]
    if (v === 'their') display = p.pronouns[2]
    if (v === 'theirs') display = p.pronouns[3]
    if (v === 'themself') display = p.pronouns[1] + 'self'
    if (cap) display = display.charAt(0).toUpperCase() + display.slice(1)
    if (link) display = <a href={p.link}>{display}</a>
    return <span person-ref={p.full}>{display}</span>
  }
}

export class VideoHolder extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          paddingTop: 25,
          height: 0,
          marginBottom: '1.5em',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={this.props.src}
          frameborder="0"
          allowfullscreen
          autoplay={this.props.giffify ? true : false}
          loop={this.props.giffify ? true : false}
        />
      </div>
    )
  }
}
