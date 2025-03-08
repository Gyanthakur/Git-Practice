// // // import { useState } from "react";
// // // import { ChevronDown, ChevronRight } from "lucide-react";

// // // export default function Sidebar({ onSelectLesson }) {
// // // 	const [openSections, setOpenSections] = useState({});
// // // 	const [selectedLesson, setSelectedLesson] = useState("");

// // // 	// Lesson categories and topics
// // // 	const lessons = {
// // // 		"Getting Started": [
// // // 			{ id: "intro", title: "Introduction to Git" },
// // // 			{ id: "install", title: "Installing Git" },
// // // 			{ id: "setup", title: "Setting Up Git" },
// // // 		],
// // // 		"Basic Commands": [
// // // 			{ id: "init", title: "git init" },
// // // 			{ id: "clone", title: "git clone" },
// // // 			{ id: "status", title: "git status" },
// // // 		],
// // // 		"Working with Commits": [
// // // 			{ id: "add", title: "git add" },
// // // 			{ id: "commit", title: "git commit" },
// // // 			{ id: "log", title: "git log" },
// // // 		],
// // // 		"Branching & Merging": [
// // // 			{ id: "branch", title: "git branch" },
// // // 			{ id: "checkout", title: "git checkout" },
// // // 			{ id: "merge", title: "git merge" },
// // // 		],
// // // 		"Remote Repositories": [
// // // 			{ id: "remote", title: "git remote" },
// // // 			{ id: "push", title: "git push" },
// // // 			{ id: "pull", title: "git pull" },
// // // 		],
// // // 		"Advanced Git": [
// // // 			{ id: "stash", title: "git stash" },
// // // 			{ id: "rebase", title: "git rebase" },
// // // 			{ id: "cherry-pick", title: "git cherry-pick" },
// // // 			{ id: "all_cammands", title: "Git commands" },
// // // 		],
// // // 	};

// // // 	const toggleSection = (section) => {
// // // 		setOpenSections((prev) => ({
// // // 			...prev,
// // // 			[section]: !prev[section],
// // // 		}));
// // // 	};

// // // 	const handleLessonSelect = (lessonId) => {
// // // 		setSelectedLesson(lessonId);
// // // 		if (onSelectLesson && typeof onSelectLesson === "function") {
// // // 			onSelectLesson(lessonId);
// // // 		}
// // // 	};

// // // 	return (
// // // 		<aside className="w-1/4 bg-white h-screen p-4 shadow-lg border-r border-gray-300 overflow-y-auto">
// // // 			<h2 className="text-xl font-bold text-gray-800 mb-4">
// // // 				Git & GitHub Lessons
// // // 			</h2>

// // // 			{Object.keys(lessons).map((section) => (
// // // 				<div key={section} className="mb-2">
// // // 					{/* Section Header */}
// // // 					<button
// // // 						className="flex justify-between w-full text-left p-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-800 font-medium"
// // // 						onClick={() => toggleSection(section)}
// // // 					>
// // // 						{section}
// // // 						{openSections[section] ? (
// // // 							<ChevronDown size={20} />
// // // 						) : (
// // // 							<ChevronRight size={20} />
// // // 						)}
// // // 					</button>

// // // 					{/* Lesson List */}
// // // 					{openSections[section] && (
// // // 						<div className="ml-4 flex-1 mt-2">
// // // 							{lessons[section].map((lesson) => (
// // // 								<button
// // // 									key={lesson.id}
// // // 									className={`block w-full text-left p-2 rounded-md transition ${
// // // 										selectedLesson === lesson.id
// // // 											? "bg-green-600 text-white"
// // // 											: "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
// // // 									}`}
// // // 									onClick={() => handleLessonSelect(lesson.id)}
// // // 								>
// // // 									{lesson.title}
// // // 								</button>
// // // 							))}
// // // 						</div>
// // // 					)}
// // // 				</div>
// // // 			))}
// // // 		</aside>
// // // 	);
// // // }

// // import { useState, useEffect } from "react";
// // import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

// // export default function Sidebar({ onSelectLesson, completedLessons = [] }) {
// //   const [openSections, setOpenSections] = useState({
// //     "Getting Started": true // Open the first section by default
// //   });
// //   const [selectedLesson, setSelectedLesson] = useState("");
// //   const [isMobileOpen, setIsMobileOpen] = useState(false);
  
// //   // Lesson categories and topics
// //   const lessons = {
// //     "Getting Started": [
// //       { id: "intro", title: "Introduction to Git" },
// //       { id: "install", title: "Installing Git" },
// //       { id: "setup", title: "Setting Up Git" },
// //     ],
// //     "Basic Commands": [
// //       { id: "init", title: "git init" },
// //       { id: "clone", title: "git clone" },
// //       { id: "status", title: "git status" },
// //     ],
// //     "Working with Commits": [
// //       { id: "add", title: "git add" },
// //       { id: "commit", title: "git commit" },
// //       { id: "log", title: "git log" },
// //     ],
// //     "Branching & Merging": [
// //       { id: "branch", title: "git branch" },
// //       { id: "checkout", title: "git checkout" },
// //       { id: "merge", title: "git merge" },
// //     ],
// //     "Remote Repositories": [
// //       { id: "remote", title: "git remote" },
// //       { id: "push", title: "git push" },
// //       { id: "pull", title: "git pull" },
// //     ],
// //     "Advanced Git": [
// //       { id: "stash", title: "git stash" },
// //       { id: "rebase", title: "git rebase" },
// //       { id: "cherry-pick", title: "git cherry-pick" },
// //       { id: "all_cammands", title: "Git commands" },
// //     ],
// //   };

// //   // Calculate total lessons
// //   const totalLessons = Object.values(lessons).flat().length;
  
// //   // Count completed lessons
// //   const completedCount = completedLessons.length;
  
// //   // Calculate progress percentage
// //   const progressPercentage = Math.round((completedCount / totalLessons) * 100);

// //   const toggleSection = (section) => {
// //     setOpenSections((prev) => ({
// //       ...prev,
// //       [section]: !prev[section],
// //     }));
// //   };

// //   const handleLessonSelect = (lessonId) => {
// //     setSelectedLesson(lessonId);
// //     if (onSelectLesson && typeof onSelectLesson === "function") {
// //       onSelectLesson(lessonId);
// //     }
// //     // Close mobile sidebar after selection on small screens
// //     setIsMobileOpen(false);
// //   };

// //   // Close the sidebar when clicking outside on mobile
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       const sidebar = document.getElementById('sidebar');
// //       if (isMobileOpen && sidebar && !sidebar.contains(event.target)) {
// //         setIsMobileOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [isMobileOpen]);

// //   return (
// //     <>
// //       {/* Mobile menu button */}
// //       <button 
// //         className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md  bg-white shadow-lg"
// //         onClick={() => setIsMobileOpen(!isMobileOpen)}
// //         aria-label="Toggle menu"
// //       >
// //         {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
// //       </button>
      
// //       {/* Sidebar */}
// //       <aside 
// //         id="sidebar"
// //         className={`bg-slate-50 border-r border-slate-200 overflow-y-auto fixed inset-y-0 left-0 z-20 transition-transform duration-300 transform 
// //           ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
// //           md:translate-x-0 md:static md:w-64`}
// //       >
// //         <div className="p-4 border-b border-slate-200 bg-white">
// //           <h2 className="text-lg font-bold text-slate-800">
// //             Git & GitHub Guide
// //           </h2>
// //         </div>

// //         {/* Progress section */}
// //         <div className="p-4 border-b border-slate-200 bg-white">
// //           <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
// //             <span>Progress</span>
// //             <span>{completedCount} of {totalLessons} completed</span>
// //           </div>
// //           <div className="w-full bg-slate-200 rounded-full h-2.5">
// //             <div 
// //               className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
// //               style={{ width: `${progressPercentage}%` }}
// //               aria-valuenow={progressPercentage}
// //               aria-valuemin="0"
// //               aria-valuemax="100"
// //             ></div>
// //           </div>
// //         </div>

// //         <nav className="p-3">
// //           {Object.keys(lessons).map((section) => (
// //             <div key={section} className="mb-3">
// //               {/* Section Header */}
// //               <button
// //                 className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-slate-700 font-medium hover:bg-slate-200 transition-colors"
// //                 onClick={() => toggleSection(section)}
// //                 aria-expanded={openSections[section]}
// //               >
// //                 <span>{section}</span>
// //                 {openSections[section] ? (
// //                   <ChevronDown size={18} className="text-slate-500" />
// //                 ) : (
// //                   <ChevronRight size={18} className="text-slate-500" />
// //                 )}
// //               </button>

// //               {/* Lesson List */}
// //               {openSections[section] && (
// //                 <ul className="mt-1 ml-2 space-y-1">
// //                   {lessons[section].map((lesson) => {
// //                     const isCompleted = completedLessons.includes(lesson.id);
                    
// //                     return (
// //                       <li key={lesson.id}>
// //                         <button
// //                           className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center
// //                             ${selectedLesson === lesson.id
// //                               ? "bg-blue-600 text-white font-medium"
// //                               : isCompleted
// //                                 ? "bg-blue-100 text-slate-700 hover:bg-blue-200"
// //                                 : "text-slate-600 hover:bg-slate-200"
// //                             }`}
// //                           onClick={() => handleLessonSelect(lesson.id)}
// //                         >
// //                           {lesson.title}
// //                           {isCompleted && (
// //                             <span className="ml-auto text-xs bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-full">
// //                               ✓
// //                             </span>
// //                           )}
// //                         </button>
// //                       </li>
// //                     );
// //                   })}
// //                 </ul>
// //               )}
// //             </div>
// //           ))}
// //         </nav>
// //       </aside>
// //     </>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { ChevronDown, ChevronRight, CheckCircle, Circle } from "lucide-react";

// export default function Sidebar({ onSelectLesson }) {
//   // Initialize state from localStorage if available
//   const [openSections, setOpenSections] = useState(() => {
//     const saved = localStorage.getItem("gitLessonOpenSections");
//     return saved ? JSON.parse(saved) : { "Getting Started": true }; // Open first section by default
//   });
  
//   const [selectedLesson, setSelectedLesson] = useState(() => {
//     const saved = localStorage.getItem("gitLessonSelected");
//     return saved || "";
//   });
  
//   // Track completed lessons in state
//   const [completedLessons, setCompletedLessons] = useState(() => {
//     const saved = localStorage.getItem("gitLessonCompleted");
//     return saved ? JSON.parse(saved) : {};
//   });

//   // Persist state changes to localStorage
//   useEffect(() => {
//     localStorage.setItem("gitLessonOpenSections", JSON.stringify(openSections));
//   }, [openSections]);

//   useEffect(() => {
//     localStorage.setItem("gitLessonSelected", selectedLesson);
//   }, [selectedLesson]);

//   useEffect(() => {
//     localStorage.setItem("gitLessonCompleted", JSON.stringify(completedLessons));
//   }, [completedLessons]);

//   // Calculate progress for each section
//   const calculateSectionProgress = (sectionLessons) => {
//     if (!sectionLessons || sectionLessons.length === 0) return 0;
    
//     const completedCount = sectionLessons.filter(
//       lesson => completedLessons[lesson.id]
//     ).length;
    
//     return Math.round((completedCount / sectionLessons.length) * 100);
//   };

//   // Lesson categories and topics
//   const lessons = {
//     "Getting Started": [
//       { id: "intro", title: "Introduction to Git" },
//       { id: "install", title: "Installing Git" },
//       { id: "setup", title: "Setting Up Git" },
//     ],
//     "Basic Commands": [
//       { id: "init", title: "git init" },
//       { id: "clone", title: "git clone" },
//       { id: "status", title: "git status" },
//     ],
//     "Working with Commits": [
//       { id: "add", title: "git add" },
//       { id: "commit", title: "git commit" },
//       { id: "log", title: "git log" },
//     ],
//     "Branching & Merging": [
//       { id: "branch", title: "git branch" },
//       { id: "checkout", title: "git checkout" },
//       { id: "merge", title: "git merge" },
//     ],
//     "Remote Repositories": [
//       { id: "remote", title: "git remote" },
//       { id: "push", title: "git push" },
//       { id: "pull", title: "git pull" },
//     ],
//     "Advanced Git": [
//       { id: "stash", title: "git stash" },
//       { id: "rebase", title: "git rebase" },
//       { id: "cherry-pick", title: "git cherry-pick" },
//       { id: "all_cammands", title: "Git commands" },
//     ],
//   };

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const handleLessonSelect = (lessonId) => {
//     setSelectedLesson(lessonId);
//     if (onSelectLesson && typeof onSelectLesson === "function") {
//       onSelectLesson(lessonId);
//     }
//   };

//   const toggleLessonCompletion = (e, lessonId) => {
//     e.stopPropagation(); // Prevent triggering the lesson selection
    
//     setCompletedLessons(prev => ({
//       ...prev,
//       [lessonId]: !prev[lessonId]
//     }));
//   };

//   // Calculate overall progress
//   const calculateOverallProgress = () => {
//     const allLessons = Object.values(lessons).flat();
//     const totalLessons = allLessons.length;
//     const completedCount = allLessons.filter(lesson => 
//       completedLessons[lesson.id]
//     ).length;
    
//     return totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
//   };

//   const overallProgress = calculateOverallProgress();

//   return (
//     <aside className="w-80 bg-white h-screen shadow-lg border-r border-gray-200 flex flex-col">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-200">
//         <h2 className="text-xl font-bold text-gray-800">Git & GitHub Guide</h2>
        
//         {/* Progress bar */}
//         <div className="mt-4">
//           <div className="flex justify-between text-sm mb-1">
//             <span className="text-gray-600">Overall progress</span>
//             <span className="font-medium">{overallProgress}%</span>
//           </div>
//           <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-green-500 transition-all duration-300" 
//               style={{ width: `${overallProgress}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Lesson list with scrolling */}
//       <div className="flex-1 overflow-y-auto p-4">
//         {Object.keys(lessons).map((section) => {
//           const sectionProgress = calculateSectionProgress(lessons[section]);
          
//           return (
//             <div key={section} className="mb-4">
//               {/* Section Header with Progress */}
//               <button
//                 className="flex items-center justify-between w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-800 font-medium transition-colors"
//                 onClick={() => toggleSection(section)}
//               >
//                 <div className="flex items-center">
//                   {openSections[section] ? (
//                     <ChevronDown size={18} className="mr-2 text-gray-600" />
//                   ) : (
//                     <ChevronRight size={18} className="mr-2 text-gray-600" />
//                   )}
//                   <span>{section}</span>
//                 </div>
                
//                 <div className="flex items-center">
//                   <span className="text-sm text-gray-600 mr-2">{sectionProgress}%</span>
//                   <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-green-500"
//                       style={{ width: `${sectionProgress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </button>

//               {/* Lesson List with completion buttons */}
//               {openSections[section] && (
//                 <div className="ml-6 mt-2 space-y-1">
//                   {lessons[section].map((lesson) => (
//                     <div key={lesson.id} className="flex items-center">
//                       <button
//                         className={`flex-1 text-left py-2 px-3 rounded-md transition-colors ${
//                           selectedLesson === lesson.id
//                             ? "bg-blue-600 text-white"
//                             : "bg-gray-50 text-gray-700 hover:bg-gray-200"
//                         }`}
//                         onClick={() => handleLessonSelect(lesson.id)}
//                       >
//                         {lesson.title}
//                       </button>
                      
//                       <button
//                         className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
//                         onClick={(e) => toggleLessonCompletion(e, lesson.id)}
//                         title={completedLessons[lesson.id] ? "Mark as incomplete" : "Mark as completed"}
//                       >
//                         {completedLessons[lesson.id] ? (
//                           <CheckCircle size={20} className="text-green-500" />
//                         ) : (
//                           <Circle size={20} className="text-gray-400" />
//                         )}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }



















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
      { id: "all_commands", title: "Git commands" },
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
    localStorage.setItem("completedLessons", JSON.stringify(newCompletedLessons));
  };

  // Calculate progress
  const totalLessons = Object.values(lessons).flat().length;
  const completedCount = Object.keys(completedLessons).length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

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
                      <CheckCircle size={16} className={selectedLesson === lesson.id ? "text-white" : "text-green-500"} />
                    )}
                    <span>{lesson.title}</span>
                  </button>
                  <button
                    onClick={(e) => markAsCompleted(lesson.id, e)}
                    className={`ml-1 p-2 rounded-md hover:bg-gray-200 ${
                      completedLessons[lesson.id] ? "text-green-500" : "text-gray-400"
                    }`}
                    title={completedLessons[lesson.id] ? "Mark as incomplete" : "Mark as complete"}
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
      <div className="lg:hidden fixed top-0 left-0 right-0 z-10 bg-white p-4 border-b border-gray-200 shadow-sm flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">Git & GitHub Lessons</h2>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {isMobileMenuOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <aside 
        className={`fixed inset-0 bg-white z-20 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <div className="p-4">
          {sidebarContent}
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block sticky top-0 h-screen w-80 bg-white p-4 shadow-md border-r border-gray-200 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Git & GitHub Lessons</h2>
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