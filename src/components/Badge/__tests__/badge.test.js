import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Badge from '../Badge'
import UxPinWrapper from '../../../wrappers/UXPinWrapper'

test('renders error Badge correctly', () => {
  const button = (
    <UxPinWrapper>
      <Badge text='Test' />
    </UxPinWrapper>
  )

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount')
})
