import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import UserTypeSelector from './Pages/Usertypesel';
import Signup from './Pages/Login/Signup';
import UserDashboard from './Pages/Dashboard/UDash';
import AgentDashboard from './Pages/Dashboard/AgDash';
import SchoolDashboard from './Pages/Dashboard/SDash';
import Fields from './Pages/Fields';
import Agents from './Pages/Agents';
import Schools from './Pages/Schools';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginFormUser from './Pages/Login/userLogin';
import LoginFormAgent from './Pages/Login/agentLogin';
import LoginFormSchool from './Pages/Login/schoolLogin';

const queryClient = new QueryClient


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-type" element={<UserTypeSelector />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/agent" element={<AgentDashboard />} />
            <Route path="/dashboard/school" element={<SchoolDashboard />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/user-login" element={<LoginFormUser />} />
            <Route path="/agent-login" element={<LoginFormAgent />} />
            <Route path="/school-login" element={<LoginFormSchool />} />
          </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
