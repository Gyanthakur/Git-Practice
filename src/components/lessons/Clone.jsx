import React from "react";

const Clone = () => {
  return (
    <div className="p-4  mt-20 md:mt-5 mb-5 sm:p-6 bg-white w-full max-w-3xl mx-auto rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Git Clone
      </h2>

      <p className="text-gray-700 mb-3">
        The <code className="bg-gray-100 px-1 rounded">git clone</code> command is used to create a copy of an existing repository from a remote source to your local machine.
        This is useful when you want to contribute to a project or set up a local working environment.
      </p>

      {/* Clone using HTTPS */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🌍 Clone using HTTPS:</h3>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git clone https://github.com/user/repository.git</code>
      </div>

      {/* Clone using SSH */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🔑 Clone using SSH (Recommended for contributors):</h3>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git clone git@github.com:user/repository.git</code>
      </div>

      {/* Clone with a specific branch */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">📁 Clone with a specific branch:</h3>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git clone -b &lt;branch-name&gt; &lt;repository-url&gt;</code>
      </div>

      {/* Clone with submodules */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🛠️ Clone with submodules:</h3>
      <p className="text-gray-700">
        If a repository contains submodules, use the following command to initialize them automatically:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git clone --recurse-submodules &lt;repository-url&gt;</code>
      </div>

      {/* Shallow Clone */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">🧹 Clone without history (Shallow Clone):</h3>
      <p className="text-gray-700">
        To speed up cloning for large repositories, you can fetch only the latest commit:
      </p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm overflow-x-auto">
        <code>git clone --depth=1 &lt;repository-url&gt;</code>
      </div>
    </div>
  );
};

export default Clone;
