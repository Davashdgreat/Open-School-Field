import axios from 'axios';

const api = axios.create({
    baseURL: 'https://open-field.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Signup function dynamically targets the endpoint based on user type
export const signupUser = (data: { name: string; email: string; phone_number: string; type: string; password: string }) => {
  const endpoint = `/auth/create-${data.type}`;
  const fullUrl = `${api.defaults.baseURL}${endpoint}`;
    console.log(`Login request URL: ${fullUrl}`);
  return api.post(endpoint, data);
};

// Login function dynamically targets the endpoint based on user type
export const userlogin = (data: { email: string; password: string;}) => {

  const endpoint = `/auth/user-login`;
  const fullUrl = `${api.defaults.baseURL}${endpoint}`;

    console.log(`Login request URL: ${fullUrl}`);
    console.log(`Login request body:`, { email: data.email, password: data.password });

  return api.post(endpoint, { email: data.email, password: data.password});
};

export const agentlogin = (data: { email: string; password: string;}) => {

  const endpoint = `/auth/agent-login`;
  const fullUrl = `${api.defaults.baseURL}${endpoint}`;

    console.log(`Login request URL: ${fullUrl}`);
    console.log(`Login request body:`, { email: data.email, password: data.password });

  return api.post(endpoint, { email: data.email, password: data.password});
};

export const schoollogin = (data: { email: string; password: string;}) => {

  const endpoint = `/auth/school-login`;
  const fullUrl = `${api.defaults.baseURL}${endpoint}`;

    console.log(`Login request URL: ${fullUrl}`);
    console.log(`Login request body:`, { email: data.email, password: data.password });

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

