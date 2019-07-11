import React from 'react'
import PropTypes from 'prop-types'
import BadgeStyles from './Badge.styles'

const Badge = ({ text }) => {
  return <BadgeStyles>{text}</BadgeStyles>
}

Badge.propTypes = {
  text: PropTypes.string
}

export default Badge
