import { takeLatest } from "redux-saga/effects";
import { handleGetChart1Data } from "./handlers/chart1";
import { handleGetChart1Schema } from "./handlers/chart1";
import { handleGetChart2Data } from "./handlers/chart2";
import { handleGetChart2Schema } from "./handlers/chart2";
import { handleGetChart3Data } from "./handlers/chart3";
import { handleGetChart3Schema } from "./handlers/chart3";
import { GET_CHART1_DATA } from "../ducks/chart1";
import { GET_CHART1_SCHEMA } from "../ducks/chart1";
import { GET_CHART2_DATA } from "../ducks/chart2";
import { GET_CHART2_SCHEMA } from "../ducks/chart2";
import { GET_CHART3_DATA } from "../ducks/chart3";
import { GET_CHART3_SCHEMA } from "../ducks/chart3";

export function* watcherSaga() {
  yield takeLatest(GET_CHART1_DATA, handleGetChart1Data);
  yield takeLatest(GET_CHART1_SCHEMA, handleGetChart1Schema);
  yield takeLatest(GET_CHART2_DATA, handleGetChart2Data);
  yield takeLatest(GET_CHART2_SCHEMA, handleGetChart2Schema);
  yield takeLatest(GET_CHART3_DATA, handleGetChart3Data);
  yield takeLatest(GET_CHART3_SCHEMA, handleGetChart3Schema);
}