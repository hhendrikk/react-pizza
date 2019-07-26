import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('pages/choose-pizza-flavours'))

const Main = () => (
  <>
    <Header />
    <Content>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
          <Route path='/sabores-da-pizza' component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const Content = styled.main`
  padding: 20px;
`

export default Main
