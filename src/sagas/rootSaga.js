import { takeLatest } from "redux-saga/effects";
import { handleGetChart1Data } from "./handlers/chart1";
import { handleGetChart1Schema } from "./handlers/chart1";
import { GET_CHART1_DATA } from "../ducks/chart1";
import { GET_CHART1_SCHEMA } from "../ducks/chart1";

export function* watcherSaga() {
  yield takeLatest(GET_CHART1_DATA, handleGetChart1Data);
  yield takeLatest(GET_CHART1_SCHEMA, handleGetChart1Schema);
}