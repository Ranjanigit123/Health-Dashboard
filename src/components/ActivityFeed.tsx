import React from 'react';
import { activityData } from '../data/appointments';

const ActivityFeed: React.FC = () => {
  const maxBarHeight = 80;
  
  const getBarColors = (index: number) => {
    const colors = ['#36CFCF', '#3F8CFF', '#6666CC'];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-blue-50 rounded-xl shadow-sm p-5 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
        <p className="text-sm text-gray-500">3 appointment on this week</p>
      </div>
      
      <div className="flex items-end justify-between h-32 mb-4">
        {activityData.map((day) => (
          <div key={day.day} className="flex items-end space-x-1">
            {day.appointments.map((value, index) => {
              const height = (value / 15) * maxBarHeight;
              return (
                <div 
                  key={`${day.day}-${index}`} 
                  className="w-3 rounded-t-sm transition-all duration-300 hover:opacity-80"
                  style={{ 
                    height: `${height}px`,
                    backgroundColor: getBarColors(index),
                  }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-4 text-center">
        {activityData.map((day) => (
          <div key={day.day} className="text-xs text-gray-500">
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed