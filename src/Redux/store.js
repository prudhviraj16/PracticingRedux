import {combineReducers, createStore,applyMiddleware} from 'redux'
import countReducer from './Count/reducer';
import toggleReducer from './Toggle/reducer';
import newsReducer from './ReduxThunk/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'

import reduxThunk from 'redux-thunk'

// const rootReducer = combineReducers()
const store = createStore(newsReducer,
    composeWithDevTools(applyMiddleware(reduxThunk,createLogger())))

export default store