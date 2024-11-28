import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import UserTypeSelector from './Pages/Usertypesel';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import UserDashboard from './Pages/Dashboard/UserD/UDash';
import AgentDashboard from './Pages/Dashboard/AgD/AgDash';
import SchoolDashboard from './Pages/Dashboard/SchD/SDash';
import Fields from './Pages/Fields';
import Agents from './Pages/Agents';
import Schools from './Pages/Schools';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-type" element={<UserTypeSelector />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/agent" element={<AgentDashboard />} />
            <Route path="/dashboard/school" element={<SchoolDashboard />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/user-login" element={<Login />} />
            <Route path="/agent-login" element={<Login />} />
            <Route path="/school-login" element={<Login />} />
          </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
