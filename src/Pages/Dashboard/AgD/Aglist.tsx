import React from 'react';
import AgentCard from './AgCard';

const AgentList: React.FC = () => {
  const agents = [
    { name: 'Alice Johnson', contact: 'alice@example.com', region: 'North', fieldsRented: 12 },
    { name: 'Bob Smith', contact: 'bob@example.com', region: 'South', fieldsRented: 8 },
    { name: 'Carlos Lopez', contact: 'carlos@example.com', region: 'West', fieldsRented: 15 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {agents.map((agent, index) => (
        <AgentCard key={index} {...agent} />
      ))}
    </div>
  );
};

export default AgentList;
