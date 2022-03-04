import { call, put } from "redux-saga/effects";
import { setData, setSchema } from "../../ducks/chart3";
import { requestGetData, requestGetSchema } from "../requests/chart3";

export function* handleGetChart3Data(action) {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetChart3Schema(action) {
    try {
      const response = yield call(requestGetSchema);
      const { data } = response;
      yield put(setSchema(data));
    } catch (error) {
      console.log(error);
    }
  }