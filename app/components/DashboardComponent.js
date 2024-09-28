import React from 'react';
import Link from 'next/link';

const DashboardComponent = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <header>
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">Main Menu</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Dashboard</span>
        </nav>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md text-sm px-2 py-1">
              <option>Marketing</option>
            </select>
            <select className="border border-gray-300 rounded-md text-sm px-2 py-1">
              <option>Brand</option>
            </select>
          </div>
        </div>
      </header>

      <section className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Data Hierarchy</h2>
          <Link href="/data-hierarchy" className="text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Marketing</span>
          </div>
          <div className="flex items-center space-x-2 ml-6">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Competitive Intelligence</span>
          </div>
          <div className="flex items-center space-x-2 ml-6">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Advertising</span>
          </div>
          <div className="flex items-center space-x-2 ml-6">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Brand</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Finance</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Operations</span>
          </div>
          <div className="flex items-center space-x-2 ml-6">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Competitive Intelligence</span>
          </div>
          <div className="flex items-center space-x-2 ml-6">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Advertising</span>
          </div>
          <div className="flex items-center space-x-2 ml-6">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm text-gray-600">Brand</span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Flows & Processes</h2>
          <Link href="/flows" className="text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>
        <p className="text-sm text-gray-500">You have no actively tracked flows/processes.</p>
        <Link href="/create-flow" className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800">
          Create one
        </Link>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">About My Data</h2>
          <Link href="/my-data" className="text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Tabular', 'Natural Language', 'Semi-Visual', 'Audio-Visual'].map((type) => (
            <div key={type} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{type}</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: '75%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500">75% Full</p>
              <p className="text-xs text-gray-500">Upgrade Now</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">About My Data</h2>
          <Link href="/my-data" className="text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Tabular', 'Natural Language', 'Semi-Visual', 'Audio-Visual'].map((type) => (
            <div key={type} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{type}</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: '75%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500">75% Full</p>
              <p className="text-xs text-gray-500">Upgrade Now</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardComponent;