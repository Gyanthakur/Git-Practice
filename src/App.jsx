

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lesson from "./components/Lesson";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {

	return (
		<>
			<Navbar />
			<div className="flex min-h-screen ">
				{/* <Sidebar onSelectLesson={setSelectedLesson} /> */}
				<div className="flex-1 flex flex-col">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/terminal" element={<Terminal />} />
						<Route path="/lessons" element={<Lesson />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/terms" element={<TermsAndConditions />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
