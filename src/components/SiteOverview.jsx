import { 
    BookOpen, 
    Code, 
    YoutubeLogo, 
    Users, 
    MagnifyingGlass 
  } from "@phosphor-icons/react";
  
  const SiteOverview = () => {
    return (
      <div className="p-4 shadow-lg rounded-lg">
        {/* Title Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Welcome to Our Learning Platform</h2>
        <p className="text-gray-600">
          Explore a variety of courses, coding challenges, and video tutorials. Enhance your skills through structured learning and interactive exercises!
        </p>
  
        {/* Features Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Feature 1: Courses */}
          <div className="p-4 border rounded-md shadow-md flex items-center">
            <BookOpen size={32} className="text-blue-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Comprehensive Courses</h3>
              <p className="text-gray-500 text-sm">
                Learn step-by-step with structured lessons and hands-on examples.
              </p>
            </div>
          </div>
  
          {/* Feature 2: Coding Practice */}
          <div className="p-4 border rounded-md shadow-md flex items-center">
            <Code size={32} className="text-green-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Interactive Coding</h3>
              <p className="text-gray-500 text-sm">
                Practice coding exercises and challenges directly in the browser.
              </p>
            </div>
          </div>
  
          {/* Feature 3: Video Tutorials */}
          {/* <div className="p-4 border rounded-md shadow-md flex items-center">
            <YoutubeLogo size={32} className="text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Video Tutorials</h3>
              <p className="text-gray-500 text-sm">
                Watch curated YouTube videos to supplement your learning.
              </p>
            </div>
          </div> */}
  
          {/* Feature 4: Community Support */}
          <div className="p-4 border rounded-md shadow-md flex items-center">
            <Users size={32} className="text-purple-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Community Support</h3>
              <p className="text-gray-500 text-sm">
                Connect with other learners and collaborate on projects.
              </p>
            </div>
          </div>
  
          {/* Feature 5: Smart Search */}
          <div className="p-4 border rounded-md shadow-md flex items-center">
            <MagnifyingGlass size={32} className="text-orange-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Smart Search</h3>
              <p className="text-gray-500 text-sm">
                Quickly find lessons, videos, or topics with our search feature.
              </p>
            </div>
          </div>
        </div>
  
        {/* Call-to-Action */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-lg font-semibold text-blue-700">🚀 Get Started Now!</h3>
          <p className="text-gray-600 text-sm">
            Select a lesson from the sidebar to begin your learning journey.
          </p>
        </div>
      </div>
    );
  };
  
  export default SiteOverview;
  