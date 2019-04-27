import { styles, p } from '../parts/Utils'
let grem = styles.grem

export default ({ width = grem * 2, height = grem, style, stroke = 1 }) => {
  let s = Math.round((w / 6) * 10) / 10
  s = styles.stroke_mult * styles.font_size * stroke
  s = stroke
  let w = width / 2 - s / 2
  let h = height - s / 2
  let bx = s
  let by = s
  let test = 'test'

  let fill = `#66cadf`
  fill = '#aaa'
  fill = 'white'
  fill = 'var(--light_background)'
  fill = '#ccc'
  fill = 'var(--background)'
  fill = 'none'

  return (
    <div style={{ position: 'relative', width, height, ...style }}>
      <svg
        width={w}
        height={h}
        style={{
          position: 'absolute',
          left: -s / 2,
          top: -s / 2,
          width: width + s,
          height: height + s,
        }}
        shapeRendering="geometricPrecision"
      >
        <path
          d={`M${bx},${by + h} L${bx},${by + h / 2} L${bx + w / 2},${by +
            h / 2} L${bx + w / 2},${by} L${bx + w},${by} L${bx + w},${by +
            h}, L${bx},${by + h}`}
          stroke="none"
          strokeWidth={s}
          fill={fill}
        />
        <path
          d={`M${bx + w},${by + h} L${bx + w},${by + h / 2} L${bx +
            w / 2 +
            w},${by + h / 2} L${bx + w / 2 + w},${by} L${bx +
            w +
            w},${by} L${bx + w + w},${by + h}, L${bx + w},${by + h}`}
          stroke="none"
          strokeWidth={s}
          fill={fill}
        />

        <path
          d={`M${bx},${by + h} L${bx},${by + h / 2} L${bx + w / 2},${by +
            h / 2} L${bx + w / 2},${by + h / 2} L${bx + w / 2},${by} L${bx +
            w},${by}}`}
          stroke="black"
          strokeWidth={s}
          fill="none"
        />
        <path
          d={`M${bx + w},${by + h} L${bx + w},${by + h / 2} L${bx +
            w +
            w / 2},${by + h / 2} L${bx + w + w / 2},${by + h / 2} L${bx +
            w +
            w / 2},${by} L${bx + w + w},${by}}`}
          stroke="black"
          strokeWidth={s}
          fill="none"
        />
      </svg>
    </div>
  )
}
