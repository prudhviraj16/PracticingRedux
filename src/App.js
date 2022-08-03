import React from 'react'
import store from './Redux/store'
import { Provider } from 'react-redux'
// import Count from './Count'
// import Hide from './Hide'
import Api from './Api'
const App = () => {
  return (
      <Provider store={store}>
          {/* <Count/> */}
          {/* <Hide/> */}
          <Api/>
      </Provider>
    )
}

export default App