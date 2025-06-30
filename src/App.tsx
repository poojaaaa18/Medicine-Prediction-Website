import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import SymptomSelector from './components/SymptomSelector';
import DiagnosisResult from './components/DiagnosisResult';
import { allSymptoms, predictDisease, diseaseInfo } from './services/diseasePredictor';

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const handleDiagnose = () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setIsLoading(true);
    
    // Simulate a processing delay for realism
    setTimeout(() => {
      const result = predictDisease(selectedSymptoms);
      setDiagnosis(result);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setDiagnosis(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Heart className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">MediDiagnose</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Symptom Checker</h2>
              <p className="text-blue-100">Enter your symptoms to get a diagnosis</p>
            </div>
            
            <div className="p-6">
              <SymptomSelector 
                availableSymptoms={allSymptoms}
                selectedSymptoms={selectedSymptoms}
                onSelectSymptom={handleSelectSymptom}
                onRemoveSymptom={handleRemoveSymptom}
              />
              
              <div className="mt-6 flex flex-wrap gap-3">
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  onClick={handleDiagnose}
                  disabled={selectedSymptoms.length === 0 || isLoading}
                >
                  {isLoading ? 'Analyzing...' : 'Get Diagnosis'}
                </button>
                
                {selectedSymptoms.length > 0 && (
                  <button 
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition-colors"
                    onClick={handleReset}
                    disabled={isLoading}
                  >
                    Reset
                  </button>
                )}
              </div>
              
              {isLoading && (
                <div className="mt-8 flex justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-blue-600 animate-ping" />
                    </div>
                    <p className="mt-4 text-blue-600 font-medium">Analyzing your symptoms...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {diagnosis && !isLoading && (
            <DiagnosisResult 
              disease={diagnosis}
              description={diseaseInfo[diagnosis]?.description || "No detailed information available for this condition."}
              precautions={diseaseInfo[diagnosis]?.precautions || ["Consult a healthcare professional"]}
              medications={diseaseInfo[diagnosis]?.medications || ["Consult a healthcare professional"]}
              workouts={diseaseInfo[diagnosis]?.workouts || ["Consult a healthcare professional before starting any exercise"]}
              diets={diseaseInfo[diagnosis]?.diets || ["Maintain a balanced diet"]}
            />
          )}
        </div>
      </main>

      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            Disclaimer: This application is for educational purposes only and should not replace professional medical advice.
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            © 2025 MediDiagnose. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;