import axios from "axios";

export function requestGetData() {
  return axios.request({
    method: "get",
    url: "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
  });
}

export function requestGetSchema() {
    return axios.request({
      method: "get",
      url: "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
    });
  }