import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './Typography.styles'

const TypographyFactory = ({ tag }) => ({ children, ...rest }) => {
  const typeProps = {
    tag,
    ...rest
  }
  return <StyledText {...typeProps}>{children}</StyledText>
}

TypographyFactory.propTypes = {
  align: PropTypes.oneOf(['center', 'right']),
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  color: PropTypes.string,
  /** @uxpinignoreprop */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])
}

export default TypographyFactory
