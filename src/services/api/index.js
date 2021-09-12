/* eslint-disable no-console */
import axios from 'axios';

// Fetch topics from cms
// eslint-disable-next-line import/prefer-default-export
export const getPages = async ({ market, environment }) => {
  const url = process.env.REACT_APP_CMS_DATA;
  const response = await axios.get(url, {
    params: { market, environment },
  });
  return response;
};

axios.interceptors.request.use((request) => {
  console.log('%c request', 'background: black; color: white;');
  console.log(request);
  return request;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  console.log('%c response', 'background: black; color: white;');
  console.log(response);
  return response;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});
