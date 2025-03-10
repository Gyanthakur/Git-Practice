import React from "react";

const Add = () => {
  return (
    <div className="p-6 ml-2 mr-2  mt-20 md:mt-5 mb-5 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Git Add
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git add</code> command moves changes from the working directory to the staging area. 
        This allows you to prepare specific changes for a commit.
      </p>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📂 Add a specific file:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git add &lt;filename&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📂 Add multiple specific files:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git add file1.txt file2.txt
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📂 Add all modified and new files:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git add .
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📝 Add all `.txt` files in a directory:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git add *.txt
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🚀 Add all tracked files (excluding untracked files):</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git add -u
      </pre>
    </div>
  );
};

export default Add;
