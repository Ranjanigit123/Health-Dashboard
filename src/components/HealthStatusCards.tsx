import React from 'react';
import { healthDetails } from '../data/healthStatus';
import { Settings as Lungs, Bluetooth as Tooth, Bone } from 'lucide-react';
import { FaLungs } from 'react-icons/fa';
const HealthStatusCards: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'lungs':
        return <FaLungs className="w-6 h-6 text-red-500" />;
      case 'teeth':
        return <span className="w-6 h-6 text-yellow-500">🦷</span>;
      case 'bone':
        return <span className="w-6 h-6 text-red-500">🦴</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 flex-1">
      <div className="flex justify-end">
        <button className="text-blue-600 text-sm font-medium flex items-center">
          This week
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {healthDetails.map((detail) => (
        <div key={detail.id} className="bg-blue-50 p-4 rounded-xl shadow-sm min-h-[120px] flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <div className="mr-3">
              {getIcon(detail.id)}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{detail.name}</h3>
              <p className="text-xs text-gray-500">{detail.date}</p>
            </div>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full"
              style={{ 
                width: `${detail.progress}%`,
                backgroundColor: detail.color
              }}
            ></div>
          </div>
        </div>
      ))}
      
      <div className="flex justify-end">
        <button className="text-blue-600 text-sm font-medium flex items-center">
          Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HealthStatusCards