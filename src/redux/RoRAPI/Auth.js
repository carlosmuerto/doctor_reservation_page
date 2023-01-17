/* eslint-disable no-promise-executor-return */
import axios from 'axios';
import { deleteLocalStorage } from '../localStorage/storage';

const BASEURL = 'http://localhost:3000';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const login = async (email, password) => {
  const res = await axios.post(`${BASEURL}/login`, {
    user: {
      email,
      password,
    },
  }, options);

  const user = res.data;
  user.token = res.headers.authorization;

  return user;
};

const signup = async (name, email, password) => {
  const res = await axios.post(`${BASEURL}/signup`, {
    user: {
      name,
      email,
      password,
    },
  }, options);

  const user = res.data;
  user.token = res.headers.authorization;

  return user;
};

const logout = async (authorization) => {
  const logoutOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const res = await axios.delete(`${BASEURL}/logout`, logoutOptions);

  if (res.status === 200) {
    deleteLocalStorage();
  }

  return res.data;
};

const AuthAPI = {
  login,
  logout,
  signup,
};

export default AuthAPI;
