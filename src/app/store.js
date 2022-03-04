import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";

import chart1Reducer from "../ducks/chart1";
import userReducer from "../features/userSlice"

const reducer = combineReducers({
    user: userReducer,
    chart1: chart1Reducer
  });

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store
