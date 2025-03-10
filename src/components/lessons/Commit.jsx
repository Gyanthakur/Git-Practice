import React from "react";

const Commit = () => {
  return (
    <div className="p-6 ml-2 md:ml-20 mr-2  mt-20 md:mt-5 mb-5 sm:p-8 bg-white rounded-lg shadow-md border border-gray-300 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Git Commit
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git commit</code> command saves changes to the local repository.
        Each commit represents a snapshot of your project at a particular moment.
      </p>

      {/* Basic Commit */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📝 Basic Commit:</h3>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git commit -m "Your commit message"</code>
      </div>

      {/* Amend Last Commit */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">✏️ Amend Last Commit:</h3>
      <p className="text-gray-700">
        If you need to change the last commit message or include additional changes:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git commit --amend -m "Updated commit message"</code>
      </div>

      {/* Multi-Line Commit Message */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📝 Multi-Line Commit Message:</h3>
      <p className="text-gray-700">
        For detailed commit messages, omit the <code>-m</code> flag to open the default text editor:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git commit</code>
      </div>

      {/* Best Practices */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Best Practices for Commit Messages:</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Keep messages short</strong> and descriptive (50-72 characters).</li>
        <li><strong>Use present tense</strong> (e.g., "Add feature" instead of "Added feature").</li>
        <li><strong>Include a detailed description</strong> if needed (use <code>git commit</code> without <code>-m</code>).</li>
      </ul>
    </div>
  );
};

export default Commit;
