import { useState } from 'react';
import { generateRecommendations } from '@/lib/recommendations';
import { 
  FormData, 
  LearningStyle, 
  StudyTime, 
  BreakFrequency, 
  Environment, 
  Distraction,
  Recommendation 
} from '@/types/quiz';

export default function StudyQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    learningStyle: null,
    attentionSpan: 45,
    studyTime: null,
    breakFrequency: 'moderate',
    environment: null,
    motivationFactors: {
      rewards: true,
      goals: true,
      progress: false,
      social: false,
    },
    distraction: 'phone',
  });
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null);

  // Update progress bar width based on current step
  const progressWidth = () => {
    if (currentStep === 1) return "0%";
    if (currentStep === 2) return "33%";
    if (currentStep === 3) return "66%";
    if (currentStep === 4) return "100%";
    return "0%";
  };

  // Handle form data changes
  const handleLearningStyleChange = (style: LearningStyle) => {
    setFormData({ ...formData, learningStyle: style });
  };

  const handleAttentionSpanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, attentionSpan: parseInt(e.target.value) });
  };

  const handleStudyTimeChange = (time: StudyTime) => {
    setFormData({ ...formData, studyTime: time });
  };

  const handleBreakFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, breakFrequency: e.target.value as BreakFrequency });
  };

  const handleEnvironmentChange = (env: Environment) => {
    setFormData({ ...formData, environment: env });
  };

  const handleMotivationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      motivationFactors: {
        ...formData.motivationFactors,
        [e.target.id.replace('motivation-', '')]: e.target.checked,
      },
    });
  };

  const handleDistractionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, distraction: e.target.value as Distraction });
  };

  // Navigation handlers
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateResults = () => {
    const results = generateRecommendations(formData);
    setRecommendations(results);
    goToNextStep();
  };

  const restartQuiz = () => {
    setCurrentStep(1);
    setFormData({
      learningStyle: null,
      attentionSpan: 45,
      studyTime: null,
      breakFrequency: 'moderate',
      environment: null,
      motivationFactors: {
        rewards: true,
        goals: true,
        progress: false,
        social: false,
      },
      distraction: 'phone',
    });
    setRecommendations(null);
  };

  return (
    <section id="quiz" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-gray-100">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: progressWidth() }}
            ></div>
          </div>
          
          {/* Quiz header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Personalize Your Study Routine</h2>
            <p className="text-gray-600 mt-1">Answer a few questions to get tailored recommendations</p>
          </div>
          
          {/* Quiz steps navigation */}
          <div className="px-6 py-4 border-b border-gray-200 flex">
            <div className="flex space-x-1 items-center">
              <span 
                className={currentStep === 1 ? "step-active font-medium" : currentStep > 1 ? "step-complete font-medium" : "step-inactive font-medium"}
              >
                1. Learning Style
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span
                className={currentStep === 2 ? "step-active font-medium" : currentStep > 2 ? "step-complete font-medium" : "step-inactive font-medium"}
              >
                2. Focus & Time
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span
                className={currentStep === 3 ? "step-active font-medium" : currentStep > 3 ? "step-complete font-medium" : "step-inactive font-medium"}
              >
                3. Environment
              </span>
            </div>
          </div>

          {/* Quiz content container */}
          <div className="p-6">
            {/* Step 1: Learning Style */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">How do you prefer to learn new information?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Visual learner */}
                  <div 
                    className={`border ${formData.learningStyle === 'visual' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                    onClick={() => handleLearningStyleChange('visual')}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                      alt="Visual learning style illustration" 
                      className="w-full h-32 object-cover rounded-md mb-3" 
                    />
                    <h4 className="font-semibold">Visual Learner</h4>
                    <p className="text-sm text-gray-600">You learn best through images, diagrams, and spatial understanding</p>
                  </div>
                  
                  {/* Auditory learner */}
                  <div 
                    className={`border ${formData.learningStyle === 'auditory' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                    onClick={() => handleLearningStyleChange('auditory')}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                      alt="Auditory learning style illustration" 
                      className="w-full h-32 object-cover rounded-md mb-3" 
                    />
                    <h4 className="font-semibold">Auditory Learner</h4>
                    <p className="text-sm text-gray-600">You learn best through listening, discussions, and verbal explanations</p>
                  </div>
                  
                  {/* Reading/writing learner */}
                  <div 
                    className={`border ${formData.learningStyle === 'reading' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                    onClick={() => handleLearningStyleChange('reading')}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                      alt="Reading/writing learning style illustration" 
                      className="w-full h-32 object-cover rounded-md mb-3" 
                    />
                    <h4 className="font-semibold">Reading/Writing Learner</h4>
                    <p className="text-sm text-gray-600">You learn best through text-based information and note-taking</p>
                  </div>
                  
                  {/* Kinesthetic learner */}
                  <div 
                    className={`border ${formData.learningStyle === 'kinesthetic' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                    onClick={() => handleLearningStyleChange('kinesthetic')}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                      alt="Kinesthetic learning style illustration" 
                      className="w-full h-32 object-cover rounded-md mb-3" 
                    />
                    <h4 className="font-semibold">Kinesthetic Learner</h4>
                    <p className="text-sm text-gray-600">You learn best through hands-on activities and physical experiences</p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition flex items-center"
                    onClick={goToNextStep}
                    disabled={!formData.learningStyle}
                  >
                    Continue
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 inline" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Focus & Time */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Focus & Time Preferences</h3>
                
                <div className="space-y-8">
                  {/* Attention span */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">What is your typical attention span for focused studying?</label>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-sm">15 min</span>
                      <input 
                        type="range" 
                        min="15" 
                        max="120" 
                        step="15" 
                        value={formData.attentionSpan} 
                        onChange={handleAttentionSpanChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                      />
                      <span className="text-gray-500 text-sm">120 min</span>
                    </div>
                    <div className="text-center mt-2">{formData.attentionSpan} minutes</div>
                  </div>
                  
                  {/* Preferred study time */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">When are you most productive?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div 
                        className={`border ${formData.studyTime === 'early-morning' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-3 text-center cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                        onClick={() => handleStudyTimeChange('early-morning')}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-8 w-8 mx-auto text-orange-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                          />
                        </svg>
                        <span className="block mt-2 font-medium">Early Morning</span>
                        <span className="text-xs text-gray-500">5 AM - 9 AM</span>
                      </div>
                      
                      <div 
                        className={`border ${formData.studyTime === 'late-morning' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-3 text-center cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                        onClick={() => handleStudyTimeChange('late-morning')}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-8 w-8 mx-auto text-yellow-500" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                          />
                        </svg>
                        <span className="block mt-2 font-medium">Late Morning</span>
                        <span className="text-xs text-gray-500">9 AM - 12 PM</span>
                      </div>
                      
                      <div 
                        className={`border ${formData.studyTime === 'afternoon' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-3 text-center cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                        onClick={() => handleStudyTimeChange('afternoon')}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-8 w-8 mx-auto text-blue-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                          />
                        </svg>
                        <span className="block mt-2 font-medium">Afternoon</span>
                        <span className="text-xs text-gray-500">12 PM - 5 PM</span>
                      </div>
                      
                      <div 
                        className={`border ${formData.studyTime === 'evening' ? 'border-primary bg-primary-50' : 'border-gray-200'} rounded-lg p-3 text-center cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition`}
                        onClick={() => handleStudyTimeChange('evening')}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-8 w-8 mx-auto text-indigo-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                          />
                        </svg>
                        <span className="block mt-2 font-medium">Evening</span>
                        <span className="text-xs text-gray-500">5 PM - 10 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Break frequency */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">How often do you need breaks while studying?</label>
                    <select 
                      value={formData.breakFrequency}
                      onChange={handleBreakFrequencyChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition"
                    >
                      <option value="frequent">Frequent short breaks (every 15-25 minutes)</option>
                      <option value="moderate">Moderate breaks (every 30-45 minutes)</option>
                      <option value="infrequent">Infrequent breaks (every 60+ minutes)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button 
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition flex items-center"
                    onClick={goToPrevStep}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Back
                  </button>
                  <button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition"
                    onClick={goToNextStep}
                    disabled={!formData.studyTime}
                  >
                    Continue
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 inline" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Environment */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Study Environment Preferences</h3>
                
                <div className="space-y-8">
                  {/* Environment type */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">What type of environment helps you focus best?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Quiet environment */}
                      <div 
                        className={`border ${formData.environment === 'quiet' ? 'border-primary shadow-md' : 'border-gray-200'} rounded-lg overflow-hidden cursor-pointer hover:border-primary-300 hover:shadow-md transition`}
                        onClick={() => handleEnvironmentChange('quiet')}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350" 
                          alt="Quiet study environment" 
                          className="w-full h-40 object-cover" 
                        />
                        <div className="p-4">
                          <h4 className="font-semibold">Quiet Space</h4>
                          <p className="text-sm text-gray-600">Minimal distractions, silent or quiet environment</p>
                        </div>
                      </div>
                      
                      {/* Background noise */}
                      <div 
                        className={`border ${formData.environment === 'ambient' ? 'border-primary shadow-md' : 'border-gray-200'} rounded-lg overflow-hidden cursor-pointer hover:border-primary-300 hover:shadow-md transition`}
                        onClick={() => handleEnvironmentChange('ambient')}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350" 
                          alt="Ambient study environment" 
                          className="w-full h-40 object-cover" 
                        />
                        <div className="p-4">
                          <h4 className="font-semibold">Ambient Background</h4>
                          <p className="text-sm text-gray-600">Coffee shop, background music, some activity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Motivation factors */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">What helps keep you motivated while studying?</label>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="motivation-rewards" 
                          checked={formData.motivationFactors.rewards}
                          onChange={handleMotivationChange}
                          className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" 
                        />
                        <label htmlFor="motivation-rewards" className="ml-3 text-gray-700">Rewards after completing study sessions</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="motivation-goals" 
                          checked={formData.motivationFactors.goals}
                          onChange={handleMotivationChange}
                          className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" 
                        />
                        <label htmlFor="motivation-goals" className="ml-3 text-gray-700">Clear goals and deadlines</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="motivation-progress" 
                          checked={formData.motivationFactors.progress}
                          onChange={handleMotivationChange}
                          className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" 
                        />
                        <label htmlFor="motivation-progress" className="ml-3 text-gray-700">Tracking progress visually</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="motivation-social" 
                          checked={formData.motivationFactors.social}
                          onChange={handleMotivationChange}
                          className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" 
                        />
                        <label htmlFor="motivation-social" className="ml-3 text-gray-700">Study groups or accountability partners</label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Distractions */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">What's your biggest distraction while studying?</label>
                    <select 
                      value={formData.distraction}
                      onChange={handleDistractionChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition"
                    >
                      <option value="phone">Smartphone and notifications</option>
                      <option value="social-media">Social media</option>
                      <option value="multi-tasking">Trying to multi-task</option>
                      <option value="procrastination">Procrastination</option>
                      <option value="environment">Noisy environment</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button 
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition flex items-center"
                    onClick={goToPrevStep}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Back
                  </button>
                  <button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition"
                    onClick={generateResults}
                    disabled={!formData.environment}
                  >
                    Get Recommendations
                  </button>
                </div>
              </div>
            )}
            
            {/* Results */}
            {currentStep === 4 && recommendations && (
              <div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Your Personalized Study Plan</h3>
                  <p className="text-gray-600">Based on your preferences, here's your optimized study routine</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Study Session Structure */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      Study Session Structure
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {recommendations.sessionStructure.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Recommended Techniques */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M13 10V3L4 14h7v7l9-11h-7z" 
                        />
                      </svg>
                      Recommended Techniques
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {recommendations.techniques.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                          <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Environment and Tools */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-8">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                      />
                    </svg>
                    Environment & Tools
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    {recommendations.environment.map((item, index) => (
                      <div key={index} className="flex">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Motivation Quote */}
                <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-primary mr-4 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg text-primary-800 mb-1">Motivation Tip</h4>
                    <p className="text-primary-700">{recommendations.motivationalQuote}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button 
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition flex items-center"
                    onClick={restartQuiz}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Start Over
                  </button>
                  <button 
                    className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-lg font-medium transition flex items-center"
                    onClick={() => {
                      alert('Your personalized study plan is being prepared for download!');
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Download Study Plan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
