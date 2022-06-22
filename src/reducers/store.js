import { legacy_createStore, applyMiddleware } from 'redux'
import { Reducers } from "./index";
import thunk from 'redux-thunk'

const store = legacy_createStore (Reducers, applyMiddleware(thunk));

export default store