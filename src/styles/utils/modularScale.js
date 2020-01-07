export default (decrement, increment, baseSize, ratio) => {
  const array = []
  let size = baseSize
  const reduceTo = Math.abs(decrement)
  for (let i = 0; i <= reduceTo; i++) {
    if (i > 0) {
      size = size / ratio
    }
    if (i > 0) {
      array.unshift(`${(size / 16).toFixed(3)}rem`)
    }
  }
  size = baseSize
  for (let i = 0; i <= increment; i++) {
    if (i > 0) {
      size = size * ratio
    }
    array.push(`${(size / 16).toFixed(3)}rem`)
  }
  return array
}
