import React from "react";

const GitCommandsLesson = () => {
	return (
		<div className="p-5 bg-gray-100 min-h-screen">
			<h1 className="text-2xl font-bold mb-4">Git Commands Learning Guide</h1>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">1. Configuration Commands</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --list
git config --global core.editor "code --wait"`}
				</pre>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">2. Repository Commands</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git init
git clone <repository_url>
git remote add origin <url>
git remote -v
git remote remove <name>`}
				</pre>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">3. Staging and Committing</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git status
git add <file>
git add .
git reset <file>
git commit -m "Commit message"
git commit --amend -m "New message"`}
				</pre>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">4. Branching and Merging</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git branch
git branch <branch_name>
git checkout <branch_name>
git switch <branch_name>
git checkout -b <branch_name>
git merge <branch_name>
git branch -d <branch_name>`}
				</pre>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">
					5. Working with Remote Repositories
				</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git push origin <branch_name>
git push -u origin <branch_name>
git pull origin <branch_name>
git fetch origin
git remote prune origin`}
				</pre>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">6. Undoing Changes</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git checkout -- <file>
git reset --hard
git reset --hard HEAD~1
git revert <commit_id>`}
				</pre>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold">7. Logs and History</h2>
				<pre className="bg-white p-3 rounded shadow-md overflow-x-auto">
					{`git log
git log --oneline --graph
git reflog
git diff
git diff --staged`}
				</pre>
			</section>
		</div>
	);
};

export default GitCommandsLesson;
