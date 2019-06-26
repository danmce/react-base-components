import React from 'react'
import { navigate } from '@reach/router'

import { Page, TitleMain } from 'views/scaffold'
import TechBox from 'views/TechBox/TechBox'
import Button from 'views/Buttons/Button'

const Dashboard = () => (
  <Page>
    <TechBox />
    <TitleMain>Look....a Dashboard View</TitleMain>
    <Button onClick={() => navigate('/')}>Go back</Button>
  </Page>
)

export default Dashboard
