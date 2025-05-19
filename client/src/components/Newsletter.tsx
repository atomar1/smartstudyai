import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [resourceInterests, setResourceInterests] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState<string>('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleResourceInterestChange = (interest: string) => {
    if (resourceInterests.includes(interest)) {
      setResourceInterests(resourceInterests.filter(item => item !== interest));
    } else {
      setResourceInterests([...resourceInterests, interest]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }
    
    if (!agreedToTerms) {
      setMessage('Please agree to receive educational content.');
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest('POST', '/api/newsletter', { 
        email, 
        name, 
        resourceInterests, 
        skillLevel, 
        agreedToTerms 
      });
      setSubscribed(true);
      setMessage('Thank you for subscribing to our newsletter!');
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-2">Resource Newsletter</h2>
              <div className="h-1 w-20 bg-white mb-6"></div>
              {!subscribed ? (
                <>
                  <p className="text-primary-100 mb-6">
                    Subscribe to get personalized educational resources, study guides, and expert tips delivered to your inbox.
                  </p>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Your Name</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border-0 focus:ring-2 focus:ring-primary-200 rounded-lg" 
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="w-full px-4 py-3 border-0 focus:ring-2 focus:ring-primary-200 rounded-lg" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">I'm interested in:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center space-x-2 text-primary-100 text-sm">
                          <input 
                            type="checkbox" 
                            checked={resourceInterests.includes('study-techniques')}
                            onChange={() => handleResourceInterestChange('study-techniques')}
                            className="h-4 w-4 text-white border-0 rounded focus:ring-white"
                          />
                          <span>Study Techniques</span>
                        </label>
                        <label className="flex items-center space-x-2 text-primary-100 text-sm">
                          <input 
                            type="checkbox" 
                            checked={resourceInterests.includes('time-management')}
                            onChange={() => handleResourceInterestChange('time-management')}
                            className="h-4 w-4 text-white border-0 rounded focus:ring-white"
                          />
                          <span>Time Management</span>
                        </label>
                        <label className="flex items-center space-x-2 text-primary-100 text-sm">
                          <input 
                            type="checkbox" 
                            checked={resourceInterests.includes('note-taking')}
                            onChange={() => handleResourceInterestChange('note-taking')}
                            className="h-4 w-4 text-white border-0 rounded focus:ring-white"
                          />
                          <span>Note-taking</span>
                        </label>
                        <label className="flex items-center space-x-2 text-primary-100 text-sm">
                          <input 
                            type="checkbox" 
                            checked={resourceInterests.includes('memory-techniques')}
                            onChange={() => handleResourceInterestChange('memory-techniques')}
                            className="h-4 w-4 text-white border-0 rounded focus:ring-white"
                          />
                          <span>Memory Techniques</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">My skill level:</label>
                      <div className="grid grid-cols-3 gap-2">
                        <label 
                          className={`flex items-center justify-center px-4 py-2 rounded-md text-sm cursor-pointer transition
                            ${skillLevel === 'beginner' 
                              ? 'bg-white text-primary font-medium' 
                              : 'bg-primary-700/50 text-white hover:bg-primary-700/70'}`}
                          onClick={() => setSkillLevel('beginner')}
                        >
                          Beginner
                        </label>
                        <label 
                          className={`flex items-center justify-center px-4 py-2 rounded-md text-sm cursor-pointer transition
                            ${skillLevel === 'intermediate' 
                              ? 'bg-white text-primary font-medium' 
                              : 'bg-primary-700/50 text-white hover:bg-primary-700/70'}`}
                          onClick={() => setSkillLevel('intermediate')}
                        >
                          Intermediate
                        </label>
                        <label 
                          className={`flex items-center justify-center px-4 py-2 rounded-md text-sm cursor-pointer transition
                            ${skillLevel === 'advanced' 
                              ? 'bg-white text-primary font-medium' 
                              : 'bg-primary-700/50 text-white hover:bg-primary-700/70'}`}
                          onClick={() => setSkillLevel('advanced')}
                        >
                          Advanced
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-start py-1">
                      <input 
                        id="terms" 
                        name="terms" 
                        type="checkbox" 
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="h-5 w-5 text-white border-0 rounded focus:ring-white mt-0.5"
                      />
                      <label htmlFor="terms" className="ml-3 text-sm text-primary-100">
                        I agree to receive educational resources and occasional updates. We respect your privacy.
                      </label>
                    </div>
                    
                    {message && (
                      <div className={`text-sm ${message.includes('Thank you') ? 'text-green-100' : 'text-red-100'} bg-primary-800/50 p-3 rounded-md`}>
                        {message}
                      </div>
                    )}
                    
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-white text-primary hover:bg-primary-50 font-medium rounded-lg transition flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : "Subscribe for Resources"}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-green-500 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">Subscription Confirmed!</h3>
                  <p className="text-center text-primary-100 mb-4">
                    Thank you for subscribing to our newsletter. You'll start receiving personalized resources based on your preferences.
                  </p>
                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => {
                        setSubscribed(false);
                        setEmail('');
                        setName('');
                        setResourceInterests([]);
                        setSkillLevel('');
                        setAgreedToTerms(false);
                        setMessage('');
                      }}
                      className="inline-flex items-center px-4 py-2 bg-white text-primary text-sm font-medium rounded-md hover:bg-primary-50"
                    >
                      Subscribe another email
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000" 
                alt="Student receiving digital resources" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent"></div>
              
              {/* Benefits overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">Subscriber Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white drop-shadow-lg">Weekly curated resources based on skill level</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white drop-shadow-lg">Early access to new study guides and templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white drop-shadow-lg">Exclusive tips from education experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
