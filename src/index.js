import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMPatched from '@hot-loader/react-dom'
import ReactHotLoader from 'react-hot-loader'
import * as serviceWorker from './serviceWorker'

import Root from './root'
import ErrorBoundary from './error'

let render = ReactDOM.render

if (process.env.NODE_ENV === 'development') {
  ReactHotLoader.patch(React, ReactDOMPatched)
  render = ReactDOMPatched.render
}

render(
  <ErrorBoundary>
    {(hasError) => (
      <Root hasError={hasError} />
    )}
  </ErrorBoundary>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
