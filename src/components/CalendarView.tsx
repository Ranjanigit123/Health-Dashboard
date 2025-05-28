//C:\HD\project\src\components\CalendarView.tsx
import React from 'react';
import { calendarAppointments } from '../data/appointments';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTooth, FaDumbbell } from 'react-icons/fa';

const CalendarView: React.FC = () => {
   
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  const timeSlots = [
    ['10:00', '08:00', '12:00', '10:00', '_', '12:00', '09:00'],
    ['11:00', '09:00', '—', '11:00', '14:00', '14:00', '10:00'],
    ['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00'],
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">October 2021</h2>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded-lg text-gray-500 hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1 rounded-lg text-gray-500 hover:bg-gray-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, i) => (
          <div
            key={i}
            className={`text-center text-sm text-gray-500 ${i === 1 ? 'bg-blue-50 rounded-md py-1' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4 text-center text-lg font-medium mb-4 mt-1">
        {dates.map((date, i) => (
          <div key={i} className={`${i === 1 ? 'text-blue-600 bg-blue-50 rounded-md py-1' : 'text-gray-800'}`}>
            {date}
          </div>
        ))}
      </div>

      {/* Time Slots */}
      {timeSlots.map((row, rowIdx) => (
  <div
    key={rowIdx}
    className={`grid grid-cols-7 mb-2 text-center text-xs ${
      rowIdx === 0 ? 'gap-4' : 'gap-4'
    }`}
  >
    {row.map((time, colIdx) => {
      const isTuesday = colIdx === 1;
      const isThursdayLightBlue = rowIdx === 1 && colIdx === 3 && time === '11:00';
      const isDarkBlue = isTuesday && time === '09:00';

      const isMerged = rowIdx === 0 && colIdx === 5;

      if (isMerged) {
        return (
          <div
            key={`merged-${rowIdx}`}
            className="col-span-2 flex justify-center items-center py-1 rounded bg-blue-100 text-blue-800 font-medium"
          >
            <div className="flex space-x-9 w-full justify-center">
              <span>12:00</span>
              <span>09:00</span>
            </div>
          </div>
        );
      }

      // Skip Sunday cell if merged
      if (rowIdx === 0 && colIdx === 6 && row[6] === '09:00') {
        return null;
      }

      const cellClasses = [
        'py-1 px-2 rounded',
        isTuesday ? 'bg-blue-50 text-blue-800 font-medium' : '',
        isThursdayLightBlue ? 'bg-blue-50 text-blue-800 font-medium' : '',
        isDarkBlue ? 'bg-blue-600 text-white font-semibold' : '',
        !isTuesday && !isThursdayLightBlue &&  !isDarkBlue ? 'text-gray-500' : '',
      ].join(' ');

      return (
        <div key={`${rowIdx}-${colIdx}`} className={cellClasses}>
          {time}
        </div>
      );
    })}
  </div>
))}


      {/* Appointments */}
      <div className="mt-6 flex gap-4">
        {calendarAppointments.map((apt) => (
          <div key={apt.id} className={`px-4 py-3 rounded-xl w-1/2 ${
        apt.id === '2'
          ? 'bg-blue-100 text-blue-800'
          : 'bg-blue-700 text-blue-100'
      }`}
      >
            <div className="flex justify-between items-center font-medium">
              <h3>{apt.title}</h3>
              {apt.id === '1' && <span className="w-6 h-6">🦷</span> }
              {apt.id === '2' && <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm">💪</span>}
            </div>
            <p className="text-xs mt-1">{apt.time}</p>
            <p className="text-sm mt-2">{apt.doctor}</p>
          </div>
        ))}
      </div>
    </div>
     
  );
};
 
export default CalendarView;
