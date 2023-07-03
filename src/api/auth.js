import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const delToken = () => {
  delete instance.defaults.headers.common['Authorization']
}


export const signUp = async body => {
  const response = await instance.post('/users/signup', body);
  return response;
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  if('token' in data) setToken(body.token)
  return data;
};

export const getProfile = async () => {
  const { data } = await instance('/users/current');
  return data;
};

export const logOut = async () => {
  const { data } = await instance.post('/users/logout');
  return data;
};