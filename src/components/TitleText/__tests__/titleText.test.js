import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import TitleText from '../TitleText'
import UxPinWrapper from '../../../wrappers/UXPinWrapper'

test('renders Typography correctly', () => {
  const bodyText = (
    <UxPinWrapper>
      <TitleText>Title Text</TitleText>
    </UxPinWrapper>
  )

  expect(toJson(enzyme.mount(bodyText))).toMatchSnapshot('enzyme.mount')
})
