import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";

export default function Sidebar({ onSelectLesson }) {
	const [openSections, setOpenSections] = useState({});
	const [selectedLesson, setSelectedLesson] = useState("");
	const [completedLessons, setCompletedLessons] = useState({});
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Lesson categories and topics
	const lessons = {
		"Getting Started": [
			{ id: "intro", title: "Introduction to Git" },
			{ id: "install", title: "Installing Git" },
			{ id: "setup", title: "Setting Up Git" },
		],
		"Basic Commands": [
			{ id: "init", title: "git init" },
			{ id: "clone", title: "git clone" },
			{ id: "status", title: "git status" },
		],
		"Working with Commits": [
			{ id: "add", title: "git add" },
			{ id: "commit", title: "git commit" },
			{ id: "log", title: "git log" },
		],
		"Branching & Merging": [
			{ id: "branch", title: "git branch" },
			{ id: "checkout", title: "git checkout" },
			{ id: "merge", title: "git merge" },
		],
		"Remote Repositories": [
			{ id: "remote", title: "git remote" },
			{ id: "push", title: "git push" },
			{ id: "pull", title: "git pull" },
		],
		"Advanced Git": [
			{ id: "stash", title: "git stash" },
			{ id: "rebase", title: "git rebase" },
			{ id: "cherry-pick", title: "git cherry-pick" },
			{ id: "all_cammands", title: "Git cammands" },
		],
	};

	// Load completed lessons from localStorage on component mount
	useEffect(() => {
		const savedCompletedLessons = localStorage.getItem("completedLessons");
		if (savedCompletedLessons) {
			setCompletedLessons(JSON.parse(savedCompletedLessons));
		}

		// Load last selected lesson
		const lastSelectedLesson = localStorage.getItem("selectedLesson");
		if (lastSelectedLesson) {
			setSelectedLesson(lastSelectedLesson);
			if (onSelectLesson) onSelectLesson(lastSelectedLesson);
		}

		// Load open sections
		const savedOpenSections = localStorage.getItem("openSections");
		if (savedOpenSections) {
			setOpenSections(JSON.parse(savedOpenSections));
		} else {
			// Default open the first section if nothing saved
			setOpenSections({ "Getting Started": true });
		}
	}, [onSelectLesson]);

	// Save open sections to localStorage when they change
	useEffect(() => {
		localStorage.setItem("openSections", JSON.stringify(openSections));
	}, [openSections]);

	const toggleSection = (section) => {
		setOpenSections((prev) => {
			const newState = { ...prev, [section]: !prev[section] };
			return newState;
		});
	};

	const handleLessonSelect = (lessonId) => {
		setSelectedLesson(lessonId);
		localStorage.setItem("selectedLesson", lessonId);
		if (onSelectLesson && typeof onSelectLesson === "function") {
			onSelectLesson(lessonId);
		}
		// Close mobile menu when selecting a lesson
		setIsMobileMenuOpen(false);
	};

	const markAsCompleted = (lessonId, event) => {
		event.stopPropagation();
		const newCompletedLessons = { ...completedLessons };

		if (completedLessons[lessonId]) {
			delete newCompletedLessons[lessonId];
		} else {
			newCompletedLessons[lessonId] = true;
		}

		setCompletedLessons(newCompletedLessons);
		localStorage.setItem(
			"completedLessons",
			JSON.stringify(newCompletedLessons)
		);
	};

	// Calculate progress
	const totalLessons = Object.values(lessons).flat().length;
	const completedCount = Object.keys(completedLessons).length;
	const progressPercentage =
		totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

	// Sidebar content
	const sidebarContent = (
		<>
			{/* Progress bar */}
			<div className="mb-6">
				<div className="flex justify-between text-sm font-medium mb-1">
					<span>Your Progress</span>
					<span>{progressPercentage}% Complete</span>
				</div>
				<div className="w-full bg-gray-200 rounded-full h-2.5">
					<div
						className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
						style={{ width: `${progressPercentage}%` }}
					></div>
				</div>
			</div>

			{/* Course sections */}
			{Object.keys(lessons).map((section) => (
				<div key={section} className="mb-3">
					{/* Section Header */}
					<button
						className="flex justify-between items-center w-full text-left p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-800 font-medium transition-colors"
						onClick={() => toggleSection(section)}
					>
						<span>{section}</span>
						{openSections[section] ? (
							<ChevronDown size={18} className="text-gray-600" />
						) : (
							<ChevronRight size={18} className="text-gray-600" />
						)}
					</button>

					{/* Lesson List */}
					{openSections[section] && (
						<div className="ml-2 mt-1 space-y-1">
							{lessons[section].map((lesson) => (
								<div key={lesson.id} className="flex items-center">
									<button
										className={`grow text-left p-2.5 rounded-md text-sm transition-all flex items-center gap-2 ${
											selectedLesson === lesson.id
												? "bg-blue-600 text-white font-medium"
												: completedLessons[lesson.id]
												? "bg-blue-50 text-gray-700 hover:bg-blue-100"
												: "bg-white text-gray-700 hover:bg-gray-100"
										}`}
										onClick={() => handleLessonSelect(lesson.id)}
									>
										{completedLessons[lesson.id] && (
											<CheckCircle
												size={16}
												className={
													selectedLesson === lesson.id
														? "text-white"
														: "text-green-500"
												}
											/>
										)}
										<span>{lesson.title}</span>
									</button>
									<button
										onClick={(e) => markAsCompleted(lesson.id, e)}
										className={`ml-1 p-2 rounded-md hover:bg-gray-200 ${
											completedLessons[lesson.id]
												? "text-green-500"
												: "text-gray-400"
										}`}
										title={
											completedLessons[lesson.id]
												? "Mark as incomplete"
												: "Mark as complete"
										}
									>
										<CheckCircle size={18} />
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</>
	);

	return (
		<>
			{/* Mobile menu button */}
			<div className="lg:hidden fixed top-0 mt-16 left-0 right-0 z-10 bg-white p-4 border-b border-gray-200 shadow-sm flex justify-between items-center">
				<h2 className="text-lg font-bold text-gray-800">
					Git & GitHub Lessons
				</h2>
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
				>
					{isMobileMenuOpen ? (
						<ChevronDown size={20} />
					) : (
						<ChevronRight size={20} />
					)}
				</button>
			</div>

			{/* Mobile sidebar */}
			<aside
				className={`fixed inset-0 bg-white  z-20 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				style={{ top: "60px" }}
			>
				<div className="p-4">{sidebarContent}</div>
			</aside>

			{/* Desktop sidebar */}
			<aside className="hidden lg:block sticky top-0 h-screen w-80 bg-white p-4 shadow-md border-r border-gray-200 overflow-y-auto">
				<h2 className="text-xl font-bold text-gray-800 mb-4">
					Git & GitHub Lessons
				</h2>
				{sidebarContent}
			</aside>

			{/* Gray overlay when mobile menu is open */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
					onClick={() => setIsMobileMenuOpen(false)}
				></div>
			)}
		</>
	);
}
