import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <button className="relative ml-4 p-2 text-gray-600 transition-colors duration-200 rounded-full hover:text-blue-500 hover:bg-blue-100">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-blue-600 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header