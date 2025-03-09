import React, { useEffect, useRef, useState } from "react";

const Terminal = () => {
	const [commands, setCommands] = useState([]);
	const [input, setInput] = useState("");
	const terminalRef = useRef(null);

	const [history, setHistory] = useState([]);
	const [historyIndex, setHistoryIndex] = useState(-1);

	const responseColors = [
		"text-red-400",
		"text-yellow-400",
		"text-green-400",
		"text-red-400",
		"text-purple-400",
		"text-pink-400",
		"text-orange-400",
	];

	const gitCommands = {
		// help: `Available commands: help, clear, about, config, git init, git clone, git status, git add ., git commit, branch, checkout, merge, push, pull, stash, rebase, log, reset, clean, tag, remote, fetch`,
		help: `Available commands: 
  \n- help: Show all available commands
  \n- clear: Clears the terminal screen
  \n- about: Information about Git Learning CLI
  \n- config: Configure user settings (e.g., git config --global user.name "Your Name")
  \n- git init: Initialize a new Git repository
  \n- git clone: Clone an existing repository
  \n- git status: Show the working tree status
  \n- git add .: Stage all changes for the next commit
  \n- git commit: Commit staged changes (e.g., git commit -m "your message")
  \n- branch: List, create, or delete branches
  \n- checkout: Switch branches or restore files
  \n- merge: Merge branches together
  \n- push: Upload local changes to a remote repository
  \n- pull: Fetch and merge updates from a remote repository
  \n- stash: Temporarily save changes not ready to be committed
  \n- rebase: Reapply commits on top of another base commit
  \n- log: Show commit history
  \n- reset: Reset the repository state to a previous commit
  \n- clean: Remove untracked files from the working directory
  \n- tag: Create, list, or delete tags
  \n- remote: Manage remote repository connections
  \n- fetch: Download commits, branches, and tags from a remote repository`,
		clear: "",
		about: "This is a simulated Git terminal for learning purposes.",

		// Git Configuration
		"git config --global user.name":
			'Sets global username. Example: git config --global user.name "Your Name"',
		"git config --global user.email":
			'Sets global email. Example: git config --global user.email "your@email.com"',
		"git config --list": "Displays the current global configurations.",

		// Repository Commands
		"git init": "Initialized an empty Git repository.",
		"git clone": "Usage: git clone <repository_url> - Clones a repository.",
		"git remote add origin":
			"Usage: git remote add origin <url> - Adds a remote repository.",
		"git remote -v": "Lists all remote repositories.",
		"git remote remove":
			"Usage: git remote remove <name> - Removes a remote repository.",

		// Staging and Committing
		"git status":
			"Displays the current status of working directory and staging area.",
		"git add": "Usage: git add <file> - Stages a specific file.",
		"git add .": "Stages all changes.",
		"git reset": "Usage: git reset <file> - Unstages a file.",
		"git commit -m":
			'Usage: git commit -m "Commit message" - Commits staged changes with a message.',

		// Branching and Merging
		"git branch": "Lists all branches.",
		"git branch <branch_name>": "Creates a new branch.",
		"git checkout <branch_name>": "Switches to a branch.",
		"git switch <branch_name>": "Alternative for checkout.",
		"git checkout -b <branch_name>": "Creates and switches to a new branch.",
		"git merge <branch_name>": "Merges a branch into the current branch.",
		"git branch -d <branch_name>": "Deletes a local branch.",
		"git branch -D <branch_name>": "Force deletes a local branch.",

		// Working with Remote Repositories
		"git push origin <branch_name>": "Pushes changes to the remote repository.",
		"git push -u origin <branch_name>": "Pushes and sets upstream branch.",
		"git pull origin <branch_name>": "Pulls latest changes from remote.",
		"git fetch origin": "Fetches changes without merging.",
		"git remote prune origin": "Cleans up deleted branches from remote.",

		// Undoing Changes
		"git checkout -- <file>": "Discards changes in a file.",
		"git reset --hard": "Discards all local changes.",
		"git reset --hard HEAD~1": "Removes last commit permanently.",
		"git revert <commit_id>": "Reverts a commit by creating a new commit.",

		// Logs and History
		"git log": "Shows commit history.",
		"git log --oneline --graph": "Shows simplified history with graph.",
		"git reflog": "Shows reference log (history of HEAD changes).",
		"git diff": "Shows unstaged changes.",
		"git diff --staged": "Shows staged changes.",

		// Stashing Changes
		"git stash": "Saves uncommitted changes.",
		"git stash pop": "Applies and removes the last stash.",
		"git stash apply": "Applies the last stash but keeps it.",
		"git stash list": "Lists stashed changes.",
		"git stash drop": "Deletes the last stash.",
		"git stash clear": "Removes all stashed changes.",

		// Tagging Releases
		"git tag <tag_name>": "Creates a new tag.",
		"git tag -a <tag_name> -m":
			'Creates an annotated tag. Example: git tag -a v1.0 -m "Initial Release"',
		"git push origin --tags": "Pushes all tags.",
		"git tag -d <tag_name>": "Deletes a local tag.",
		"git push origin --delete <tag_name>": "Deletes a remote tag.",

		// Submodules
		"git submodule add <repo_url>": "Adds a submodule.",
		"git submodule update --init --recursive":
			"Initializes and updates submodules.",
		"git submodule deinit -f <submodule_path>": "Removes a submodule.",

		// Rebase and Cherry-Pick
		"git rebase <branch_name>": "Rebases current branch onto another.",
		"git rebase --abort": "Aborts an ongoing rebase.",
		"git rebase --continue": "Continues after resolving conflicts.",
		"git cherry-pick <commit_id>":
			"Applies a specific commit from another branch.",

		// Reset and Clean
		"git reset --soft HEAD~1": "Undoes last commit but keeps changes staged.",
		"git reset --mixed HEAD~1": "Undoes last commit and unstages changes.",
		// "git reset --hard HEAD~1": "Undoes last commit and removes changes permanently.",
		"git clean -f": "Removes untracked files.",
		"git clean -fd": "Removes untracked files and directories.",
	};

	// const handleCommand = (command) => {
	// 	if (command === "clear") {
	// 		setCommands([]);
	// 		return;
	// 	}
	// 	const response = gitCommands[command] || `Command not found: ${command}`;
	// 	setCommands([...commands, { command, response }]);
	// };

	// 	const gitCommands = {
	// 		help: `Available commands:
	//   \n- help: Show all available commands
	//   \n- clear: Clears the terminal screen
	//   \n- about: Information about Git Learning CLI
	//   \n- config: Configure user settings (e.g., git config --global user.name "Your Name")
	//   \n- git init: Initialize a new Git repository
	//   \n- git clone: Clone an existing repository
	//   \n- git status: Show the working tree status
	//   \n- git add .: Stage all changes for the next commit
	//   \n- git commit: Commit staged changes (e.g., git commit -m "your message")
	//   \n- branch: List, create, or delete branches
	//   \n- checkout: Switch branches or restore files
	//   \n- merge: Merge branches together
	//   \n- push: Upload local changes to a remote repository
	//   \n- pull: Fetch and merge updates from a remote repository
	//   \n- stash: Temporarily save changes not ready to be committed
	//   \n- rebase: Reapply commits on top of another base commit
	//   \n- log: Show commit history
	//   \n- reset: Reset the repository state to a previous commit
	//   \n- clean: Remove untracked files from the working directory
	//   \n- tag: Create, list, or delete tags
	//   \n- remote: Manage remote repository connections
	//   \n- fetch: Download commits, branches, and tags from a remote repository`,

	// 		clear: "Clears the terminal screen.",
	// 		about: "Git Learning CLI - Learn Git commands interactively!",
	// 		config: "Configures user settings: git config --global user.name 'Your Name'",
	// 		"git init": "Initializes a new Git repository.",
	// 		"git clone": "Clones an existing repository from a remote source.",
	// 		"git status": "Shows the status of changes as untracked, modified, or staged.",
	// 		"git add .": "Stages all changes for the next commit.",
	// 		"git commit": `Commits staged changes: git commit -m "your message"`,
	// 		branch: "Lists, creates, or deletes branches.",
	// 		checkout: "Switches branches or restores files.",
	// 		merge: "Merges branches together.",
	// 		push: "Uploads local changes to a remote repository.",
	// 		pull: "Fetches and merges updates from a remote repository.",
	// 		stash: "Temporarily saves changes that are not ready to be committed.",
	// 		rebase: "Reapplies commits on top of another base commit.",
	// 		log: "Shows the commit history.",
	// 		reset: "Resets the repository state to a previous commit.",
	// 		clean: "Removes untracked files from the working directory.",
	// 		tag: "Creates, lists, or deletes tags.",
	// 		remote: "Manages remote repository connections.",
	// 		fetch: "Downloads commits, branches, and tags from a remote repository."
	// 	  };

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [commands]);

	const handleCommand = (command) => {
		if (command === "clear") {
			setCommands([]);
			return;
		}

		// Check if the command exists
		const isValidCommand = gitCommands[command];

		// Set response based on validity
		const response = isValidCommand
			? gitCommands[command]
			: `⚠️ Invalid command: ${command}\n💡 Type "help" to see available commands.`;

		// Choose a color: Green for valid, Red for invalid
		const responseColor = isValidCommand
			? "text-green-600"
			: "text-red-600 font-semibold";

		setCommands([...commands, { command, response, color: responseColor }]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim()) {
			handleCommand(input.trim());
			setHistory([...history, input.trim()]); // Save command in history
			setHistoryIndex(-1); // Reset index after new command
		}
		setInput("");
	};

	const handleKeyDown = (e) => {
		if (e.key === "ArrowUp") {
			// Go back in history
			if (history.length > 0 && historyIndex < history.length - 1) {
				const newIndex = historyIndex + 1;
				setHistoryIndex(newIndex);
				setInput(history[history.length - 1 - newIndex]);
			}
		} else if (e.key === "ArrowDown") {
			// Go forward in history
			if (historyIndex > 0) {
				const newIndex = historyIndex - 1;
				setHistoryIndex(newIndex);
				setInput(history[history.length - 1 - newIndex]);
			} else {
				setHistoryIndex(-1);
				setInput("");
			}
		}
	};

	return (
		<div
			ref={terminalRef}
			className="bg-black w-full h-screen text-green-400 p-4 overflow-y-auto"
		>
			<div className="mb-2">
				{commands.map((cmd, index) => (
					<div key={index}>
						<p className="text-blue-500">$ {cmd.command}</p>
						<p className={cmd.color}>{cmd.response}</p>
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit} className="flex">
				<span className="text-white mr-2 mb-10">$</span>
				<input
					type="text"
					onKeyDown={handleKeyDown}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="bg-black text-green-400 mb-10 outline-none flex-1"
					autoFocus
				/>
			</form>
		</div>
	);
};

export default Terminal;
