const Rebase = () => (
  <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
      git rebase
    </h2>
    <p className="text-gray-700 leading-relaxed">
      The <span className="font-semibold">git rebase</span> command is used to integrate changes 
      from one branch into another by moving or "reapplying" commits on top of a different base branch.
      It helps maintain a **clean and linear commit history**.
    </p>
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Usage:</h3>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>git rebase &lt;branch-name&gt;</strong> – Moves your current branch’s commits on top of the specified branch.</li>
      <li><strong>git rebase -i HEAD~n</strong> – Interactive rebase for the last <code>n</code> commits.</li>
      <li><strong>git rebase --onto target base feature</strong> – Rebases `feature` onto `target`, skipping `base`.</li>
    </ul>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-3">
      git rebase &lt;branch-name&gt;
    </pre>
    <h3 className="text-lg font-semibold mt-4 text-gray-800">Example:</h3>
    <p className="text-gray-700">
      Suppose you are on a feature branch and want to rebase onto <strong>main</strong>:
    </p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-inner text-sm text-gray-800 mt-2">
      git checkout feature-branch
      git rebase main
    </pre>
    <p className="text-gray-700 mt-2">
      This reapplies all commits from <strong>feature-branch</strong> on top of the latest <strong>main</strong> branch commits.
    </p>
    <h3 className="text-lg font-semibold mt-4 text-red-500">⚠️ Warning:</h3>
    <p className="text-gray-700">
      Avoid rebasing public branches as it rewrites history, which can cause conflicts for other collaborators.
    </p>
  </div>
);

export default Rebase;
