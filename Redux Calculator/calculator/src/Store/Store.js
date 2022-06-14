import { legacy_createStore } from "redux";

import { calreducer } from "./reducer";

let initialState={
    count:0,
}

export const Store =legacy_createStore(calreducer,initialState)