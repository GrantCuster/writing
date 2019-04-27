let font_size = 16
let line_height = 1.5

let size_domain = [1, 2]
let lh_range = [line_height, 1]
let lh_size_range = size_domain.map(m => m * font_size * line_height)
let fs_size_range = lh_size_range.map((lhp, i) => lhp / lh_range[i])

export function sizeMap(grem_size) {
  let ratio =
    (grem_size - lh_size_range[0]) / (lh_size_range[1] - lh_size_range[0])
  let lh_pixels = ratio * lh_size_range
  let fs = ratio * (fs_size_range[1] - fs_size_range[0]) + fs_size_range[0]
  let lh = ratio * (lh_range[1] - lh_range[0]) + lh_range[0]
  return { fs, lh }
}

export let styles = {
  font: 'Inter var, Inter, serif',
  font_size,
  line_height,
  grem: font_size * line_height,
  stroke_mult: 0.0833,
  stroke_mult: 0.07,
}

export let smaller_style = {
  fontSize: (font_size * 3) / 4,
  lineHeight: 1.5,
  paddingTop: (font_size * line_height) / 8,
  paddingBottom: (font_size * line_height) / 8,
}

export let small_style = {
  fontSize: (font_size * 7) / 8,
  lineHeight: 1.5,
  padding: p((font_size * line_height * 1) / 16, 0),
}

export function p() {
  let string = ''
  if (arguments.length === 2) {
    string = `${arguments[0]}px ${arguments[1]}px`
  } else if (arguments.length === 4) {
    string = `${arguments[0]}px ${arguments[1]}px ${arguments[2]}px ${
      arguments[3]
    }px`
  }
  return string
}

export function track(size) {
  let a = -0.0223
  let b = 0.185
  let c = -0.1745
  let z = size
  return { letterSpacing: `${a + b * Math.exp(c * z)}em` }
}
