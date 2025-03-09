import React from "react";

const Checkout = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
        Git Checkout
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git checkout</code> command is used to switch branches or restore files.
        It allows you to navigate between different branches in your repository.
      </p>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔄 Switch to an existing branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout &lt;branch-name&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🌱 Create and switch to a new branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout -b &lt;new-branch-name&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔄 Restore a specific file from the last commit:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout -- &lt;filename&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">⏮️ Switch to the previous branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout -
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🚀 Checkout a remote branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git checkout -t origin/&lt;branch-name&gt;
      </pre>
    </div>
  );
};

export default Checkout;
