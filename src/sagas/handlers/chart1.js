import { call, put } from "redux-saga/effects";
import { setData } from "../../ducks/chart1";
import { requestGetData } from "../requests/chart1";

export function* handleGetChart1Data(action) {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}