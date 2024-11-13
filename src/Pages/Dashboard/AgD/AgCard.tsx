import React from 'react';

type AgentProps = {
  name: string;
  contact: string;
  region: string;
  fieldsRented: number;
};

const AgentCard: React.FC<AgentProps> = ({ name, contact, region, fieldsRented }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">Contact: {contact}</p>
      <p className="text-gray-500">Region: {region}</p>
      <p className="text-gray-500">Fields Rented: {fieldsRented}</p>
      <button className="mt-4 w-full bg-green-400 text-white py-2 rounded-md">
        View Details
      </button>
    </div>
  );
};

export default AgentCard;
