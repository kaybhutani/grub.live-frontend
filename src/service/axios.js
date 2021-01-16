import axios from "axios";
const apiInstance = axios.create({
  baseURL: "https://grub-live-backend.herokuapp.com",
});

apiInstance.defaults.headers.common["Content-Type"] = "application/json";

export default apiInstance;
