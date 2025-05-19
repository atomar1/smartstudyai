import { Link } from 'wouter';
import { useState } from 'react';

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our curated collection of study resources organized by skill level.
          </p>
        </div>
        
        {/* Skill level tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('beginner')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${activeTab === 'beginner' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Beginner
          </button>
          <button
            onClick={() => setActiveTab('intermediate')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${activeTab === 'intermediate' 
                ? 'bg-secondary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${activeTab === 'advanced' 
                ? 'bg-accent text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Advanced
          </button>
        </div>
        
        {/* Beginner Resources */}
        {activeTab === 'beginner' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Study foundations" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Beginner
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Study Foundations</h3>
                <p className="text-gray-600 mb-4">
                  Learn basic study methods and how to establish a productive study routine.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">8 Resources</span>
                  <Link href="#" className="text-primary hover:text-primary/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Productivity basics" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Beginner
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Productivity Basics</h3>
                <p className="text-gray-600 mb-4">
                  Essential time management skills and tools for new students.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">6 Resources</span>
                  <Link href="#" className="text-primary hover:text-primary/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Note-taking 101" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Beginner
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Note-taking 101</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of effective note-taking for better retention.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">5 Resources</span>
                  <Link href="#" className="text-primary hover:text-primary/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Intermediate Resources */}
        {activeTab === 'intermediate' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Advanced study techniques" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Intermediate
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Memory Techniques</h3>
                <p className="text-gray-600 mb-4">
                  Explore intermediate memory methods like spaced repetition and memory palaces.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">7 Resources</span>
                  <Link href="#" className="text-secondary hover:text-secondary/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Time blocking strategies" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Intermediate
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Time Blocking</h3>
                <p className="text-gray-600 mb-4">
                  Master the art of time blocking and prioritization for efficient studying.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">9 Resources</span>
                  <Link href="#" className="text-secondary hover:text-secondary/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Digital tools for studying" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Intermediate
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Digital Study Tools</h3>
                <p className="text-gray-600 mb-4">
                  Effective digital tools and apps to enhance your study process.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">8 Resources</span>
                  <Link href="#" className="text-secondary hover:text-secondary/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Advanced Resources */}
        {activeTab === 'advanced' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Accelerated learning" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Advanced
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Accelerated Learning</h3>
                <p className="text-gray-600 mb-4">
                  Advanced techniques for rapid skill acquisition and mastery.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">6 Resources</span>
                  <Link href="#" className="text-accent hover:text-accent/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Teaching and mastery" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Advanced
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Feynman Technique</h3>
                <p className="text-gray-600 mb-4">
                  Master the art of learning through teaching using the Feynman method.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">4 Resources</span>
                  <Link href="#" className="text-accent hover:text-accent/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Group study and collaboration" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Advanced
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deep Work</h3>
                <p className="text-gray-600 mb-4">
                  Strategies for achieving deep focus and maximizing cognitive performance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">5 Resources</span>
                  <Link href="#" className="text-accent hover:text-accent/90 font-medium flex items-center">
                    Explore
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link href="#" className="inline-flex items-center px-6 py-3 border border-primary text-primary bg-white hover:bg-primary-50 rounded-lg transition duration-150 ease-in-out font-medium">
            View All Resources
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
