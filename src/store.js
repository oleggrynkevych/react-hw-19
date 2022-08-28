import { combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux';
import postReducer from "./redux/reducer";


const reducer = combineReducers ({postReducer});
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;