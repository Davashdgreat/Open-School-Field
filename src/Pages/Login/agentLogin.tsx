import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { agentlogin } from '../../../apiConfig';

const LoginFormAgent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await agentlogin({ email, password});

            if (response.status === 200) {
                console.log("Login successful:", response.data);

                if (response.data.agent) {
                    localStorage.setItem('agentData', JSON.stringify(response.data.agent));
                    console.log("Agent data stored:", response.data .agent);  // Confirm data is stored
    
                    // Store the access token as well if necessary
                    localStorage.setItem('accessToken', response.data.accessToken);
    
                    navigate(`/dashboard/agent`);  // Redirect to agent dashboard
                } else {
                    console.error("No agent data in response.");
                }
            } else {
                console.error("Unexpected response:", response);
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

export default LoginFormAgent;
