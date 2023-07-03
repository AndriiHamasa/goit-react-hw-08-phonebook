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
  console.log('response from signUp', response);
  return response;
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  if('token' in data) setToken(body.token)
  console.log('response from login', data);
  return data;
};

export const getProfile = async () => {
  const { data } = await instance('/users/current');
  console.log('response from getProfile =>> ', data);
  return data;
};

export const logOut = async () => {
  console.log('response before logOut');
  const { data } = await instance.post('/users/logout');
  console.log('response from logOut', data);
  return data;
};