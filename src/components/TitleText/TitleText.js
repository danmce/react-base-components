import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleText from './TitleText.styles'

const TitleText = ({ children }) => (
  <StyledTitleText>{children}</StyledTitleText>
)

TitleText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default TitleText
