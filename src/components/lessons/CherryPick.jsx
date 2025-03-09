import React from "react";

const CherryPick = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Git Cherry-Pick
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git cherry-pick</code> command allows you to apply a specific commit from another branch into your current branch.
        This is useful when you want to selectively pick a commit instead of merging the entire branch.
      </p>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📌 Apply a single commit:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git cherry-pick &lt;commit-hash&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📜 Apply multiple commits:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git cherry-pick &lt;commit-hash1&gt; &lt;commit-hash2&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔄 Cherry-pick a range of commits:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git cherry-pick &lt;commit-hash1&gt;^..&lt;commit-hash2&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">⚠️ Cherry-pick with conflict resolution:</h3>
      <p className="text-gray-700">
        If conflicts occur during cherry-picking, Git will pause and allow you to resolve them manually. Once resolved, use:
      </p>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git cherry-pick --continue
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">❌ Abort an ongoing cherry-pick:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git cherry-pick --abort
      </pre>
    </div>
  );
};

export default CherryPick;
