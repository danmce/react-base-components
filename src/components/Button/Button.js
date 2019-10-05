import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyles from './Button.styles'

const Button = props => <ButtonStyles {...props}>{props.children}</ButtonStyles>

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'warning'
  ]),
  title: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  stretched: PropTypes.bool,
  children: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  size: 'm',
  stretched: true,
  type: 'primary'
}

export { Button as default }
