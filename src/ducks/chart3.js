export const GET_CHART3_DATA = "GET_CHART3_DATA";
const SET_CHART3_DATA = "SET_CHART3_DATA";

export const GET_CHART3_SCHEMA = "GET_CHART3_SCHEMA";
const SET_CHART3_SCHEMA = "SET_CHART3_SCHEMA";

export const getData = () => ({
  type: GET_CHART3_DATA
});

export const setData = (data) => ({
  type: SET_CHART3_DATA,
  data
});

export const getSchema = () => ({
    type: GET_CHART3_SCHEMA
});

export const setSchema = (schema) => ({
    type: SET_CHART3_SCHEMA,
    schema
});

const initialState = {
  data: undefined,
  schema: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHART3_DATA:
        const { data } = action;
        return { ...state, data };
    case SET_CHART3_SCHEMA:
        const { schema } = action;
        return { ...state, schema };
    default:
        return state;
  }
};