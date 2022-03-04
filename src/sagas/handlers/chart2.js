import { call, put } from "redux-saga/effects";
import { setData, setSchema } from "../../ducks/chart2";
import { requestGetData, requestGetSchema } from "../requests/chart2";

export const handleGetChart2Data = function* handleGetChart2Data(action) {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export const handleGetChart2Schema = function* handleGetChart2Schema(action) {
    try {
      const response = yield call(requestGetSchema);
      const { data } = response;
      yield put(setSchema(data));
    } catch (error) {
      console.log(error);
    }
  }