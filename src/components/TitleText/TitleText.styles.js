import styled from '@emotion/styled'

export default styled.h1`
  color: ${props => (props.color ? props.color : 'black')};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.size.xl}px;
`
