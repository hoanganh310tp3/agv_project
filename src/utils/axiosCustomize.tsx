import axios from "axios";
import { store } from "../redux/store";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "content-type": "application/json",
  },
});


// Add response interceptor to handle errors
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response?.data ?? response,
  (error) => {
    if (error?.response?.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

export default instance;
