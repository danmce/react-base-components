import React from 'react'
import { navigate } from '@reach/router'

import { Page, TitleMain } from 'views/scaffold'
import TechBox from 'views/TechBox/TechBox'
import Button from 'views/Buttons/Button'

const Home = () => (
  <Page>
    <TechBox />
    <TitleMain>Edit `routes/Home` to get started</TitleMain>
    <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
  </Page>
)

export default Home
