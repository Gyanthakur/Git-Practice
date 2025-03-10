// import React from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; 


// const GitCommandsLesson = () => {
//   return (
//     <div className="p-3  ml-2 md:ml-32 mr-2  mt-20 md:mt-5 mb-5  sm:p-5 bg-gray-100 min-h-screen">
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
//         Git Commands Learning Guide
//       </h1>

//       <div className="w-full max-w-[90%] sm:max-w-3xl mx-auto space-y-6 sm:space-y-8">
//         {sections.map(({ title, commands }, index) => (
//           <section
//             key={index}
//             className="bg-white p-3 sm:p-5 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 group-hover:scale-105 md:hover:scale-105"
//           >
//             <h2 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
//               {title}
//             </h2>
//             <pre className="bg-gray-100 p-3 sm:p-4 rounded-md shadow-inner overflow-x-auto whitespace-pre-wrap break-words text-sm sm:text-base text-gray-700">
//               {commands}
//             </pre>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// const sections = [
//   {
//     title: "1. Configuration Commands",
//     commands: `git config --global user.name "Your Name"
// git config --global user.email "your@email.com"
// git config --list
// git config --global core.editor "code --wait"`
//   },
//   {
//     title: "2. Repository Commands",
//     commands: `git init
// git clone <repository_url>
// git remote add origin <url>
// git remote -v
// git remote remove <name>`
//   },
//   {
//     title: "3. Staging and Committing",
//     commands: `git status
// git add <file>
// git add .
// git reset <file>
// git commit -m "Commit message"
// git commit --amend -m "New message"`
//   },
//   {
//     title: "4. Branching and Merging",
//     commands: `git branch
// git branch <branch_name>
// git checkout <branch_name>
// git switch <branch_name>
// git checkout -b <branch_name>
// git merge <branch_name>
// git branch -d <branch_name>`
//   },
//   {
//     title: "5. Working with Remote Repositories",
//     commands: `git push origin <branch_name>
// git push -u origin <branch_name>
// git pull origin <branch_name>
// git fetch origin
// git remote prune origin`
//   },
//   {
//     title: "6. Undoing Changes",
//     commands: `git checkout -- <file>
// git reset --hard
// git reset --hard HEAD~1
// git revert <commit_id>`
//   },
//   {
//     title: "7. Logs and History",
//     commands: `git log
// git log --oneline --graph
// git reflog
// git diff
// git diff --staged`
//   }
// ];

// export default GitCommandsLesson;





import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Dark theme for highlighting

const GitCommandsLesson = () => {
  return (
    <div className="p-4  sm:p-6 max-w-[100vw] md:p-8 lg:p-10 xl:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        Git Commands Learning Guide
      </h1>

      <div className="w-full max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-6">
        {sections.map(({ title, commands }, index) => (
          <section
            key={index}
            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              {title}
            </h2>
            <div className="relative">
              <div className="overflow-x-auto rounded-md bg-gray-900 p-3 sm:p-4">
                <SyntaxHighlighter
                  language="bash"
                  style={oneDark}
                  customStyle={{
                    fontSize: "0.85rem", // Adaptive font size
                    width: "100%",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap", // Wrap long lines
                    wordBreak: "break-word",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                  wrapLongLines={true} // Ensures wrapping on small screens
                >
                  {commands}
                </SyntaxHighlighter>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const sections = [
  {
    title: "1. Configuration Commands",
    commands: `git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --list
git config --global core.editor "code --wait"`
  },
  {
    title: "2. Repository Commands",
    commands: `git init
git clone <repository_url>
git remote add origin <url>
git remote -v
git remote remove <name>`
  },
  {
    title: "3. Staging and Committing",
    commands: `git status
git add <file>
git add .
git reset <file>
git commit -m "Commit message"
git commit --amend -m "New message"`
  },
  {
    title: "4. Branching and Merging",
    commands: `git branch
git branch <branch_name>
git checkout <branch_name>
git switch <branch_name>
git checkout -b <branch_name>
git merge <branch_name>
git branch -d <branch_name>`
  },
  {
    title: "5. Working with Remote Repositories",
    commands: `git push origin <branch_name>
git push -u origin <branch_name>
git pull origin <branch_name>
git fetch origin
git remote prune origin`
  },
  {
    title: "6. Undoing Changes",
    commands: `git checkout -- <file>
git reset --hard
git reset --hard HEAD~1
git revert <commit_id>`
  },
  {
    title: "7. Logs and History",
    commands: `git log
git log --oneline --graph
git reflog
git diff
git diff --staged`
  }
];

export default GitCommandsLesson;
