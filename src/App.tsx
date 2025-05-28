import React from 'react';
import { Plus } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import CalendarView from './components/CalendarView';
import UpcomingSchedule from './components/UpcomingSchedule';

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Light blue background */}
      <div className="w-64 bg-blue-50">
        <Sidebar />
      </div>
      
      {/* Main content area - White background */}
      <div className="flex-1 flex flex-col bg-white">
        <Header />
        <DashboardContent />
      </div>
      
      {/* Right section - Light blue background */}
      <div className="w-[450px] bg-blue-50 p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800"> </h2>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-cyan-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">👨‍⚕️</span>
              </div>
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default App