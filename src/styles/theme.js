import * as borders from './borders.json'
import * as colors from './colors.json'
import * as typography from './typography.json'

export default {
  borders: {
    radii: {
      s: borders.radii[0],
      m: borders.radii[1]
    },
    size: {
      s: `${borders.borderWidths[0]}px ${borders.borderStyles[0]}`
    }
  },
  colors: {
    button: {
      primary: {
        background: colors.n_500,
        border: colors.n_500,
        color: colors.white
      },
      secondary: {
        background: 'transparent',
        border: colors.n_500,
        color: colors.n_500
      }
    },
    common: {
      black: colors.black,
      white: colors.white
    },
    error: {
      contrast: colors.white,
      fill: colors.red_90
    },
    success: {
      contrast: colors.white,
      fill: colors.green_90
    },
    warning: {
      contrast: colors.white,
      fill: colors.yellow_90
    }
  },
  typography: {
    family: typography.fontFamily,
    size: {
      xs: typography.fontSizes[0],
      s: typography.fontSizes[1],
      m: typography.fontSizes[2],
      l: typography.fontSizes[3],
      xl: typography.fontSizes[4],
      xxl: typography.fontSizes[5],
      xxxl: typography.fontSizes[6],
      xxxxl: typography.fontSizes[7]
    },
    weight: {
      light: typography.fontWeights[0],
      regular: typography.fontWeights[1],
      bold: typography.fontWeights[2]
    }
  }
}
