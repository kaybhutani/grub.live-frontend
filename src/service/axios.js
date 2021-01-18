import axios from "axios";
import {apiBaseUrl} from "../config.json";
const apiInstance = axios.create({
  baseURL: apiBaseUrl
});

apiInstance.defaults.headers.common["Content-Type"] = "application/json";

export default apiInstance;
