import React from 'react';
import { Heart, Activity, Utensils, AlertCircle, Pill } from 'lucide-react';

interface DiagnosisResultProps {
  disease: string;
  description: string;
  precautions: string[];
  medications: string[];
  workouts: string[];
  diets: string[];
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({
  disease,
  description,
  precautions,
  medications,
  workouts,
  diets
}) => {
  return (
    <div className="w-full animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Diagnosis Result</h2>
          <p className="text-blue-100">Based on your symptoms</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{disease}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Precautions</h4>
              </div>
              <ul className="space-y-2">
                {precautions.map((precaution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{precaution}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Pill className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Medications</h4>
              </div>
              <ul className="space-y-2">
                {medications.map((medication, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{medication}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Activity className="h-5 w-5 text-purple-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Recommended Workouts</h4>
              </div>
              <ul className="space-y-2">
                {workouts.map((workout, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{workout}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Utensils className="h-5 w-5 text-orange-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Dietary Recommendations</h4>
              </div>
              <ul className="space-y-2">
                {diets.map((diet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{diet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Note: This is a preliminary diagnosis based on symptoms. Please consult a healthcare professional for proper medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResult;