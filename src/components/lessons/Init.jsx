import React from "react";

const Init = () => (
  <div className="bg-white p-5 ml-2 mr-2  mt-20 md:mt-5 mb-5 rounded-lg shadow-md border border-gray-200">
    <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
      git init
    </h2>

    <p className="text-gray-700 mt-3">
      The <code className="bg-gray-100 px-1 rounded">git init</code> command initializes a new Git repository in the current directory. It creates a hidden <code>.git</code> folder, which tracks all version control data.
    </p>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Usage:</h3>
    <pre className="bg-gray-100 p-3 rounded-md shadow-inner mt-2 text-sm text-gray-700">
      git init
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">⚠️ Important Notes:</h3>
    <ul className="list-disc pl-5 text-gray-700">
      <li>Use this command only when starting a new project.</li>
      <li>Running <code>git init</code> in an existing repository won’t delete anything, but be cautious.</li>
      <li>To initialize a repository in a specific directory, use <code>git init &lt;directory&gt;</code>.</li>
    </ul>
  </div>
);

export default Init;
