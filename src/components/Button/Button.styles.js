import styled from '@emotion/styled'
import { darken } from '../../utils/colors'

const ButtonCommon = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => backgroundSelector(props.theme, props.type)};
  border: 0;
  border-radius: 1rem;
  color: ${props => textColorSelector(props.theme, props.type)};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => `${sizeSelector(props.theme, props.size)}px`};
  justify-content: center;
  outline: none;
  padding: 1rem 2rem;
  width: ${props => (props.stretched ? '100%' : 'auto')};
  &:hover {
    background-color: ${props =>
    backgroundSelector(props.theme, props.type, 'hover')};
  }
`

const backgroundSelector = (theme, type, mode) => {
  const color = theme.colors.button
  if (!mode) {
    switch (type) {
      case 'primary':
        return color.primary.background
      case 'secondary':
        return color.secondary.background
      case 'success':
        return theme.colors.success.fill
      case 'error':
        return theme.colors.error.fill
      case 'warning':
        return theme.colors.warning.fill
      default:
        return color.primary.background
    }
  } else if (mode === 'hover') {
    switch (type) {
      case 'primary':
        return darken(color.primary.background, 0.5)
      case 'secondary':
        return darken(color.secondary.background, 0.5)
      case 'success':
        return darken(theme.colors.success.fill, 0.5)
      case 'error':
        return darken(theme.colors.error.fill, 0.5)
      case 'warning':
        return darken(theme.colors.warning.fill, 0.5)
      default:
        return darken(color.primary.background, 0.5)
    }
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

const textColorSelector = (theme, type) => {
  const color = theme.colors.button
  switch (type) {
    case 'primary':
      return color.primary.color
    case 'secondary':
      return color.secondary.color
    case 'success':
      return theme.colors.success.contrast
    case 'error':
      return theme.colors.error.contrast
    case 'warning':
      return theme.colors.warning.contrast
    default:
      return color.primary.color
  }
}

export default ButtonCommon
