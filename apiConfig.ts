import axios from 'axios';

const api = axios.create({
    baseURL: 'https://open-field.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Signup function dynamically targets the endpoint based on user type
export const signupUser = (data: { name: string; email: string; phone_number: string; type: string; password: string }) => {
  const endpoint = `/auth/create-${data.type}`; // Constructs endpoint based on type
  const fullUrl = `${api.defaults.baseURL}${endpoint}`; // Combine baseURL and endpoint to form the full URL
    console.log(`Login request URL: ${fullUrl}`); // Log the full URL to the console
  return api.post(endpoint, data);
};

// Login function dynamically targets the endpoint based on user type
export const login = (data: { email: string; password: string; type: string }) => {

  const endpoint = `/auth/${data.type}-login`; // Constructs endpoint based on type
  const fullUrl = `${api.defaults.baseURL}${endpoint}`; // Combine baseURL and endpoint to form the full URL

    console.log(`Login request URL: ${fullUrl}`); // Log the full URL to the console
    console.log(`Login request body:`, { email: data.email, password: data.password }); // Log the request body

  return api.post(endpoint, { email: data.email, password: data.password});
};

api.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default api;

