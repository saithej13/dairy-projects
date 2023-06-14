import axios from 'axios';

export const API_URL = 'http://192.168.1.8:8080/api';


const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    api.defaults.headers.common['Authorization'] = accessToken;
  }
  /*export const setAccessToken = (accessToken) => {
    console.log('its logging in setAccessToken of Api')
    console.log('Access Token:', accessToken);
    api.defaults.headers.common['Authorization'] = accessToken;
  };*/
  
  export const clearAccessToken = () => {
    delete api.defaults.headers.common['Authorization'];
  };
  
  export const get = (url) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
    return api.get(url);
  };
  
  export const post = (url, data) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
    return api.post(url, data);
  };
  
  // Add more methods (e.g., put, patch, delete) as needed
  
  export default api;