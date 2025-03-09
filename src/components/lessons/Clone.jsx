import React from "react";

const Clone = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Git Clone
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git clone</code> command is used to create a copy of an existing repository from a remote source to your local machine.
        This is useful when you want to contribute to a project or set up a local working environment.
      </p>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🌍 Clone using HTTPS:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git clone https://github.com/user/repository.git
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔑 Clone using SSH (Recommended for contributors):</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git clone git@github.com:user/repository.git
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">📁 Clone with a specific branch:</h3>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git clone -b &lt;branch-name&gt; &lt;repository-url&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🛠️ Clone with submodules:</h3>
      <p className="text-gray-700">
        If a repository contains submodules, use the following command to initialize them automatically:
      </p>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git clone --recurse-submodules &lt;repository-url&gt;
      </pre>

      <h3 className="text-lg font-semibold mt-4 text-gray-800">🧹 Clone without history (Shallow Clone):</h3>
      <p className="text-gray-700">
        To speed up cloning for large repositories, you can fetch only the latest commit:
      </p>
      <pre className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm">
        git clone --depth=1 &lt;repository-url&gt;
      </pre>
    </div>
  );
};

export default Clone;
