import React from "react";

const Install = () => (
  <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Installing Git</h2>

    <p className="text-gray-700 leading-relaxed mb-4">
      Git can be installed on Windows, macOS, and Linux. You can download the latest version from the official website or install it via the command line.
    </p>

    <h3 className="text-lg font-semibold text-gray-800 mt-4">📌 Installation Methods:</h3>

    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li><strong>Windows:</strong> Download the installer from the official website.</li>
      <li><strong>macOS:</strong> Install via Homebrew: <code className="bg-gray-100 px-1 rounded">brew install git</code></li>
      <li><strong>Linux:</strong> Use the package manager:<br />
        <code className="bg-gray-100 p-1 rounded block mt-1">sudo apt install git</code> (Debian/Ubuntu) <br />
        <code className="bg-gray-100 p-1 rounded block mt-1">sudo dnf install git</code> (Fedora)
      </li>
    </ul>

    <a 
      href="https://git-scm.com/downloads" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Download Git from official website"
      className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Download Git
    </a>
  </div>
);

export default Install;
