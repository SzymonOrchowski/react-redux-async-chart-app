import axios from "axios";

export function requestGetData() {
  return axios.request({
    method: "get",
    url: "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/ibm-data-data.json"
  });
}

export function requestGetSchema() {
    return axios.request({
      method: "get",
      url: "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/ibm-data-schema.json"
    });
  }