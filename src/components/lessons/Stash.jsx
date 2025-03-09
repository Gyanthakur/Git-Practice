const Stash = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
      git stash
    </h2>

    <p className="text-gray-700 leading-relaxed">
      `git stash` allows you to temporarily save changes that are not ready to be committed. 
      This is useful when you need to switch branches or work on something else without losing 
      your current changes.
    </p>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Basic Stash Command:</h3>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git stash
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">View Stashed Changes:</h3>
    <p className="text-gray-700">
      To see a list of all saved stashes:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git stash list
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Apply the Most Recent Stash:</h3>
    <p className="text-gray-700">
      To reapply the most recent stash without removing it:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git stash apply
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Apply and Remove the Stash:</h3>
    <p className="text-gray-700">
      If you want to apply the stash and remove it from the stash list:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git stash pop
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-red-500">⚠️ Deleting a Stash:</h3>
    <p className="text-gray-700">
      To remove a specific stash, use:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git stash drop stash@{`{index}`}
    </pre>
    <p className="text-gray-700">
      Or remove all stashes at once:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git stash clear
    </pre>
  </div>
);

export default Stash;
