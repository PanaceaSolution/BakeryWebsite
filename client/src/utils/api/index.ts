//axios setup

import axios from 'axios'
import Cookies from 'js-cookie'

const PUBLIC_URL = process.env.NEXT_PUBLIC_API

const getToken = () => {
    const token = Cookies.get("access_token");
    console.log("token", token)
    return token
}
const apiInstance = axios.create({

    baseURL: PUBLIC_URL,

})

// Add a request interceptor
apiInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config;
}, function (error) {
    return Promise.reject(error);
});



export default apiInstance