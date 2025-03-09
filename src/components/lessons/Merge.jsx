const Merge = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
      git merge
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Merges another branch into the current branch.
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git merge &lt;branch-name&gt;
    </pre>
  </div>
);

export default Merge;
