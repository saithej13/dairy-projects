import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userAction } from '../Actions/userAction';

export const API_URL = 'http://192.168.1.9:8080/api';


const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // const accessToken = localStorage.getItem('accessToken');
  // if (accessToken) {
  //   api.defaults.headers.common['Authorization'] = accessToken;
  // }
  /*export const setAccessToken = (accessToken) => {
    console.log('its logging in setAccessToken of Api')
    console.log('Access Token:', accessToken);
    api.defaults.headers.common['Authorization'] = accessToken;
  };*/

  api.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Create a dispatch function outside the interceptor
// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error
      // Clear token, dispatch logout action, redirect, and show error message to the user
      localStorage.removeItem('accessToken');
      window.location.href = '/'; // Redirect to login page
      alert('Session Expired , Please Login');
    }
    else if(error.response){
      alert(error)
    }
    return Promise.reject(error);
  }
);
  
  
  export const clearAccessToken = () => {
    delete api.defaults.headers.common['Authorization'];
  };
  
  export const get = (url) => {
    return api.get(url);
  };
  
  export const post = (url, data) => {
    // const token = localStorage.getItem('accessToken');
    // if (token) {
    //   api.defaults.headers.common['Authorization'] = token;
    // } else {
    //   delete api.defaults.headers.common['Authorization'];
    // }
    return api.post(url, data);
  };
  
  // Add more methods (e.g., put, patch, delete) as needed
  
  export default api;