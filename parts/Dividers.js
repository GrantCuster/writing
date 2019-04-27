import { styles, p } from '../parts/Utils'

export let Hd_dep = ({
  width,
  align,
  left = 0,
  style,
  miter = 'butt',
  stroke = 1,
}) => {
  let s = styles.font_size * styles.stroke_mult * stroke
  s = stroke
  let sc = Math.ceil(s)
  let alignment = align === 'b' ? { bottom: -sc / 2 } : { top: -sc / 2 }
  s = styles.font_size * styles.stroke_mult

  let adjust = 0
  if (miter === 'extend') adjust = sc / 4

  return (
    <svg
      width={width}
      height={sc}
      style={{
        position: 'absolute',
        left: left - adjust,
        width: width + adjust * 2,
        height: sc,
        ...alignment,
        ...style,
      }}
    >
      <line
        x1={0 - adjust}
        y1={sc / 2}
        x2={width + adjust * 2}
        y2={sc / 2}
        stroke="black"
        strokeWidth={s}
      />
    </svg>
  )
}

export let Hd = ({
  width,
  align,
  left = 0,
  style,
  miter = 'butt',
  stroke = 1,
}) => {
  let s = styles.font_size * styles.stroke_mult * stroke
  s = stroke
  let sc = Math.ceil(s)
  let alignment = align === 'b' ? { bottom: -1 } : { top: -1 }
  s = styles.font_size * styles.stroke_mult

  let adjust = 0
  if (miter === 'extend') adjust = sc / 4

  if (typeof width === 'string') {
    width = `calc(${width} + ${stroke * 2}px)`
  } else {
    width = width + stroke * 2
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: -stroke,
        width: width,
        height: 2,
        transform: `scaleY(${stroke / 2})`,
        transformOrigin: '0% 50%',
        background: 'black',
        ...alignment,
        ...style,
      }}
    />
  )
}

export let Vd = ({
  height,
  align,
  top = 0,
  style,
  miter = 'butt',
  stroke = 1,
}) => {
  let s = styles.font_size * styles.stroke_mult * stroke
  let sc = Math.ceil(s)
  let alignment = align === 'l' ? { left: -sc / 2 } : { right: -sc / 2 }

  let adjust = 0
  if (miter === 'extend') adjust = sc / 4

  return (
    <svg
      width={sc}
      height={height}
      style={{
        position: 'absolute',
        top: top - adjust,
        height: height + adjust * 2,
        width: sc,
        ...alignment,
        ...style,
      }}
    >
      <line
        x1={sc / 2}
        y1={0 - adjust}
        x2={sc / 2}
        y2={height + adjust * 2}
        stroke="black"
        strokeWidth={s}
      />
    </svg>
  )
}

export let Rect_dep = ({
  width,
  height,
  align,
  top = 0,
  left = 0,
  style,
  miter = 'butt',
  stroke = 1,
}) => {
  let s = styles.font_size * styles.stroke_mult * stroke
  s = stroke
  let sc = Math.ceil(s)
  s = styles.font_size * styles.stroke_mult

  let adjust = 0
  if (miter === 'extend') adjust = sc / 4

  return (
    <svg
      width={width}
      height={height}
      style={{
        position: 'absolute',
        left: left - sc / 2,
        top: top - sc / 2,
        height: height + sc,
        width: width + sc,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <rect
        x={sc / 2}
        y={sc / 2}
        width={width}
        height={height}
        stroke="black"
        strokeWidth={s}
        fill="none"
      />
    </svg>
  )
}

export let Rect = ({
  width,
  height,
  align,
  top = 0,
  left = 0,
  style,
  miter = 'butt',
  stroke = 1,
}) => {
  let og_width = width
  if (typeof width === 'string') {
    width = `calc(${width} + ${stroke * 2}px)`
  } else {
    width = width + stroke * 2
  }
  let og_height = height
  if (typeof height === 'string') {
    height = `calc(${height} + ${stroke * 2}px)`
  } else {
    height = height + stroke * 2
  }
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: og_height,
        width: og_width,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: -stroke,
          top: -2,
          width: width,
          height: 2,
          transform: `scaleY(${stroke / 2})`,
          transformOrigin: '0% 100%',
          background: 'black',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -2,
          top: -stroke,
          height: height,
          width: 2,
          transform: `scaleX(${stroke / 2})`,
          transformOrigin: '0% 0%',
          background: 'black',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -stroke,
          bottom: -2,
          width: width,
          height: 2,
          transform: `scaleY(${stroke / 2})`,
          transformOrigin: '0% 0%',
          background: 'black',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -2,
          top: -stroke,
          height: height,
          width: 2,
          transform: `scaleX(${stroke / 2})`,
          transformOrigin: '100% 0%',
          background: 'black',
        }}
      />
    </div>
  )
}

export let Fdiv_dep = ({
  width,
  height,
  left = 0,
  top = 0,
  style,
  miter = 'butt',
}) => {
  let s = styles.font_size * styles.stroke_mult * 1.5
  let sc = Math.ceil(s)

  let adjust = 0
  if (miter === 'extend') adjust = sc / 4

  let stroke = 'black'
  stroke = 'var(--dark_background)'

  return (
    <svg
      width={width}
      height={height}
      style={{
        position: 'absolute',
        left: left - sc / 2,
        top: top - sc / 2,
        height: height + sc,
        width: width + sc,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <path
        d={`M${sc / 2},${sc / 2 + height} L${sc / 2},${sc / 2 +
          height / 2} L${sc / 2 + width / 2},${sc / 2 + height / 2} L${sc / 2 +
          width / 2},${sc / 2} L${sc / 2 + width},${sc / 2} L${sc / 2 +
          width},${sc / 2 + height} L${sc / 2},${sc / 2 + height}`}
        fill="none"
        stroke="black"
        strokeWidth={s}
        style={{ display: 'none' }}
      />
      <path
        d={`M${sc / 2},${sc / 2 + height} L${sc / 2},${sc / 2 +
          height / 2} L${sc / 2 + width / 2},${sc / 2 + height / 2} L${sc / 2 +
          width / 2},${sc / 2} L${sc / 2 + width},${sc / 2} L${sc / 2}
          `}
        stroke="var(--light_background)"
        strokeWidth={s}
        fill="none"
        style={{ display: 'none' }}
      />
      <rect
        x={sc / 2}
        y={sc / 2}
        width={width}
        height={height}
        stroke={stroke}
        strokeWidth={s}
        fill="none"
      />
      <line
        x1={sc / 2 + width}
        y1={sc / 2 + height}
        x2={sc / 2}
        y2={sc / 2}
        stroke={stroke}
        strokeWidth={s}
        fill="none"
      />

      <line
        x1={sc / 2 + width}
        y1={sc / 2}
        x2={sc / 2}
        y2={sc / 2 + height}
        stroke={stroke}
        strokeWidth={s}
        fill="none"
      />
    </svg>
  )
}

export let Fdiv = ({
  width,
  height,
  left = 0,
  top = 0,
  style,
  miter = 'butt',
}) => {
  let s = styles.font_size * styles.stroke_mult * 1.5
  let sc = Math.ceil(s)

  let adjust = 0
  if (miter === 'extend') adjust = sc / 4

  let stroke = 'black'
  stroke = 'var(--dark_background)'

  return (
    <div
      width={width}
      height={height}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: height,
        width: width,
        pointerEvents: 'none',
        border: 'solid 1px black',
        ...style,
      }}
    />
  )
}
