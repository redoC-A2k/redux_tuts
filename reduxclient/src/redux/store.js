import {createStore } from "redux"
import masterReducer from "./reducers/index"

const store = createStore(
        masterReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;