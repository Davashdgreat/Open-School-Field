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
import UserLogin from './Pages/Login/sublogin/Ulogin';
import AgentLogin from './Pages/Login/sublogin/Alogin';
import SchoolLogin from './Pages/Login/sublogin/Slogin';


const App: React.FC = () => {
  return (
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
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/school-login" element={<SchoolLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
