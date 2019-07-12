import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

const routes = [
  { path: '/rota1', content: 'valor da rota 1' },
  { path: '/rota2', content: 'valor da rota 2' }
]

const Main = () => (
  <Fragment>
    <h1>Main</h1>

    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        render={() => <h2>{route.content}</h2>}
      />
    ))}
  </Fragment>
)

export default Main
