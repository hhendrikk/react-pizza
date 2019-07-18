import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))

const Main = () => (
  <>
    <Header />
    <Content>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const Content = styled.main`
  padding: 20px;
`

export default Main
