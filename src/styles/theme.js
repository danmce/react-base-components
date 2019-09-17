import * as borders from './borders.json'
import * as colors from './colors.json'
import * as typography from './typography.json'

export default {
  borders: {
    ...borders
  },
  colors: {
    button: {
      primary: {
        fill: colors.n_500,
        stroke: colors.n_300,
        tint: colors.white,
        case: 'none'
      },
      secondary: {
        fill: 'transparent',
        stroke: colors.n_300,
        tint: colors.n_500,
        case: 'none'
      },
      success: {
        fill: colors.green_500,
        stroke: colors.green_300,
        tint: colors.white,
        case: 'none'
      },
      error: {
        fill: colors.red_500,
        stroke: colors.red_300,
        tint: colors.white,
        case: 'none'
      },
      warning: {
        fill: colors.yellow_500,
        stroke: colors.yellow_300,
        tint: colors.white,
        case: 'none'
      }
    }
  },
  typography: {
    fontFamily: typography.fontFamily,
    lineHeightMultiplier: { ...typography.lineHeightDivider },
    size: { ...typography.size },
    weight: { ...typography.weight }
  }
}
