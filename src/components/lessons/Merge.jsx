import React from "react";

const Merge = () => {
  return (
    <div className="p-6 ml-2 md:ml-20 mr-2  mt-20 md:mt-5 mb-5 sm:p-8 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
        Git Merge
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git merge</code> command integrates changes from one branch into another. It is commonly used to combine feature branches into the main branch.
      </p>

      {/* Basic git merge */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔀 Basic Merge:</h3>
      <p className="text-gray-700">Merge another branch into the current branch:</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git merge &lt;branch-name&gt;</code>
      </div>

      {/* Merge without fast-forward */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">⚡ Merge Without Fast-Forward:</h3>
      <p className="text-gray-700">
        The `--no-ff` flag ensures that a merge commit is always created, preserving branch history:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git merge --no-ff &lt;branch-name&gt;</code>
      </div>

      {/* Abort a merge */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🚫 Abort a Merge:</h3>
      <p className="text-gray-700">
        If a conflict occurs and you want to cancel the merge:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git merge --abort</code>
      </div>

      {/* Resolve merge conflicts */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">⚠️ Handling Merge Conflicts:</h3>
      <p className="text-gray-700">
        If conflicts occur, manually resolve them in affected files, then mark them as resolved:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git add &lt;conflicted-file&gt;</code>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto mt-2">
        <code>git commit</code>
      </div>

      {/* Merge strategies */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🛠️ Merge Strategies:</h3>
      <p className="text-gray-700">You can specify different merge strategies:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><code>git merge -s recursive</code>: Default strategy for merging branches.</li>
        <li><code>git merge -s ours</code>: Keep the current branch’s changes and discard the merged branch’s changes.</li>
        <li><code>git merge -s theirs</code>: Opposite of `ours` — prioritize the merged branch’s changes.</li>
      </ul>

      {/* Best practices */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Best Practices:</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Always merge changes from `main` or `develop` before merging your branch.</li>
        <li>Use <code>git pull --rebase</code> before merging to avoid unnecessary merge commits.</li>
        <li>Resolve merge conflicts carefully and test your code before committing.</li>
      </ul>
    </div>
  );
};

export default Merge;
