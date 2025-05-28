import React from 'react';
import { healthIndicators } from '../data/healthStatus';
import { Search } from 'lucide-react';

const AnatomySection: React.FC = () => {
  return (
    <div className="relative bg-blue-50 rounded-xl p-4 shadow-sm flex-1 h-[28rem]">
      <div className="absolute top-4 right-4">
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-full flex items-center justify-center relative">
        {/* Anatomy Image */}
        <div className="relative h-[90%] flex items-center justify-center">
          <img 
            src="https://media.istockphoto.com/id/1366264420/photo/3d-illustration-of-human-anatomy-of-an-ectomorph-body.jpg?s=612x612&w=0&k=20&c=55dZ66XBiZd2lXGIa4sq6CvNMtFZz1EHSdP33WvkqXM=" 
            alt="Human Anatomy" 
            className="h-full object-contain"
          />
          
          {/* Health Indicators */}
          {healthIndicators.map((indicator) => (
            <div 
              key={indicator.id}
              className={`absolute cursor-pointer transition-transform hover:scale-105`}
              style={{ 
                top: indicator.position.top, 
                left: indicator.position.left,
              }}
            >
              {indicator.id === 'heart' && (
            <div className="relative -translate-y-4"> {/* Move the entire label/line group up */}
            {/* Line from label to dot */}
             <div className="absolute w-[40px] h-[2px] bg-red-600 -left-10 top-1/2 transform -translate-y-1/2"></div>

             {/* Label */}
               <div className="absolute -left-[120px] top-1/2 transform -translate-y-1/2 z-10">
                <div className="bg-blue-600 text-white text-[10px] rounded-full px-3 py-1 min-w-[90px] text-center flex items-center justify-center shadow-md">
                 <span className="mr-2 text-sm"></span>
                  {indicator.name}
                </div>
               </div>
             </div>
            )}
              
              {indicator.id === 'leg' && (
  <>
            {/* Line from label to dot */}
            <div className="absolute w-[40px] h-[2px] bg-cyan-500 -right-10 top-1/2 transform -translate-y-1/2"></div>
    
            {/* Label */}
            <div className="absolute -right-[120px] top-1/2 transform -translate-y-1/2 z-10">
              <div className="bg-cyan-500 text-blue text-[10px] rounded-full px-4 py-1 min-w-[90px] text-center flex items-center justify-center shadow-md">
                <span className="mr-2 text-sm"></span>
                  {indicator.name}
              </div>
            </div>
          </>
          )}  
          </div>
          ))}
        </div>
              
               
        
        {/* Bottom dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection