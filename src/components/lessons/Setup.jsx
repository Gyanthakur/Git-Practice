const Setup = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
      Setting Up Git
    </h2>
    
    <p className="text-gray-700 leading-relaxed">
      Before using Git, you need to configure it with your username and email. This is necessary 
      for identifying your commits.
    </p>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Basic Configuration:</h3>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git config --global user.name "Your Name"{"\n"}
      git config --global user.email "youremail@example.com"
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Verify Configuration:</h3>
    <p className="text-gray-700">
      To check your current Git settings, run:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git config --list
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-gray-800">Set Default Editor:</h3>
    <p className="text-gray-700">
      If you use VS Code, set it as the default editor:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git config --global core.editor "code --wait"
    </pre>

    <h3 className="text-lg font-semibold mt-4 text-red-500">⚠️ Important:</h3>
    <p className="text-gray-700">
      If you ever need to reset your Git configuration, you can do:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800">
      git config --global --unset user.name{"\n"}
      git config --global --unset user.email
    </pre>
  </div>
);

export default Setup;
