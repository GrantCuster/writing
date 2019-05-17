import { sm, font_size } from '../parts/Static'

export let Hd = ({
  width = '100%',
  align,
  stroke = 1,
  fs = font_size,
  color = 'black',
}) => {
  let s = fs * sm * stroke
  let sc = Math.ceil(s)
  let alignment = align === 'b' ? { bottom: -1 } : { top: -1 }

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        width: width,
        height: 2,
        transform: `scaleY(${s / 2})`,
        transformOrigin: 'center center',
        background: color,
        ...alignment,
      }}
    />
  )
}

export let Vd = ({
  height = '100%',
  align,
  stroke = 1,
  fs = font_size,
  color = 'black',
}) => {
  let s = fs * sm * stroke
  let sc = Math.ceil(s)
  let alignment = align === 'l' ? { left: -1 } : { right: -1 }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: height,
        width: 2,
        transform: `scaleX(${s / 2})`,
        transformOrigin: 'center center',
        background: color,
        ...alignment,
      }}
    />
  )
}

export let Rect = ({ stroke = 1, color = 'black', fs = font_size }) => {
  // double and scale down
  // for stroke to be 2
  // assumes 100% scale
  let s = fs * sm * stroke
  let size = (2 / s) * 100

  return (
    <div
      style={{
        position: 'absolute',
        left: '-' + (size - 100) / 2 + '%',
        left: -1,
        top: '-' + (size - 100) / 2 + '%',
        top: -1,
        height: 'calc(' + size + '% + 2px)',
        width: 'calc(' + size + '% + 2px)',
        transform: `scale(${s / 2})`,
        transformOrigin: 'left top',
        border: `solid 2px ${color}`,
        pointerEvents: 'none',
      }}
    />
  )
}
