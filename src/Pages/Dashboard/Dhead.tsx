import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center bg-green-200 p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4 lg:mb-0">Available Football Fields</h2>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search schools"
          className="px-4 py-2 border rounded-md w-full lg:w-[300px]"
        />
        {/* Location Select */}
        <select className="px-4 py-2 border rounded-md w-full lg:w-[200px]">
          <option value="">Location</option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>
        {/* Availability Select */}
        <select className="px-4 py-2 border rounded-md w-full lg:w-[200px]">
          <option value="">Availability</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
