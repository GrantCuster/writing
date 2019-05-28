import React from 'react'

export class VideoHolder extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

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
