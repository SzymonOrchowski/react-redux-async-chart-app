export const GET_CHART1_DATA = "GET_CHART1_DATA";
const SET_CHART1_DATA = "SET_CHART1_DATA";

export const GET_CHART1_SCHEMA = "GET_CHART1_SCHEMA";
const SET_CHART1_SCHEMA = "SET_CHART1_SCHEMA";

export const getData = () => ({
  type: GET_CHART1_DATA
});

export const setData = (data) => ({
  type: SET_CHART1_DATA,
  data
});

export const getSchema = () => ({
    type: GET_CHART1_SCHEMA
});

export const setSchema = (schema) => ({
    type: SET_CHART1_SCHEMA,
    schema
});

const initialState = {
  data: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHART1_DATA:
        const { data } = action;
        return { ...state, data };
    case SET_CHART1_SCHEMA:
        const { schema } = action;
        return { ...state, schema };
    default:
        return state;
  }
};