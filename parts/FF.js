import React, { useRef, useLayoutEffect } from 'react'
import { styles } from './Utils'

const MyCanvas = (props = {}) => {
  let { width = 100, height = 100, pixelRatio = 2, style = {} } = props

  const canvas = useRef(null)

  useLayoutEffect(() => {
    let ctx = canvas.current.getContext('2d')

    ctx.save()
    ctx.scale(pixelRatio, pixelRatio)

    ctx.clearRect(0, 0, width, height)

    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black'
    ctx.lineWidth = 1
    // ctx.lineJoin = "miter";
    // ctx.miterLimit = 1;

    let size = width / 2
    // o = offset
    let o = width / 4

    ctx.lineWidth = styles.stroke_mult * styles.font_size

    function moveTo(x, y) {
      ctx.moveTo(x + o, y + o)
    }

    function lineTo(x, y) {
      ctx.lineTo(x + o, y + o)
    }

    ctx.fillStyle = 'pink'

    console.log(o, o)

    // ctx.beginPath();
    // moveTo(0, 0);
    // lineTo(size, 0);
    // lineTo(size, size);
    // lineTo(0, size);
    // ctx.fill();

    ctx.fillStyle = 'pink'
    ctx.strokeStyle = 'pink'

    ctx.beginPath()
    moveTo(0, 0)
    lineTo(size / 2, size / 2)
    lineTo(0, size)
    lineTo(0, 0)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    moveTo(size / 2, 0)
    lineTo(size - 0, size / 2)
    lineTo(size / 2, size)
    lineTo(size / 2, 0)
    ctx.fill()
    ctx.stroke()

    // ctx.beginPath();
    // ctx.moveTo(0.5, 0.5);
    // ctx.lineTo(size / 2, 0.5);
    // ctx.lineTo(0.5, size / 2);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(size / 2, 0.5);
    // ctx.lineTo(size - 0.5, 0.5);
    // ctx.lineTo(size / 2, size / 2);
    // ctx.fill();

    ctx.strokeStyle = 'black'

    ctx.beginPath()
    moveTo(size, 0)
    lineTo(0, 0)
    lineTo(0, size)
    ctx.stroke()

    ctx.beginPath()
    moveTo(size / 2, size)
    lineTo(size / 2, 0)
    ctx.stroke()

    ctx.beginPath()
    moveTo(0, size / 2)
    lineTo(size, size / 2)
    ctx.stroke()

    ctx.restore()
  })

  let dw = Math.floor(pixelRatio * width)
  let dh = Math.floor(pixelRatio * height)
  let combined_style = { ...style, width, height }
  return <canvas ref={canvas} width={dw} height={dh} style={combined_style} />
}

export default MyCanvas
