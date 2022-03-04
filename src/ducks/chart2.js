export const GET_CHART2_DATA = "GET_CHART2_DATA";
const SET_CHART2_DATA = "SET_CHART2_DATA";

export const GET_CHART2_SCHEMA = "GET_CHART2_SCHEMA";
const SET_CHART2_SCHEMA = "SET_CHART2_SCHEMA";

export const getData = () => ({
  type: GET_CHART2_DATA
});

export const setData = (data) => ({
  type: SET_CHART2_DATA,
  data
});

export const getSchema = () => ({
    type: GET_CHART2_SCHEMA
});

export const setSchema = (schema) => ({
    type: SET_CHART2_SCHEMA,
    schema
});

const initialState = {
  data: undefined,
  schema: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHART2_DATA:
        const { data } = action;
        console.log(data)
        return { ...state, data };
    case SET_CHART2_SCHEMA:
        const { schema } = action;
        return { ...state, schema };
    default:
        return state;
  }
};