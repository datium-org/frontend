'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPath, setSelectedPath] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchBarRef = useRef(null);

  // Mock hierarchical data structure
  const tree = {
    "Marketing": {
      "Competitive Intelligence": {},
      "Social Media": {
        "Facebook": {},
        "Twitter": {}
      },
      "Advertising": {}
    },
    "Finance": {
      "Budgeting": {},
      "Forecasting": {}
    },
    "Operations": {
      "Supply Chain": {},
      "Logistics": {}
    }
  };

  const getOptionsFromPath = (path) => {
    let current = tree;
    for (const item of path) {
      if (current[item]) {
        current = current[item];
      } else {
        return [];
      }
    }
    return Object.keys(current);
  };

  const currentOptions = getOptionsFromPath(selectedPath);

  const filteredOptions = currentOptions.filter(option => 
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelectedPath([...selectedPath, option]);
    setSearchQuery('');
    setShowDropdown(true);
  };

  const handleRemoveOption = (index) => {
    setSelectedPath(selectedPath.slice(0, index));
    setShowDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 space-x-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Main Menu
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
          </nav>
          
          <div className="flex-1 max-w-3xl relative" ref={searchBarRef}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <div className={`flex flex-wrap items-center w-full sm:w-auto py-1 space-x-2 space-y-1 sm:space-y-0 ${selectedPath.length > 0 ? 'pl-2' : ''}`}>
                {selectedPath.map((option, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-lg text-sm bg-gray-200 text-gray-700 hover:bg-gray-300"
                    onClick={() => handleRemoveOption(index)}
                  >
                    {option}
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                ))}
              </div>
              <div className="relative flex-1 w-full sm:w-auto">
                <input
                  type="text"
                  className="w-full pr-4 pl-4 py-2 rounded-xl focus:outline-none"
                  placeholder="Search or ask anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            {showDropdown && filteredOptions.length > 0 && (
              <ul className="absolute z-10 mt-1 w-full bg-white shadow-sm max-h-60 rounded-lg py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                    onClick={() => handleOptionClick(option)}
                  >
                    <span className="block font-medium truncate">{option}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="flex items-center space-x-2 justify-end sm:justify-start">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              New Data
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;