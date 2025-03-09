import React from "react";

const Branch = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Git Branch
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git branch</code> command is used to list, create, delete, and manage branches in Git.
        Branching allows developers to work on different features independently before merging them into the main branch.
      </p>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔹 List all branches:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git branch
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🆕 Create a new branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git branch &lt;branch-name&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔄 Switch to a branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout &lt;branch-name&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">⚡ Create and switch to a new branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout -b &lt;branch-name&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🗑️ Delete a branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git branch -d &lt;branch-name&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🚀 Push a branch to a remote repository:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git push origin &lt;branch-name&gt;
      </pre>
    </div>
  );
};

export default Branch;
