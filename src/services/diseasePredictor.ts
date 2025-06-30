// This is a simplified model that mimics the behavior of the SVC model
// In a real application, you'd likely use a more sophisticated approach
// or an API call to a backend service that runs the Python model

// List of all possible symptoms (derived from the dataset)
export const allSymptoms = [
  'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering',
  'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue',
  'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_urination', 'fatigue',
  'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss',
  'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough',
  'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration',
  'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea',
  'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain',
  'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure',
  'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision',
  'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose',
  'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements',
  'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness',
  'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels',
  'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger',
  'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain',
  'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements',
  'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort',
  'foul_smell_of_urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
  'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body',
  'belly_pain', 'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes', 'increased_appetite',
  'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration',
  'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding',
  'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf',
  'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring',
  'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister',
  'red_sore_around_nose', 'yellow_crust_ooze'
];

// Simple rules for disease prediction based on symptoms
// This is a simplified version of what the ML model would do
export function predictDisease(symptoms: string[]): string {
  // Count the matches for each disease pattern
  const matches: { [disease: string]: number } = {
    "Fungal infection": countMatches(symptoms, ["itching", "skin_rash", "nodal_skin_eruptions"]),
    "Allergy": countMatches(symptoms, ["continuous_sneezing", "shivering", "chills"]),
    "GERD": countMatches(symptoms, ["stomach_pain", "acidity", "ulcers_on_tongue"]),
    "Chronic cholestasis": countMatches(symptoms, ["itching", "yellowish_skin", "nausea", "loss_of_appetite"]),
    "Drug Reaction": countMatches(symptoms, ["itching", "skin_rash", "stomach_pain"]),
    "Peptic ulcer disease": countMatches(symptoms, ["vomiting", "loss_of_appetite", "abdominal_pain"]),
    "AIDS": countMatches(symptoms, ["muscle_wasting", "patches_in_throat", "high_fever"]),
    "Diabetes": countMatches(symptoms, ["fatigue", "weight_loss", "restlessness", "lethargy", "irregular_sugar_level"]),
    "Gastroenteritis": countMatches(symptoms, ["vomiting", "sunken_eyes", "dehydration", "diarrhoea"]),
    "Bronchial Asthma": countMatches(symptoms, ["fatigue", "cough", "high_fever", "breathlessness"]),
    "Hypertension": countMatches(symptoms, ["headache", "chest_pain", "dizziness", "loss_of_balance"]),
    "Migraine": countMatches(symptoms, ["acidity", "indigestion", "headache", "blurred_and_distorted_vision", "excessive_hunger"]),
    "Cervical spondylosis": countMatches(symptoms, ["back_pain", "weakness_in_limbs", "neck_pain", "dizziness", "loss_of_balance"]),
    "Paralysis (brain hemorrhage)": countMatches(symptoms, ["vomiting", "headache", "weakness_of_one_body_side", "altered_sensorium"]),
    "Jaundice": countMatches(symptoms, ["itching", "vomiting", "fatigue", "yellowish_skin", "dark_urine", "abdominal_pain"]),
    "Malaria": countMatches(symptoms, ["chills", "vomiting", "high_fever", "sweating", "headache", "nausea"]),
    "Chicken pox": countMatches(symptoms, ["itching", "skin_rash", "fatigue", "lethargy", "high_fever", "headache"]),
    "Dengue": countMatches(symptoms, ["skin_rash", "chills", "joint_pain", "vomiting", "fatigue", "high_fever", "headache", "nausea"]),
    "Typhoid": countMatches(symptoms, ["chills", "vomiting", "fatigue", "high_fever", "headache", "nausea", "constipation", "abdominal_pain"]),
    "Hepatitis A": countMatches(symptoms, ["joint_pain", "vomiting", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", "abdominal_pain", "diarrhoea"]),
    "Hepatitis B": countMatches(symptoms, ["itching", "fatigue", "lethargy", "yellowish_skin", "dark_urine", "loss_of_appetite"]),
    "Hepatitis C": countMatches(symptoms, ["fatigue", "yellowish_skin", "nausea", "loss_of_appetite"]),
    "Hepatitis D": countMatches(symptoms, ["joint_pain", "vomiting", "fatigue", "yellowish_skin", "dark_urine", "nausea"]),
    "Hepatitis E": countMatches(symptoms, ["joint_pain", "vomiting", "fatigue", "high_fever", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite"]),
    "Alcoholic hepatitis": countMatches(symptoms, ["vomiting", "yellowish_skin", "abdominal_pain", "swelling_of_stomach", "distention_of_abdomen", "history_of_alcohol_consumption"]),
    "Tuberculosis": countMatches(symptoms, ["chills", "vomiting", "fatigue", "weight_loss", "cough", "high_fever", "breathlessness", "sweating", "loss_of_appetite", "chest_pain"]),
    "Common Cold": countMatches(symptoms, ["continuous_sneezing", "chills", "fatigue", "cough", "high_fever", "headache", "swelled_lymph_nodes", "malaise", "phlegm", "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion", "chest_pain", "loss_of_smell", "muscle_pain"]),
    "Pneumonia": countMatches(symptoms, ["chills", "fatigue", "cough", "high_fever", "breathlessness", "sweating", "chest_pain", "phlegm", "rusty_sputum"]),
    "Dimorphic hemorrhoids(piles)": countMatches(symptoms, ["constipation", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", "irritation_in_anus"]),
    "Heart attack": countMatches(symptoms, ["vomiting", "breathlessness", "sweating", "chest_pain"]),
    "Varicose veins": countMatches(symptoms, ["fatigue", "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels", "prominent_veins_on_calf"]),
    "Hypothyroidism": countMatches(symptoms, ["fatigue", "weight_gain", "cold_hands_and_feets", "mood_swings", "lethargy", "dizziness", "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties", "depression", "irritability", "abnormal_menstruation"]),
    "Hyperthyroidism": countMatches(symptoms, ["fatigue", "mood_swings", "weight_loss", "restlessness", "sweating", "diarrhoea", "fast_heart_rate", "excessive_hunger", "abnormal_menstruation"]),
    "Hypoglycemia": countMatches(symptoms, ["vomiting", "fatigue", "anxiety", "sweating", "headache", "nausea", "blurred_and_distorted_vision", "excessive_hunger", "drying_and_tingling_lips", "slurred_speech", "irritability", "palpitations"]),
    "Osteoarthristis": countMatches(symptoms, ["joint_pain", "neck_pain", "knee_pain", "hip_joint_pain", "swelling_joints", "painful_walking"]),
    "Arthritis": countMatches(symptoms, ["muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness", "painful_walking"]),
    "(vertigo) Paroxysmal Positional Vertigo": countMatches(symptoms, ["vomiting", "headache", "nausea", "spinning_movements", "loss_of_balance", "unsteadiness"]),
    "Acne": countMatches(symptoms, ["skin_rash", "pus_filled_pimples", "blackheads", "scurring"]),
    "Urinary tract infection": countMatches(symptoms, ["burning_micturition", "bladder_discomfort", "foul_smell_of_urine", "continuous_feel_of_urine"]),
    "Psoriasis": countMatches(symptoms, ["skin_rash", "joint_pain", "skin_peeling", "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails"]),
    "Impetigo": countMatches(symptoms, ["skin_rash", "high_fever", "blister", "red_sore_around_nose", "yellow_crust_ooze"])
  };

  // Find the disease with the most matches
  let bestMatch = "";
  let highestScore = 0;
  
  for (const [disease, score] of Object.entries(matches)) {
    if (score > highestScore) {
      highestScore = score;
      bestMatch = disease;
    }
  }
  
  // If not enough matches, return a general message
  if (highestScore < 1) {
    return "Unknown condition";
  }
  
  return bestMatch;
}

// Helper function to count how many symptoms from a list match the input symptoms
function countMatches(userSymptoms: string[], diseaseSymptoms: string[]): number {
  return diseaseSymptoms.filter(symptom => userSymptoms.includes(symptom)).length;
}

// Information database for diseases
export const diseaseInfo: { [disease: string]: any } = {
  "Fungal infection": {
    description: "Fungal infection is a common skin condition caused by fungi.",
    precautions: [
      "Bath twice daily",
      "Use detol or neem in bathing water",
      "Keep infected area dry",
      "Use clean clothes"
    ],
    medications: [
      "Antifungal Cream",
      "Fluconazole",
      "Terbinafine",
      "Clotrimazole",
      "Ketoconazole"
    ],
    workouts: [
      "Avoid sugary foods",
      "Consume probiotics",
      "Increase intake of garlic",
      "Include yogurt in diet",
      "Limit processed foods"
    ],
    diets: [
      "Antifungal Diet",
      "Probiotics",
      "Garlic",
      "Coconut oil",
      "Turmeric"
    ]
  },
  "Allergy": {
    description: "Allergy is an immune system reaction to a substance that's typically harmless.",
    precautions: [
      "Apply calamine",
      "Cover area with bandage",
      "Use ice to compress itching",
      "Avoid allergens"
    ],
    medications: [
      "Antihistamines",
      "Decongestants",
      "Epinephrine",
      "Corticosteroids"
    ],
    workouts: [
      "Light cardio",
      "Yoga",
      "Avoid outdoor exercises during high pollen",
      "Swimming in clean pools"
    ],
    diets: [
      "Elimination Diet",
      "Omega-3-rich foods",
      "Vitamin C-rich foods",
      "Anti-inflammatory foods",
      "Quercetin-rich foods"
    ]
  },
  "GERD": {
    description: "GERD (Gastroesophageal Reflux Disease) is a digestive disorder that affects the lower esophageal sphincter.",
    precautions: [
      "Avoid fatty spicy food",
      "Avoid lying down after eating",
      "Maintain healthy weight",
      "Exercise regularly"
    ],
    medications: [
      "Proton Pump Inhibitors (PPIs)",
      "H2 Blockers",
      "Antacids",
      "Prokinetics"
    ],
    workouts: [
      "Walking after meals",
      "Light yoga",
      "Core strengthening",
      "Avoid exercises that increase abdominal pressure"
    ],
    diets: [
      "Low-Acid Diet",
      "Fiber-rich foods",
      "Ginger",
      "Bananas",
      "Melons"
    ]
  },
  "Diabetes": {
    description: "Diabetes is a chronic condition that affects how your body turns food into energy, characterized by high blood sugar levels.",
    precautions: [
      "Have balanced diet",
      "Exercise regularly",
      "Consult doctor",
      "Follow-up regularly"
    ],
    medications: [
      "Insulin",
      "Metformin",
      "Sulfonylureas",
      "DPP-4 inhibitors",
      "SGLT2 inhibitors"
    ],
    workouts: [
      "Regular walking",
      "Swimming",
      "Cycling",
      "Resistance training",
      "Yoga"
    ],
    diets: [
      "Low-Glycemic Diet",
      "Fiber-rich foods",
      "Lean proteins",
      "Healthy fats",
      "Portion control"
    ]
  },
  "Unknown condition": {
    description: "Based on the symptoms provided, a specific condition could not be determined with confidence.",
    precautions: [
      "Consult with a healthcare professional",
      "Monitor symptoms",
      "Rest and stay hydrated",
      "Avoid self-medication"
    ],
    medications: [
      "Consult doctor before taking any medication"
    ],
    workouts: [
      "Light activity as tolerated",
      "Rest when needed"
    ],
    diets: [
      "Balanced, nutritious diet",
      "Stay well hydrated",
      "Avoid processed foods"
    ]
  }
};

// Add more disease information as needed or load from a database