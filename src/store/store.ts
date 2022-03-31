import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer/reducer";


export let store = createStore(combineReducers({reducer}));