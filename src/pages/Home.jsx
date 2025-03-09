import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LessonContent from "../components/LessonContent";
import Terminal from "../components/Terminal";

const Home = () => {
	const [selectedLesson, setSelectedLesson] = useState("");

	return (
		<>
			<div className="flex min-h-screen ">
				<Sidebar onSelectLesson={setSelectedLesson} />

				<div className="w-full p-5 mt-14">
					<LessonContent lessonId={selectedLesson} />
				</div>
			</div>
		</>
	);
};

export default Home;
