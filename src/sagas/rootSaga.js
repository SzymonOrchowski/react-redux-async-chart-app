import { takeLatest } from "redux-saga/effects";
import { handleGetChart1Data } from "./handlers/chart1";
import { GET_DATA } from "../ducks/chart1";

export function* watcherSaga() {
  yield takeLatest(GET_DATA, handleGetChart1Data);
}