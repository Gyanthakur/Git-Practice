const Setup = () => (
    <div>
      <h2 className="text-xl font-bold">Setting Up Git</h2>
      <p>
        After installation, configure Git with your username and email:
      </p>
      <pre className="bg-gray-200 p-2 rounded">
        git config --global user.name "Your Name" <br />
        git config --global user.email "youremail@example.com"
      </pre>
    </div>
  );
  export default Setup;
  