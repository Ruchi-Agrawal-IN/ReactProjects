import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    method: "post",
  },
});
export default axiosInstance;
