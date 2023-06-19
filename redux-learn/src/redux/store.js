import { createStore } from "redux";
import storeReducer from "./store_reducer"

export default createStore(storeReducer,{count:0});

