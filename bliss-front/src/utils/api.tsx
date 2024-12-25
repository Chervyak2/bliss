import axios from "axios";

// Create Axios instance with default settings
const api = axios.create({
  baseURL: "http://localhost:5167/api", // Your API base URL
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         // Handle unauthorized: logout or refresh token
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//       }
//       return Promise.reject(error);
//     }
//   );

export default api;
