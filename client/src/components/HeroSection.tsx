import { Link } from 'wouter';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Optimize Your Study Habits with AI</h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            SmartStudy helps you create personalized study routines based on your learning style, attention span, and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#quiz">
              <a className="bg-white text-primary hover:bg-primary-50 font-medium py-3 px-6 rounded-lg shadow-md transition flex items-center justify-center">
                <span>Get Started</span>
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
              </a>
            </Link>
            <Link href="#about">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-6 rounded-lg transition flex items-center justify-center">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
            alt="Students collaborating on studies" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
}
