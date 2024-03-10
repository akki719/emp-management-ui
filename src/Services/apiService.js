
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const login = (username, password) => {
  return axios.post(`${BASE_URL}/login`, { username, password });
};

export const getDepartments = () => {
  return axios.get(`${BASE_URL}/departments`);
};

export const getEmployees = () => {
  return axios.get(`${BASE_URL}/employees`);
};