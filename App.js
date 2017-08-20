import React from 'react'
import Main from './pages/main'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  <Provider store={store}>
    <Main />
  </Provider>
}
