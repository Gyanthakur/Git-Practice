import React from "react";

const Remote = () => {
  return (
    <div className="p-6 ml-2 md:ml-20 mr-2  mt-20 md:mt-5 mb-5 sm:p-8 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Git Remote
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="font-semibold">git remote</code> command is used to manage connections with remote repositories.
        It allows you to view, add, rename, or remove remote links.
      </p>

      {/* List all remotes */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 List All Remote Repositories:</h3>
      <p className="text-gray-700">To see all connected remote repositories, use:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote -v</code>
      </div>

      {/* Add a remote repository */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">➕ Add a Remote Repository:</h3>
      <p className="text-gray-700">To link a local repository to a remote GitHub repository:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote add origin https://github.com/user/repository.git</code>
      </div>

      {/* Remove a remote repository */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">❌ Remove a Remote Repository:</h3>
      <p className="text-gray-700">To remove an existing remote:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote remove origin</code>
      </div>

      {/* Rename a remote */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">✏️ Rename a Remote:</h3>
      <p className="text-gray-700">To rename an existing remote:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote rename old-name new-name</code>
      </div>

      {/* Update a remote URL */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔄 Update Remote URL:</h3>
      <p className="text-gray-700">To change the URL of an existing remote:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote set-url origin &lt;new-url&gt;</code>
      </div>

      {/* Fetch remote details */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔍 Get Remote Details:</h3>
      <p className="text-gray-700">To view more details about a remote repository:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote show origin</code>
      </div>

      {/* Prune stale remote branches */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🧹 Remove Stale Remote Branches:</h3>
      <p className="text-gray-700">If a remote branch is deleted, but still appears in your list, remove it with:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git remote prune origin</code>
      </div>

      {/* Best Practices */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">✅ Best Practices:</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Always verify remotes using <code>git remote -v</code> before pushing.</li>
        <li>Use <code>git remote rename</code> to maintain consistency in remote names.</li>
        <li>Periodically prune stale branches with <code>git remote prune origin</code>.</li>
      </ul>
    </div>
  );
};

export default Remote;
