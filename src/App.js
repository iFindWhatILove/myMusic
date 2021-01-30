import React from 'react';
import { Provider } from 'react-redux'

import Main from './pages/main/index'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
       <Main></Main>
    </Provider>
  )
}

export default App;
