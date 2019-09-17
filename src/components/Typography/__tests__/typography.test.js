import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import { BodyText, HeadingText, TitleText } from '../'
import UxPinWrapper from '../../../wrappers/UXPinWrapper'

test('renders Typography correctly', () => {
  const bodyText = (
    <UxPinWrapper>
      <TitleText tint='#f00' bold align='center'>
        Title Text
      </TitleText>
      <HeadingText tint='#f00' bold align='center'>
        Heading Text
      </HeadingText>
      <BodyText tint='#0f0' align='right'>
        Body Text
      </BodyText>
    </UxPinWrapper>
  )

  expect(toJson(enzyme.mount(bodyText))).toMatchSnapshot('enzyme.mount')
})
