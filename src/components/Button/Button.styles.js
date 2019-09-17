import { css } from '@emotion/core'
import styled from '@emotion/styled'

const backgroundSelector = (theme, type, mode) => {
  if (!mode) {
    switch (type) {
      case 'primary':
        return theme.colors.button.primary.fill
      case 'secondary':
        return theme.colors.button.secondary.fill
      case 'success':
        return theme.colors.button.success.fill
      case 'error':
        return theme.colors.button.error.fill
      case 'warning':
        return theme.colors.button.warning.fill
      default:
        return theme.colors.button.primary.fill
    }
  } else if (mode === 'active') {
    // TODO
    switch (type) {
      case 'primary':
        return theme.colors.button.primary.fill
      case 'secondary':
        return theme.colors.button.secondary.fill
      case 'success':
        return theme.colors.button.success.fill
      case 'error':
        return theme.colors.button.error.fill
      case 'warning':
        return theme.colors.button.warning.fill
      default:
        return theme.colors.button.primary.fill
    }
  } else if (mode === 'hover') {
    // TODO
    switch (type) {
      case 'primary':
        return theme.colors.button.primary.fill
      case 'secondary':
        return theme.colors.button.secondary.fill
      case 'success':
        return theme.colors.button.success.fill
      case 'error':
        return theme.colors.button.error.fill
      case 'warning':
        return theme.colors.button.warning.fill
      default:
        return theme.colors.button.primary.fill
    }
  }
}

const modes = (theme, type, mode) => {
  // TODO
  if (mode === 'ghost') {
    return css`
      background-color: none;
      color: ${type !== 'secondary'
    ? backgroundSelector(theme, type)
    : theme.colors.button.primary.fill};
      svg {
        fill: ${type !== 'secondary'
    ? backgroundSelector(theme, type)
    : theme.colors.button.primary.fill};
      }
      &:hover,
      &:active,
      &:focus {
        color: ${type !== 'secondary'
    ? 'white'
    : theme.colors.button.primary.fill};
        svg {
          fill: ${type !== 'secondary'
    ? 'white'
    : theme.colors.button.primary.fill};
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
    // TODO
    return `
          background-color: ${props.theme.colors.button.primary.fill};
          border: ${props.theme.borders.borderStandard}
            ${props.theme.colors.button.primary.stroke};
          color: ${props.theme.colors.button.primary.tint};
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
