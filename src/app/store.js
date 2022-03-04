import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";

import chart1Reducer from "../ducks/chart1";
import chart2Reducer from "../ducks/chart2";
import chart3Reducer from "../ducks/chart3";
import userReducer from "../features/userSlice"

const reducer = combineReducers({
    user: userReducer,
    chart1: chart1Reducer,
    chart2: chart2Reducer,
    chart3: chart3Reducer,
  });

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer,
    middleware: [...middleware]
})

sagaMiddleware.run(watcherSaga);

export default store
