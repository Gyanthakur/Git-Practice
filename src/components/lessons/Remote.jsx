const Remote = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
      git remote
    </h2>
    <p className="text-gray-700 leading-relaxed">
      The <span className="font-semibold">git remote</span> command is used to manage remote repositories. 
      It allows you to view, add, rename, or remove connections to remote repositories.
    </p>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Basic Commands:</h3>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>git remote -v</strong> – Lists all remote repositories with their URLs.</li>
      <li><strong>git remote add origin &lt;url&gt;</strong> – Adds a new remote repository named <code>origin</code>.</li>
      <li><strong>git remote remove &lt;name&gt;</strong> – Removes the specified remote connection.</li>
      <li><strong>git remote rename &lt;old-name&gt; &lt;new-name&gt;</strong> – Renames an existing remote.</li>
    </ul>

    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-3">
      git remote -v
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Example:</h3>
    <p className="text-gray-700">
      Adding a new remote repository named "origin":
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-2">
      git remote add origin https://github.com/user/repository.git
    </pre>

    <p className="text-gray-700 mt-2">
      This command links your local repository to a remote GitHub repository.
    </p>

    <h3 className="text-lg font-semibold mt-4 text-red-500">⚠️ Important:</h3>
    <p className="text-gray-700">
      If you need to update the remote URL, use:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-2">
      git remote set-url origin &lt;new-url&gt;
    </pre>
  </div>
);

export default Remote;
