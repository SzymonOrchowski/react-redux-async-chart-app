import { call, put } from "redux-saga/effects";
import { setData, setSchema } from "../../ducks/chart1";
import { requestGetData, requestGetSchema } from "../requests/chart1";

export function* handleGetChart1Data(action) {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetChart1Schema(action) {
    try {
      const response = yield call(requestGetSchema);
      const { data } = response;
      yield put(setSchema(data));
    } catch (error) {
      console.log(error);
    }
  }