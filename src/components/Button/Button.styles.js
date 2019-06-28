import { css } from '@emotion/core'
import styled from '@emotion/styled'

const backgroundSelector = (theme, type, mode) => {
  if (!mode) {
    switch (type) {
      case 'primary':
        return theme.palette.primary.base
      case 'secondary':
        return theme.palette.secondary.base
      case 'success':
        return theme.palette.success
      case 'error':
        return theme.palette.error
      case 'warning':
        return theme.palette.warning
      default:
        return theme.palette.primary.base
    }
  } else if (mode === 'active') {
    switch (type) {
      case 'primary':
        return theme.palette.active.primary
      case 'secondary':
        return theme.palette.active.secondary
      case 'success':
        return theme.palette.active.success
      case 'error':
        return theme.palette.active.error
      case 'warning':
        return theme.palette.active.warning
      default:
        return theme.palette.active.primary
    }
  } else if (mode === 'hover') {
    switch (type) {
      case 'primary':
        return theme.palette.hover.primary
      case 'secondary':
        return theme.palette.hover.secondary
      case 'success':
        return theme.palette.hover.success
      case 'error':
        return theme.palette.hover.error
      case 'warning':
        return theme.palette.hover.warning
      default:
        return theme.palette.hover.default
    }
  }
}

const modes = (theme, type, mode) => {
  if (mode === 'ghost') {
    return css`
      background-color: none;
      color: ${type !== 'secondary'
    ? backgroundSelector(theme, type)
    : theme.palette.primary.base};
      svg {
        fill: ${type !== 'secondary'
    ? backgroundSelector(theme, type)
    : theme.palette.primary.base};
      }
      &:hover,
      &:active,
      &:focus {
        color: ${type !== 'secondary' ? 'white' : theme.palette.primary.base};
        svg {
          fill: ${type !== 'secondary' ? 'white' : theme.palette.primary.base};
        }
      }
    `
  }
}

const sizeSelector = (theme, size) => {
  switch (size) {
    case 'xs':
      return theme.typography.size.xs
    case 's':
      return theme.typography.size.s
    case 'm':
      return theme.typography.size.m
    case 'l':
      return theme.typography.size.l
    case 'xl':
      return theme.typography.size.xl
    case 'xxl':
      return theme.typography.size.xxl
    case 'xxxl':
      return theme.typography.size.xxxl
    default:
      return theme.typography.size.m
  }
}

const ButtonCommon = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => backgroundSelector(props.theme, props.type)};
  border: 0;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: ${props => `${sizeSelector(props.theme, props.size)}px`};
  justify-content: center;
  line-height: ${props =>
    `${sizeSelector(props.theme, props.size) *
      props.theme.typography.lineHeightMultiplier.button}px}`};
  outline: none;
  padding: 2rem 4rem;
  width: ${props => (props.stretched ? '100%' : 'auto')};
  &:hover {
    background-color: ${props =>
    backgroundSelector(props.theme, props.type, 'hover')};
  }
  &:focus {
    outline: none;
    background-color: ${props =>
    backgroundSelector(props.theme, props.type, 'active')};
  }
  &:active {
    background-color: ${props =>
    backgroundSelector(props.theme, props.type, 'active')};
  }
  &:disabled {
    ${props => {
    return `
          background-color: ${props.theme.palette.disabled.background};
          border: ${props.theme.borders.borderStandard}
            ${props.theme.palette.disabled.border};
          color: ${props.theme.palette.disabled.color};
        `
  }}
    &:hover {
      box-shadow: none;
    }
  }
`

const ButtonStyles = styled(ButtonCommon)`
  ${props => modes(props.theme, props.type, props.mode)};
`

export default ButtonStyles
