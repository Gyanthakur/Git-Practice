

import { useState } from "react";
import { BookOpen, List, Info,  } from "phosphor-react";
import { Link } from "react-router-dom";
import { ArrowRight, HomeIcon } from "lucide-react";

// Sample SiteOverview component (since it was imported in original code)
const SiteOverview = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Welcome to Git Learning Platform</h1>
    <p className="mb-4">This interactive platform will help you master Git version control through structured lessons.</p>
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
      <p>Select a lesson from the sidebar to begin your Git journey.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
        <h3 className="font-medium text-green-800 mb-2">For Beginners</h3>
        <p>Start with "Introduction to Git" and follow the lessons in order.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
        <h3 className="font-medium text-purple-800 mb-2">For Experienced Users</h3>
        <p>Jump to specific commands or workflows that you want to refresh.</p>
      </div>
    </div>
  </div>
);

const Lesson = () => {
  const [lessonId, setLessonId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const lessons = [
      {
        id: "git-intro",
        title: "Introduction to Git",
        content: "Git is a distributed version control system (VCS) that allows developers to track changes in their codebase. It was created by Linus Torvalds in 2005 for managing Linux kernel development. Unlike centralized VCS like SVN, Git provides a local repository for each developer, enabling offline work and efficient collaboration. With Git, developers can create branches, merge changes, and maintain a complete history of every modification made to the codebase. This ensures project integrity, easy rollback to previous versions, and seamless teamwork. Git's speed and lightweight nature make it ideal for software development, whether working solo or in large teams. Additionally, Git enables parallel development by allowing multiple developers to work on different branches without interfering with each other. Understanding Git is essential for efficient version control, ensuring software projects remain organized and manageable."
      },
      {
        id: "git-install",
        title: "Installing Git",
        content: "To start using Git, you need to install it on your system. The installation process varies depending on the operating system. On Windows, Git can be installed using the official Git for Windows installer, which includes Git Bash and Git GUI. For macOS, you can use Homebrew (`brew install git`) or download the package from the official Git website. On Linux, Git is usually included in package managers like `apt` (`sudo apt install git`) for Debian-based distributions or `dnf/yum` for Red Hat-based systems. Once installed, verify the installation using `git --version`. Installing Git also sets up essential tools like Git Bash and Git Credential Manager, making it easier to interact with repositories. Configuring Git after installation is crucial to ensure smooth version control workflows. This includes setting up your user identity with `git config --global user.name` and `git config --global user.email`, which helps track commits effectively."
      },
      {
        id: "git-setup",
        title: "Setting Up Git",
        content: "Once Git is installed, you need to configure it before using it effectively. The first step is setting your username and email, as these details are recorded with every commit. Run `git config --global user.name 'Your Name'` and `git config --global user.email 'youremail@example.com'` to set these globally. The `--global` flag ensures that the settings apply to all repositories on your system. If you need project-specific configurations, remove the `--global` flag. Additionally, you can set up a default text editor (`git config --global core.editor 'vim'`) and configure color output for better readability (`git config --global color.ui auto`). Advanced users may want to enable credential caching for HTTPS authentication using `git config --global credential.helper cache`. Finally, verify your configuration with `git config --list`. Proper Git setup ensures a smooth development workflow, preventing identity-related commit issues and streamlining repository interactions."
      },
      {
        id: "git-init",
        title: "git init",
        content: "The `git init` command initializes a new Git repository in a project directory. Running this command inside a folder creates a hidden `.git` directory, which contains all version control data, including commit history and branch information. The syntax is simple: navigate to the project directory (`cd project-folder`) and run `git init`. This makes the folder a Git repository, allowing you to start tracking changes. If you accidentally initialize Git in the wrong directory, you can remove the `.git` folder to revert the process. After initialization, files can be staged (`git add .`) and committed (`git commit -m 'Initial commit'`). Using `git status`, you can check the repository’s state. If you’re working with a remote repository, linking it using `git remote add origin <repository-url>` allows pushing changes to GitHub or another remote service. `git init` is a fundamental command for starting any Git-based project and lays the groundwork for version control."
      },
      {
        id: "git-clone",
        title: "git clone",
        content: "The `git clone` command is used to copy an existing repository from a remote source to your local machine. It allows developers to contribute to projects hosted on GitHub, GitLab, or Bitbucket by making a local copy of the repository. The basic syntax is `git clone <repository-url>`, where `<repository-url>` is the HTTPS or SSH link of the remote repository. This command downloads all project files, commit history, and branches, enabling seamless collaboration. By default, `git clone` creates a directory with the repository’s name, but you can specify a different folder name (`git clone <repository-url> my-folder`). Cloning also automatically sets up a remote connection called `origin`, allowing you to pull (`git pull`) and push (`git push`) changes easily. If you're working in a team, always clone repositories instead of manually copying files to ensure version control integrity and streamlined collaboration."
      },
      {
        id: "git-status",
        title: "git status",
        content: "`git status` is a vital command in Git that helps developers understand the state of their working directory and staging area. It shows which files have been modified, staged for commit, or remain untracked. Running `git status` provides details about changes that need to be committed, files that are not being tracked, and whether the working directory is clean. This command is crucial before making commits, as it ensures that all necessary modifications are included. If changes are detected, Git will suggest actions like staging files with `git add` or discarding changes using `git checkout -- <file>`. Additionally, `git status` helps prevent accidental commits by highlighting unstaged changes. Regularly using `git status` improves workflow efficiency, making it easier to manage changes and maintain a well-organized repository."
      },
      {
        id: "git-add",
        title: "git add",
        content: "The `git add` command is used to stage changes before committing them to the repository. In Git, modifications to files are not automatically tracked; they must be explicitly added using this command. The basic syntax is `git add <file>` to stage a single file or `git add .` to stage all changes in the working directory. Staging files allows developers to review modifications before making a commit, reducing the risk of committing unintended changes. If you modify a file after adding it, you must run `git add` again to update the staged version. The staging area acts as an intermediate step between working on a file and making it a permanent part of the project’s history. By using `git add`, developers can organize their commits efficiently, ensuring that only relevant changes are included. This command is essential for maintaining a structured and meaningful commit history."
      },
      {
        id: "git-commit",
        title: "git commit",
        content: "`git commit` records changes to the repository. After staging files with `git add`, running `git commit -m 'message'` creates a snapshot of the project at that moment. The commit message should describe the changes clearly to maintain a readable project history. Unlike saving a file, a commit in Git allows reverting back to previous versions if needed. To include all staged changes in a commit, use `git commit -a -m 'message'`. Each commit generates a unique identifier (SHA-1 hash), which helps track modifications over time. Best practices include writing meaningful commit messages and making small, atomic commits for better traceability. Using `git log`, you can view commit history, while `git show <commit-id>` displays details about a specific commit. `git commit` is one of the most fundamental Git commands, ensuring proper version control and project documentation."
      },
      {
        id: "git-log",
        title: "git log",
        content: "`git log` is a command used to view the commit history of a Git repository. It displays a chronological list of commits, including details such as the commit hash, author, date, and commit message. By default, `git log` shows the history in descending order (most recent commits first). You can customize the output using options like `git log --oneline` (shows a concise log), `git log --graph` (visualizes branch structure), or `git log --author='name'` (filters commits by author). If you need to see changes in a commit, use `git show <commit-id>`. Git log helps developers track changes over time, understand past modifications, and find specific commits when debugging. For a cleaner and more readable history, use `git log --pretty=format:'%h - %an: %s'` to display abbreviated commit hashes with author names and messages."
      },
      {
        id: "git-branch",
        title: "git branch",
        content: "`git branch` is used to create, list, and delete branches in a Git repository. Branching allows developers to work on different features or bug fixes without affecting the main codebase. To create a new branch, use `git branch <branch-name>`. To switch to a branch, use `git checkout <branch-name>` or `git switch <branch-name>` (recommended for newer versions). Running `git branch` without arguments lists all branches, with the current branch marked by an asterisk (*). To delete a branch, use `git branch -d <branch-name>` (safe deletion) or `git branch -D <branch-name>` (force delete). Managing branches efficiently helps teams collaborate and keep development organized, enabling parallel work on multiple features."
      },
      {
        id: "git-checkout",
        title: "git checkout",
        content: "`git checkout` is used to switch between branches or restore files to a previous state. The command `git checkout <branch-name>` moves the working directory to a different branch. To create and switch to a new branch in one step, use `git checkout -b <new-branch>`. Additionally, `git checkout <commit-hash>` allows you to view an older version of the project in a detached HEAD state. If you accidentally modify a file and need to revert it, running `git checkout -- <file>` restores it to the last committed version. While `git checkout` is powerful, newer versions of Git recommend using `git switch` for branch changes and `git restore` for file restoration."
      },
      {
        id: "git-merge",
        title: "git merge",
        content: "`git merge` integrates changes from one branch into another. This is commonly used to merge a feature branch into `main` or `develop`. First, switch to the target branch (`git checkout main`), then merge with `git merge <branch-name>`. If conflicts arise, Git will mark conflicting sections in the affected files, requiring manual resolution before committing. Merging can be done with strategies like fast-forward (`git merge --ff-only`) when no divergent history exists or a three-way merge when branches have diverged. Proper merging helps maintain a clean and structured repository history."
      },
      {
        id: "git-remote",
        title: "git remote",
        content: "`git remote` manages connections to remote repositories. It allows developers to collaborate by pushing and pulling changes. Running `git remote -v` lists configured remotes. To add a new remote, use `git remote add origin <repository-url>`. If the remote URL changes, update it with `git remote set-url origin <new-url>`. To remove a remote, use `git remote remove <name>`. Managing remotes effectively ensures smooth collaboration with team members and integration with platforms like GitHub or GitLab."
      },
      {
        id: "git-push",
        title: "git push",
        content: "`git push` uploads local commits to a remote repository. It syncs changes, making them available to team members. The basic syntax is `git push origin <branch-name>`. If working on a new branch, use `git push -u origin <branch-name>` to set it as the upstream branch for future pushes. If multiple contributors are working on the same branch, it’s recommended to pull (`git pull`) before pushing to avoid conflicts. Force pushing (`git push --force`) should be used cautiously, as it overwrites history."
      },
      {
        id: "git-pull",
        title: "git pull",
        content: "`git pull` fetches changes from a remote repository and merges them into the current branch. It is a combination of `git fetch` (retrieving remote updates) and `git merge`. Running `git pull origin main` ensures the local branch is up to date with remote changes. If conflicts arise, they must be resolved manually before committing. An alternative approach is `git pull --rebase`, which keeps the commit history linear by replaying local commits on top of the fetched changes."
      },
      {
        id: "git-stash",
        title: "git stash",
        content: "`git stash` temporarily saves uncommitted changes without committing them. This is useful when switching branches or pulling updates without losing ongoing work. Running `git stash` stores changes in a temporary stack, allowing you to restore them later with `git stash pop`. To view stashed changes, use `git stash list`. If you need to apply a specific stash entry, use `git stash apply stash@{index}`. Stashing helps keep the working directory clean while handling context switches efficiently."
      },
      {
        id: "git-rebase",
        title: "git rebase",
        content: "`git rebase` is used to move or rewrite commits onto another branch. Unlike `git merge`, which creates a new merge commit, rebasing applies commits sequentially on top of the target branch, maintaining a linear history. The syntax is `git rebase <branch-name>`. If conflicts occur, Git pauses the process for manual resolution. Interactive rebasing (`git rebase -i HEAD~n`) allows modifying, reordering, or squashing commits. While powerful, rebasing should be used cautiously to avoid rewriting shared history."
      },
      {
        id: "git-cherry-pick",
        title: "git cherry-pick",
        content: "`git cherry-pick` applies a specific commit from one branch to another. This is useful for selectively transferring changes without merging entire branches. The command `git cherry-pick <commit-hash>` applies the specified commit to the current branch. If conflicts occur, they must be resolved before finalizing the operation. Cherry-picking is valuable when bug fixes or isolated features need to be integrated without merging unrelated changes."
      },
      {
        id: "git-commands",
        title: "Essential Git Commands",
        content: "Git provides a wide range of commands for version control. Some essential ones include `git init` (initialize repository), `git clone` (copy repository), `git add` (stage changes), `git commit` (save changes), `git push` (upload commits), `git pull` (fetch updates), `git merge` (combine branches), and `git branch` (manage branches). Understanding these fundamental commands is crucial for effective Git usage."
      },
      {
        id: "git-workflow",
        title: "Git Workflow & Branching",
        content: "A good Git workflow ensures efficient collaboration and version control. The Git Feature Branch Workflow involves working on feature branches before merging into `main`. The Gitflow Workflow includes structured branches like `develop`, `feature`, `release`, and `hotfix`. The GitHub Flow is simpler, with short-lived feature branches merged via pull requests. Choosing the right workflow depends on project needs and team collaboration."
      },
      {
        id: "github-intro",
        title: "GitHub & Repositories",
        content: "GitHub is a platform for hosting Git repositories, enabling developers to collaborate on code. It allows repository management, issue tracking, and pull requests. Users can clone (`git clone <repo-url>`), fork repositories for independent changes, and use GitHub Actions for automation. Understanding GitHub’s repository features is key to modern software development."
      },
      {
        id: "github-collab",
        title: "Collaborating on GitHub",
        content: "GitHub enables collaboration through forks, pull requests, and issues. Developers fork repositories to contribute, push changes to feature branches, and open pull requests for review. Code reviews ensure quality before merging. GitHub Issues track bugs and feature requests, while discussions allow brainstorming. Mastering GitHub collaboration is crucial for open-source and team projects."
      }
    ];
    
    
  
  // Group lessons by category
  const lessonCategories = {
    "Git Basics": lessons.slice(0, 9),
    "Git Advanced": lessons.slice(9, 17),
    "GitHub": lessons.slice(17, 20)
  };
  
  const currentLesson = lessons.find((l) => l.id === lessonId);
  const currentIndex = lessons.findIndex((l) => l.id === lessonId);
  const nextLesson = currentIndex >= 0 && currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className=" text-blue-500 p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-1 rounded hover:bg-gray-700 transition-colors"
          >
            <List size={24} />
          </button>
          <h1 className="text-xl font-semibold">Git Learning Platform</h1>
        </div>
        <button 
          onClick={() => setLessonId(null)} 
          className="flex items-center text-sm  hover:bg-gray-600 px-3 py-1 rounded transition-colors"
        >
          <Link to="/">
          <HomeIcon size={16} className="mr-1" />
           
          </Link>
        </button>
      </header>
      
      <div className="flex flex-1 overflow-hidden">

        
        {/* Sidebar */}
        <aside 

          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } bg-gray-800 text-white transition-all duration-300 overflow-hidden flex flex-col`}
        >
          
          <div className="p-4 flex-1 overflow-y-auto">
            {Object.entries(lessonCategories).map(([category, categoryLessons]) => (
              <div key={category} className="mb-6">
                <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">{category}</h2>
                <ul className="space-y-1">
                  {categoryLessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className={`cursor-pointer p-2 text-sm rounded-md transition-colors ${
                        lessonId === lesson.id ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                      }`}
                      onClick={() => setLessonId(lesson.id)}
                    >
                      {lesson.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
        {/* <div className="flex items-center justify-end">
          
        </div> */}
          <div className="max-w-4xl mx-auto p-6">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-1 rounded hover:bg-gray-700 transition-colors"
          >
            <List size={24} />
          </button>
          {/* <h1 className="text-xl font-semibold">Git Learning Platform</h1> */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              {lessonId ? (
                <div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <BookOpen size={28} className="mr-3 text-blue-600" />
                      {currentLesson?.title}
                    </h2>
                    
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {currentLesson?.content}
                      </p>
                    </div>
                  </div>
                  
                  {/* Lesson Navigation */}
                  <div className="bg-gray-50 p-4 border-t flex justify-between items-center">
                    <button 
                      onClick={() => setLessonId(null)} 
                      className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                    >
                      Back to Overview
                    </button>
                    
                    {nextLesson && (
                      <button 
                        onClick={() => setLessonId(nextLesson.id)} 
                        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded flex items-center text-sm font-medium"
                      >
                        Next Lesson: {nextLesson.title}
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <SiteOverview />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lesson;