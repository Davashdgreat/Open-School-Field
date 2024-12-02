import React from 'react';
import Navbar from '../../components/Navbar';

const SchoolDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex-1 flex flex-col bg-gray-100">
        this is the school dashboard
      </div>
    </>
  );
};

export default SchoolDashboard;
