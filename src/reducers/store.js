
import Reducers  from "./index";
import thunk from 'redux-thunk'
import { legacy_createStore,applyMiddleware} from "redux";

const store = legacy_createStore (Reducers, applyMiddleware(thunk));

export default store
