const Setup = () => (
  <div className="p-5 sm:p-6 mt-20 md:mt-5 mb-5 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
      Setting Up Git
    </h2>
    
    <p className="text-gray-700 leading-relaxed">
      Before using Git, you need to configure it with your username and email. This is necessary 
      for identifying your commits.
    </p>

    {/* Basic Configuration */}
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Basic Configuration:</h3>
    <div className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 overflow-x-auto">
      <code>
        git config --global user.name "Your Name" <br />
        git config --global user.email "youremail@example.com"
      </code>
    </div>

    {/* Verify Configuration */}
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Verify Configuration:</h3>
    <p className="text-gray-700">
      To check your current Git settings, run:
    </p>
    <div className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 overflow-x-auto">
      <code>git config --list</code>
    </div>

    {/* Set Default Editor */}
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Set Default Editor:</h3>
    <p className="text-gray-700">
      If you use VS Code, set it as the default editor:
    </p>
    <div className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 overflow-x-auto">
      <code>git config --global core.editor "code --wait"</code>
    </div>

    {/* Important Warning */}
    <h3 className="text-lg font-semibold mt-4 text-red-500">⚠️ Important:</h3>
    <p className="text-gray-700">
      If you ever need to reset your Git configuration, you can do:
    </p>
    <div className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 overflow-x-auto">
      <code>
        git config --global --unset user.name <br />
        git config --global --unset user.email
      </code>
    </div>
  </div>
);

export default Setup;
