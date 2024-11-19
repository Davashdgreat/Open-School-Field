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
  return api.post(endpoint, data);
};

// Login function dynamically targets the endpoint based on user type
export const login = (data: { email: string; password: string; type: string }) => {
  const endpoint = `/auth/${data.type}-login`; // Constructs endpoint based on type
  return api.post(endpoint, { email: data.email, password: data.password, /*type: data.type*/ });
};
export default api;

