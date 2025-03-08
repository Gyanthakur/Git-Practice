import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LessonContent from "../components/LessonContent";
import Terminal from "../components/Terminal";

const Home = () => {
	const [selectedLesson, setSelectedLesson] = useState("");

	return (
		<>
			<div className="flex h-screen">
				<Sidebar onSelectLesson={setSelectedLesson} />

				<div className="p-6">
					<LessonContent lessonId={selectedLesson} />
				</div>
			</div>
		</>
	);
};

export default Home;
