import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleText from './TitleText.styles'

const TitleText = ({ children, color }) => (
  <StyledTitleText color={color}>{children}</StyledTitleText>
)

TitleText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  color: PropTypes.string
}

export default TitleText
