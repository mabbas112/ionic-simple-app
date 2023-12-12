import axios from 'axios';
import { apiBaseUrl } from '../environment';

const baseURL = apiBaseUrl;

const axiosInstance = axios.create({
  baseURL,
});

function setAuthToken(token = '') {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
const HttpMethods = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  setAuthToken,
};

export default HttpMethods;