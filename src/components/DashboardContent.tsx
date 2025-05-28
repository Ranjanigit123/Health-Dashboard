import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';

const DashboardContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="space-y-6">
        <div className="flex gap-6">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardContent;