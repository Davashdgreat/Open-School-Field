import React from 'react';
import Header from '../Dhead';
import SchoolList from './SList';
import Navbar from '../../../components/Navbar';

const SchoolDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Header />
        <main className="p-4">
          <SchoolList />
        </main>
      </div>
    </>
  );
};

export default SchoolDashboard;
