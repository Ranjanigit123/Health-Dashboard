import React from 'react';
import { Appointment } from '../data/appointments';
import { ClipboardCheck, Eye, Heart, Brain, Bluetooth as Tooth, Dumbbell } from 'lucide-react';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.icon) {
      case 'clipboard-check':
        return <span className="w-5 h-5 text-white">💉</span>;
      case 'eye':
        return <span className="w-5 h-5 text-white">👁</span> ;
      case 'heart':
        return <span className="w-5 h-5 text-white">❤</span>;
      case 'brain':
        return <span className="w-5 h-5 text-white">👨‍⚕️</span>;
      case 'tooth':
        return <span className="w-5 h-5 text-white">🦷</span> ;
      case 'dumbbell':
        return <span className="w-5 h-5 text-white">💪</span> ;
      default:
        return null;
    }
  };

  return (
    <div className="bg-blue-600 p-4 rounded-xl text-white">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{appointment.title}</h4>
          <p className="text-sm text-blue-200 mt-1">{appointment.time}</p>
        </div>
        <div>
          {getIcon()}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard