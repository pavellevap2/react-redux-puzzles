import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore } from 'redux'
import puzzlesBoard from './reducers/puzzlesBoard'

const store = createStore(puzzlesBoard)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
