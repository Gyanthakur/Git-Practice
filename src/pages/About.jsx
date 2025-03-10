import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white max-w-[100vw] text-gray-900 mb-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-4 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800">
          About Git
        </h1>
        <p className="text-base sm:text-lg mt-3 sm:mt-4 max-w-2xl text-gray-600">
          A powerful distributed version control system that helps track changes in your code.
        </p>
      </div>

      {/* About Git Section */}
      <div className="mx-3 sm:mx-12 lg:mx-20 p-4 sm:p-10 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">What is Git?</h2>
        <p className="text-sm sm:text-lg leading-relaxed text-gray-700">
          Git is a free, open-source distributed version control system designed to handle everything
          from small to large projects with speed and efficiency. It allows multiple developers
          to collaborate seamlessly, tracking changes and maintaining a history of modifications.
        </p>
      </div>

      {/* Key Features */}
      <div className="mx-4 sm:mx-12 lg:mx-20 p-4 sm:p-10 mt-8 bg-white rounded-xl shadow-md border border-gray-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-700">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-lg text-gray-700">
          <li><span className="font-semibold text-blue-600">Fast and Lightweight:</span> Optimized for efficiency.</li>
          <li><span className="font-semibold text-blue-600">Distributed System:</span> Each user has a complete history of the repository.</li>
          <li><span className="font-semibold text-blue-600">Branching & Merging:</span> Work on multiple versions of a project simultaneously.</li>
          <li><span className="font-semibold text-blue-600">Staging Area:</span> Selectively commit changes before pushing them.</li>
          <li><span className="font-semibold text-blue-600">Multiple Workflows:</span> Supports centralized and decentralized workflows.</li>
        </ul>
      </div>

      {/* Why Use Git? */}
      <div className="mx-4 sm:mx-12 lg:mx-20 p-4 sm:p-10 mt-8 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">Why Use Git?</h2>
        <p className="text-sm sm:text-lg leading-relaxed text-gray-700">
          Git helps developers track changes, collaborate, and manage projects effectively. It ensures
          that code remains organized and allows easy rollbacks when needed.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-3 text-sm sm:text-lg text-gray-700">
          <li>Improves teamwork and collaboration.</li>
          <li>Allows rollback to previous versions.</li>
          <li>Works seamlessly with GitHub, GitLab, and Bitbucket.</li>
          <li>Enhances project management with branches and commits.</li>
        </ul>
      </div>

      {/* Getting Started */}
      <div className="mx-4 sm:mx-12 lg:mx-20 p-4 sm:p-10 mt-8 bg-white rounded-xl shadow-md border border-gray-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-purple-700">Getting Started with Git</h2>
        <p className="text-sm sm:text-lg leading-relaxed text-gray-700">
          Installing Git is easy! Follow these steps to get started:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mt-3 text-sm sm:text-lg text-gray-700">
          <li>Go to the <a href="https://git-scm.com/downloads" className="text-blue-500 font-semibold" target="_blank" rel="noopener noreferrer">official Git website</a> and download Git.</li>
          <li>Install Git following the setup instructions for your OS.</li>
          <li>Open a terminal and configure Git with your name and email:
            <pre className="bg-gray-200 p-2 rounded-md mt-2 text-xs sm:text-sm text-gray-800">git config --global user.name "Your Name"</pre>
            <pre className="bg-gray-200 p-2 rounded-md mt-2 text-xs sm:text-sm text-gray-800">git config --global user.email "your@email.com"</pre>
          </li>
          <li>Start using Git by initializing a new repository with:
            <pre className="bg-gray-200 p-2 rounded-md mt-2 text-xs sm:text-sm text-gray-800">git init</pre>
          </li>
        </ol>
      </div>

     
    </div>
  );
};

export default About;
