import React from "react";

const Commit = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Git Commit
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git commit</code> command saves changes to the local repository. Each commit represents a snapshot of your project at a particular moment.
      </p>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📝 Basic Commit:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git commit -m "Your commit message"
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">✏️ Amend Last Commit (Modify Last Commit):</h3>
      <p className="text-gray-700">
        If you need to change the last commit message or include additional changes:
      </p>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git commit --amend -m "Updated commit message"
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📝 Multi-Line Commit Message:</h3>
      <p className="text-gray-700">
        For detailed commit messages, omit the <code>-m</code> flag to open the default text editor:
      </p>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git commit
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Best Practices for Commit Messages:</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Keep messages short and descriptive (50-72 characters).</li>
        <li>Use the present tense (e.g., "Add feature" instead of "Added feature").</li>
        <li>Include a detailed description if needed (use `git commit` without `-m`).</li>
      </ul>
    </div>
  );
};

export default Commit;
