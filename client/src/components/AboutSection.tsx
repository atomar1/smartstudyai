export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why SmartStudy?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Generic study advice doesn't account for your unique learning style. Our AI-powered system 
            analyzes your preferences to create a tailored study routine that works for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-primary mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600">
              Get study techniques and schedules that match your attention span, energy levels, and learning preferences.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-secondary mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10" 
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
            </div>
            <h3 className="text-xl font-semibold mb-2">Optimize Study Time</h3>
            <p className="text-gray-600">
              Maximize your efficiency by learning when, how, and for how long you should study to retain information better.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-accent mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10" 
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
            </div>
            <h3 className="text-xl font-semibold mb-2">Boost Motivation</h3>
            <p className="text-gray-600">
              Get motivational strategies and techniques to stay engaged and overcome procrastination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
