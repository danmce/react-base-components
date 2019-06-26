/**
 * Just a sample theme layout
 * You can structure this however you want...
 */

const colors = {
  green: '#A3D165'
}

const fonts = {
  main: "'Lato', sans-serif"
}

const fontStyles = {
  title: `
    font-size: 4rem;
    font-family: ${fonts.main};
  `,
  button: `
    font-size: 1.6rem;
    font-family: ${fonts.main};
    text-transform: uppercase;
  `
}

export default {
  colors,
  fonts,
  fontStyles
}
