import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore() {
  return applyMiddleware(thunk, multi)(createStore)(
    rootReducer,
    devTools
  )

}