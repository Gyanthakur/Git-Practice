const Pull = () => (
  <div className="p-5 ml-2 md:ml-5 mr-2  mt-20 md:mt-5 mb-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-teal-600 text-transparent bg-clip-text">
      git pull
    </h2>
    <p className="text-gray-700 leading-relaxed">
      The <span className="font-semibold">git pull</span> command is used to fetch and integrate changes 
      from a remote repository into the current branch. It is a combination of 
      <span className="font-semibold"> git fetch</span> (which downloads changes) and 
      <span className="font-semibold"> git merge</span> (which integrates those changes).  
    </p>
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Usage:</h3>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>git pull origin &lt;branch-name&gt;</strong> – Fetches and merges the latest changes from the specified branch.</li>
      <li><strong>git pull --rebase origin &lt;branch-name&gt;</strong> – Fetches changes and rebases your local commits on top of them.</li>
    </ul>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-3">
      git pull origin &lt;branch-name&gt;
    </pre>
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Example:</h3>
    <p className="text-gray-700">
      If you're working on the <span className="font-mono bg-gray-200 px-1 rounded">main</span> branch and want to update your local copy:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-2">
      git pull origin main
    </pre>
    <p className="text-gray-700 mt-2">
      This will retrieve the latest updates from the remote <strong>main</strong> branch and merge them into your local branch.
    </p>
  </div>
);

export default Pull;
