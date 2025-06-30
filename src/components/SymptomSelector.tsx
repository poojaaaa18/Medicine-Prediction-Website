import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SymptomSelectorProps {
  availableSymptoms: string[];
  selectedSymptoms: string[];
  onSelectSymptom: (symptom: string) => void;
  onRemoveSymptom: (symptom: string) => void;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  availableSymptoms,
  selectedSymptoms,
  onSelectSymptom,
  onRemoveSymptom
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredSymptoms = availableSymptoms
    .filter(symptom => 
      !selectedSymptoms.includes(symptom) && 
      symptom.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 10); // Show only first 10 matches
  
  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for symptoms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        {filteredSymptoms.length > 0 && searchTerm && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredSymptoms.map((symptom) => (
              <li 
                key={symptom}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                onClick={() => {
                  onSelectSymptom(symptom);
                  setSearchTerm('');
                }}
              >
                {symptom}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {selectedSymptoms.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Symptoms:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((symptom) => (
              <div 
                key={symptom}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                <span>{symptom}</span>
                <button 
                  className="ml-2 text-blue-600 hover:text-blue-800"
                  onClick={() => onRemoveSymptom(symptom)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomSelector;