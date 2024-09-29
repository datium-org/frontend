import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardComponent from '../components/DashboardComponent';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <DashboardComponent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;