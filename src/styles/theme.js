import * as borders from './borders.json'
import * as typography from './typography.json'
import * as colors from './colors.json'

export default {
  palette: {
    primary: {
      ...colors.blueGray
    },
    secondary: {
      ...colors.gray
    },
    success: colors.green.base,
    error: colors.red.base,
    warning: colors.orange.base,
    active: {
      primary: colors.blueGray.dark10,
      secondary: colors.gray.dark10,
      success: colors.green.dark10,
      error: colors.red.dark10,
      warning: colors.orange.dark10
    },
    hover: {
      primary: colors.blueGray.dark15,
      secondary: colors.gray.dark15,
      success: colors.green.dark15,
      error: colors.red.dark15,
      warning: colors.orange.dark15
    },
    disabled: {
      background: colors.gray.light15,
      border: colors.gray.light10,
      color: colors.white
    }
  },
  borders: {
    ...borders
  },
  typography: {
    lineHeightMultiplier: { ...typography.lineHeightMultiplier },
    size: { ...typography.size }
  }
}
