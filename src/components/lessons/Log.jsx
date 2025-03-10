import React from "react";

const Log = () => {
  return (
    <div className="p-6 ml-2 md:ml-20 mr-2  mt-20 md:mt-5 mb-5 sm:p-8 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-500 to-blue-600 text-transparent bg-clip-text">
        Git Log
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git log</code> command displays the commit history of your repository. 
        It helps track changes, identify commits, and navigate through versions.
      </p>

      {/* Basic git log */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔍 Basic Git Log:</h3>
      <p className="text-gray-700">Displays commit history in reverse chronological order:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git log</code>
      </div>

      {/* One-line log */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 One-Line Log:</h3>
      <p className="text-gray-700">View a compact version of the commit history:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git log --oneline</code>
      </div>

      {/* Log with graph */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🛠️ Log with Graph:</h3>
      <p className="text-gray-700">Show commit history with a visual branch structure:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git log --graph --oneline --decorate --all</code>
      </div>

      {/* Log with author filtering */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔍 Filter by Author:</h3>
      <p className="text-gray-700">View commits from a specific author:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git log --author="Your Name"</code>
      </div>

      {/* Log with date range */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📅 Log for a Date Range:</h3>
      <p className="text-gray-700">View commits made within a specific date range:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git log --since="2024-01-01" --until="2024-12-31"</code>
      </div>

      {/* Log with specific file */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📂 Log for a Specific File:</h3>
      <p className="text-gray-700">View commit history of a specific file:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git log -- filename.txt</code>
      </div>

      {/* Best practices */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Best Practices:</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Use <code>git log --oneline</code> for a quick overview.</li>
        <li>Add <code>--graph</code> to visualize branches.</li>
        <li>Filter logs using <code>--author</code> and <code>--since</code> options.</li>
        <li>Use <code>git log -p</code> to view changes in each commit.</li>
      </ul>
    </div>
  );
};

export default Log;
