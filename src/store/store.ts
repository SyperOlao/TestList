import {createStore} from "redux";
import {reducer} from "./reducer/reducer";


export let store = createStore(reducer);