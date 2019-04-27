import React from 'react'

class Svggraph extends React.Component {
  render() {
    let {
      width,
      packed,
      grem,
      connections,
      center_points,
      experiments,
      fl,
      spacer,
      ww,
      wh,
      adjusted_height,
      active_node,
      side_width,
      set_width,
      set_height,
    } = this.props

    let final_h = set_height
    let final_w = side_width

    let ratio_h = final_h / adjusted_height
    let ratio_w = final_w / width

    // slice off start and end points
    center_points = center_points.slice(1, center_points.length - 1)

    return (
      <svg
        width={final_w}
        height={final_h}
        style={{
          width: final_w,
          height: final_h,
          position: 'absolute',
          right: 0,
          top: grem * 2,
          zIndex: 1,
        }}
      >
        {connections.map(c => (
          <line
            x1={c.x1 * ratio_w}
            y1={c.y1 * ratio_h}
            x2={c.x2 * ratio_w}
            y2={c.y2 * ratio_h}
            strokeWidth={fl * 1}
            stroke="var(--background)"
            stroke="white"
            style={{ display: 'none' }}
          />
        ))}
        {center_points.map((cp, i) => {
          let e = experiments[i]
          let size = active_node !== i ? spacer / 2 : (spacer / 2) * 1.125
          let fill = active_node === i ? '#fff' : '#fff'
          fill = 'var(--background)'
          // let stroke = active_node === i ? 'black' : 'var(--light_background)'
          return e !== undefined && e.featured ? (
            <rect
              x={cp.x * ratio_w - size / 2}
              y={cp.y * ratio_h - size / 2}
              width={size}
              height={size}
              fill={fill}
              strokeWidth={fl * 2}
              style={
                {
                  // transition: 'width 0.1s, height 0.1s, x 0.1s, y 0.1s',
                }
              }
            />
          ) : cp.spacer ? (
            <circle
              cx={cp.x * ratio_w}
              cy={cp.y * ratio_h}
              r={size / 2}
              fill={'white'}
              stroke={fill}
              strokeWidth={fl * 2}
              style={
                {
                  // transition: 'width 0.1s, height 0.1s, x 0.1s, y 0.1s',
                }
              }
            />
          ) : (
            <circle
              cx={cp.x * ratio_w}
              cy={cp.y * ratio_h}
              r={size / 2}
              fill={fill}
              style={
                {
                  // transition: 'width 0.1s, height 0.1s, x 0.1s, y 0.1s',
                }
              }
            />
          )
        })}
      </svg>
    )
  }
}

export default Svggraph
