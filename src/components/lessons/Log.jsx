const Log = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-500 to-blue-600 text-transparent bg-clip-text">
      git log
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Displays the commit history.
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git log
    </pre>
  </div>
);

export default Log;
