import React from 'react';
import { Link } from 'react-router-dom';

const UserTypeSelector: React.FC = () => (

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

    <h1 className="text-3xl font-bold mb-6">Please Select Your Profile</h1>

    <p className="text-lg">

      Are you a 

      <Link to="/user-login" className="text-green-500 hover:underline mx-1">User</Link>,

      <Link to="/agent-login" className="text-green-500 hover:underline mx-1">Agent</Link>,

      or 

      <Link to="/school-login" className="text-green-500 hover:underline mx-1">School</Link>?

    </p>

    <p className="mt-4 text-gray-700">

      Login or Sign up as User, Agent, or School.

    </p>

  </div>
);

export default UserTypeSelector;
