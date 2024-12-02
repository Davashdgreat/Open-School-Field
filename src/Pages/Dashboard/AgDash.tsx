import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AgentData {
  name: string;
  email: string;
  phone_number: string;
  type: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  fields: ["Field 1"];
}

const AgentDashboard: React.FC = () => {
  const [agentData] = useState<AgentData | null>(null);
  const navigate = useNavigate(); // Hook for navigation
  

  useEffect(() => {
    const storedAgentData = localStorage.getItem('agentData');
        console.log('Stored agent data:', storedAgentData);  // This should log the stored agent data

        if (storedAgentData) {
            const parsedAgentData = JSON.parse(storedAgentData);
            console.log("Parsed agent data:", parsedAgentData);
        } else {
            console.log("No agent data found in localStorage.");
        }

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Remove token
    localStorage.removeItem('agentData'); // Remove user data
    navigate('/login'); // Redirect to login page
  };

  if (!agentData) {
    return (<button
    onClick={handleLogout}
    className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200"
  >
    Logout
  </button>);
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {agentData.name}!</h2>
      <p><strong>Email:</strong> {agentData.email}</p>
      <p><strong>Phone Number:</strong> {agentData.phone_number}</p>
      <p><strong>Type:</strong> {agentData.type}</p>
      
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default AgentDashboard;
