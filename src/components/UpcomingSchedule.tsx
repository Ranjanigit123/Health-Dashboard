//C:\HD\project\src\components\UpcomingSchedule.tsx
import React from 'react';
import { upcomingSchedule } from '../data/appointments';
import AppointmentCard from './AppointmentCard';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      
      {upcomingSchedule.map((dailySchedule) => (
        <div key={dailySchedule.day} className="mb-4">
          <h3 className="text-sm text-gray-500 mb-3">On {dailySchedule.day}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {dailySchedule.appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;