import Axios from "axios";
import { API_TOKEN, API_URL } from "../constant";

const authRequestInterceptor = (config) => {
  config.headers.Accept = 'application/json';
  config.headers['Api-Token'] = API_TOKEN;
  return config;
}

export const axios = Axios.create({
  baseURL: ''
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = error.response?.data?.message || error.message;
    return Promise.reject(message);
  }
)

export const fetchContacts = (limit = 3, page = 1) => {
  return axios.get(`${API_URL}/contacts?limit=${limit}&offset=${(page - 1) * limit}`);
};

export const fetchData = (url) => {
  return axios.get(url);
}