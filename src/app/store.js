import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import chart1Reducer from "../ducks/chart1";
import chart2Reducer from "../ducks/chart2";
import chart3Reducer from "../ducks/chart3";
import userReducer from "../ducks/user"

const persistConfig = {
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const reducer = combineReducers({
    user: persistedReducer,
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

const persistor = persistStore(store)

sagaMiddleware.run(watcherSaga);

export default store
export {persistor}
