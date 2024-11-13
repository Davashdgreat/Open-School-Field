import React from 'react';

type SchoolProps = {
  name: string;
  location: string;
  fieldsAvailable: number;
};

const SchoolCard: React.FC<SchoolProps> = ({ name, location, fieldsAvailable }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">Location: {location}</p>
      <p className="text-gray-500">Fields Available: {fieldsAvailable}</p>
      <button className="mt-4 w-full bg-green-400 text-white py-2 rounded-md">
        Rent Field
      </button>
    </div>
  );
};

export default SchoolCard;
