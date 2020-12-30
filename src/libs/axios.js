import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI,
});

apiInstance.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

export default apiInstance;
