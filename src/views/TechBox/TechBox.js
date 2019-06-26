import React from 'react'
import PropTypes from 'prop-types'

import { ContainerInline, ContainerColumn } from 'views/scaffold'

import LogoReach from 'assets/img/logo-reach.png'
import LogoReact from 'assets/img/logo-react.png'
import LogoSC from 'assets/img/logo-sc.png'

const Assets = () => (
  <>
    <img src={LogoReact} />
    <img src={LogoSC} />
    <img src={LogoReach} />
  </>
)

const TechBox = ({ variant }) =>
  variant === 'column' ? (
    <ContainerColumn>
      <Assets />
    </ContainerColumn>
  ) : (
    <ContainerInline>
      <Assets />
    </ContainerInline>
  )

TechBox.propTypes = {
  /** the display variant */
  variant: PropTypes.oneOf(['column', 'inline'])
}

TechBox.defaultProps = {
  variant: 'inline'
}

export default TechBox
