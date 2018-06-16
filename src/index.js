import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore } from 'redux'
import store from './configureStore'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
