
import mockData from '../mockData.json';

export const login = async (username, password) => {
  if (username === mockData.login.username && password === mockData.login.password) {
    return { status: 200, data: mockData.login };
  } else {
    return { response: { status: 401, data: { error: 'Invalid username or password' } } };
  }
};

export const getDepartments = async () => {
  return { status: 200, data: mockData.departments };
};

export const getEmployees = async () => {
  return { status: 200, data: mockData.employees };
};