const Status = () => (
  <div className="p-5 ml-2 mr-2  mt-20 md:mt-5 mb-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
      git status
    </h2>

    <p className="text-gray-700 leading-relaxed">
      The `git status` command displays the state of the working directory and the staging area. 
      It helps you see which changes are staged, unstaged, or untracked.
    </p>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">🔹 Basic Usage:</h3>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git status
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">🔸 Understanding the Output:</h3>
    <ul className="list-disc ml-6 text-gray-700">
      <li><span className="font-semibold text-blue-600">Untracked files:</span> New files not added to Git.</li>
      <li><span className="font-semibold text-yellow-600">Changes not staged for commit:</span> Modified files but not added to staging.</li>
      <li><span className="font-semibold text-green-600">Changes staged for commit:</span> Files ready to be committed.</li>
    </ul>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Adding Files to Staging:</h3>
    <p className="text-gray-700">To stage all modified files:</p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git add .
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">🗑️ Removing Staged Changes:</h3>
    <p className="text-gray-700">To unstage files before committing:</p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git reset HEAD &lt;file-name&gt;
    </pre>
  </div>
);

export default Status;
