import styled from '@emotion/styled'
import React from 'react'

const StyledDynamicText = styled.p`
  ${props => {
    if (props.tint) {
      return `
      color: ${props.tint};
    `
    }
  }}
  ${props => {
    if (props.bold) {
      return `
        font-weight: bold;
      `
    }
  }}
  ${props => {
    if (props.align) {
      return `
        text-align: ${props.align};
      `
    }
  }}
  ${props => {
    switch (props.tag) {
      case 'h1':
        return `
          font-size: ${props.theme.typography.size.xl}px;
        `
      case 'h2':
        return `
          font-size: ${props.theme.typography.size.l}px;
        `
      case 'p':
        return `
          font-size: ${props.theme.typography.size.m}px;
        `
    }
  }}
`

const StyledText = ({ tag = 'p', children, ...props }) => {
  const WithComponent = StyledDynamicText.withComponent(tag)
  return (
    <WithComponent tag={tag} {...props}>
      {children}
    </WithComponent>
  )
}

export default StyledText
