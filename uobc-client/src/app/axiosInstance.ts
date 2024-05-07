// axiosInstance.ts
import axios from 'axios';

// You can adjust the configuration below as necessary, e.g., base URL, headers
const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.122:5001/', // Your API base URL
    timeout: 10000, // You can set the timeout as you need
    headers: {
        'Content-Type': 'application/json',
    },
});

// If you need to handle requests or responses globally you can add interceptors
axiosInstance.interceptors.request.use(
    config => {
        // Do something before request is sent
        // For example, you could add an authentication token here
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default axiosInstance;
