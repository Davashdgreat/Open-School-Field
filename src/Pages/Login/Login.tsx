import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../apiConfig';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate(); // Hook for navigation


    // Check if the user is already logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedType = localStorage.getItem('type');
        if (token && storedType) {
            // Redirect based on the stored profile type
            navigate(`/dashboard/${storedType}`);
        }
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await login({ email, password, type });
            const token = response.data.token;

            if (token){
                localStorage.setItem('token', token);
                localStorage.setItem('type', type);

                console.log("Login successful:", response.data);
                navigate('/dashboard/user')
            // Redirect to dashboard or display success message
            }

        } catch (error) {
            console.error("Login error:", error);
        }

       
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Profile Type *
                    </label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    >
                        <option value="user">User</option>
                        <option value="agent">Agent</option>
                        <option value="school">School</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-400"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-400 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                    Login
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;