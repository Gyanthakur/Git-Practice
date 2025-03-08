

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lesson from "./components/Lesson";

const App = () => {

	return (
		<>
			<Navbar />
			<div className="flex h-screen">
				{/* <Sidebar onSelectLesson={setSelectedLesson} /> */}
				<div className="flex-1 flex flex-col">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/terminal" element={<Terminal />} />
						<Route path="/lessons" element={<Lesson />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
