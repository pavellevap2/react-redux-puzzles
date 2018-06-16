import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { AppContainer as App } from './containers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
