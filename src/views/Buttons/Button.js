import styled from 'styled-components'

export default styled.button`
  ${props => props.theme.fontStyles.button};
  appearance: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.green};
  border: 0;
  border-radius: 1rem;
  padding: 2rem 4rem;
  outline: none;
`
