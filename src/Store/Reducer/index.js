import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import news from "./News";

const rootReducer = combineReducers({ news });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
