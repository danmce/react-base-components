import Color from 'color'

export function isLight (color) {
  if (!color) return undefined
  const _color = Color(color)
  return _color.isLight()
}
