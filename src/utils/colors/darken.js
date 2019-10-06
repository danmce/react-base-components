import Color from 'color'

export function darken (color, ratio) {
  if (!ratio) return color
  if (!color) return undefined
  const _color = Color(color)
  return _color
    .darken(ratio)
    .rgb()
    .toString()
}
