import styled from 'styled-components'

/**
 * Reusable 'scaffold' style components could go here
 */
export const Page = styled.div`
  align-items: center;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

export const ContainerInline = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 0 1rem;
  }
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 0 1rem;
  }
`

/**
 * You may want a more advanced Typopgraphy setup
 * This is here just for the startup page -> delete as necessary
 */
export const TitleMain = styled.h1`
  ${props => props.theme.fontStyles.title};
  padding: 1rem 1rem 2rem;
  text-align: center;
`
