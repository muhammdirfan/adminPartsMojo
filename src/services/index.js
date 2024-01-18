import axios from "axios";

const instance = axios.create({
  baseURL: "https://apiparts.techpri.me",
  timeout: 5000000,
});

export const get = async (endpoint, params) => {
  return await instance.get(endpoint, params);
};

export const post = async (endpoint, params) => {
  return await instance.post(endpoint, params);
};

export default instance;
