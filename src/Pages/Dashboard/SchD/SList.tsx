import React from 'react';
import SchoolCard from '../SchD/SCard';

const SchoolList: React.FC = () => {
  const schools = [
    { name: 'Central High School', location: 'North', fieldsAvailable: 2 },
    { name: 'Westview School', location: 'South', fieldsAvailable: 1 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {schools.map((school, index) => (
        <SchoolCard key={index} {...school} />
      ))}
    </div>
  );
};

export default SchoolList;
