import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {signupUser} from "../../../apiConfig"


const SignupForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate password and confirmPassword match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await signupUser({ name, email, phone_number: phone, type, password });
            console.log("Signup successful:", response.data);
            alert('Signup Successful, Please Login again to access your dashboard')
            // Redirect to dashboard or display success message
        } catch (error) {
            console.error("Signup error:", error);
            alert('Signup failed, Please try again')
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

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

                {/* The rest of your fields remain the same */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number *
                    </label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password *
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password *
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                    Sign Up
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-green-500 hover:underline">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignupForm;