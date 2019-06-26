import styled from 'styled-components'
import * as colors from 'styles/colors.json'

const backgroundSelector = (type, mode) => {
  switch (type) {
    case 'primary':
      return colors.blue.base
    case 'secondary':
      return colors.silver.base
    case 'success':
      return colors.success
    case 'error':
      return colors.error
    case 'warning':
      return colors.warning
    default:
      return colors.blue.base
  }
}

export default styled.button`
  appearance: none;
  background-color: ${props => backgroundSelector(props.type)};
  border: 0;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 2rem 4rem;
`
