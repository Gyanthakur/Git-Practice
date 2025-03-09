const Push = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
      git push
    </h2>
    <p className="text-gray-700 leading-relaxed">
      The <span className="font-semibold">git push</span> command is used to upload local repository 
      changes to a remote repository. It updates the remote branch with the latest commits from 
      your local branch.
    </p>
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Usage:</h3>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>git push origin &lt;branch-name&gt;</strong> – Pushes changes to the specified remote branch.</li>
      <li><strong>git push -u origin &lt;branch-name&gt;</strong> – Sets upstream tracking and pushes changes.</li>
      <li><strong>git push --force</strong> – Pushes changes forcefully (use with caution).</li>
    </ul>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-3">
      git push origin &lt;branch-name&gt;
    </pre>
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Example:</h3>
    <p className="text-gray-700">
      If you're working on the <span className="font-mono bg-gray-200 px-1 rounded">main</span> branch and want to push changes:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-2">
      git push origin main
    </pre>
    <p className="text-gray-700 mt-2">
      This will upload your local commits to the <strong>main</strong> branch in the remote repository.
    </p>
  </div>
);

export default Push;
