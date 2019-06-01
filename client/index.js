import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './redux/configureStore'
import './assets/scss/main.scss'
import Main from './components/main'

/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const store = configureStore({})
const target = document.getElementById('root')
target ? ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>, target
) : false
