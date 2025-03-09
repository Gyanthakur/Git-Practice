import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
	// Subscription state
	const [subscribeEmail, setSubscribeEmail] = useState("");
	const [error, setError] = useState("");

	// Email validation regex
	const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	// Subscription handler
	const handleSubscribe = () => {
		if (!subscribeEmail) {
			setError("Email is required!");
			return;
		}
		if (!isValidEmail(subscribeEmail)) {
			setError("Enter a valid email address!");
			return;
		}

		console.log("Subscribed with:", subscribeEmail);
		alert(`Subscribed with: ${subscribeEmail}`);

		// Reset state
		setSubscribeEmail("");
		setError("");
	};

	return (
		<footer className="bg-gray-600 md:px-36 text-left w-full">
			<div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
				{/* Logo & Description */}
				<div className="flex flex-col md:items-start items-center w-full">
					<Link
						to="/"
						className="text-2xl font-bold flex items-center justify-center text-white"
					>
						<img
							className="w-18 h-10"
							src="/git_practice.png"
							alt="Git Learning"
						/>
						Git Learning
					</Link>
					<p className="mt-6 text-center md:text-left text-sm text-white/80">
						Master Git effortlessly! Learn commands, workflows, and best
						practices with hands-on interactive lessons and real-world examples.
					</p>
				</div>

				{/* Quick Links */}
				<div className="flex flex-col md:items-start items-center w-full">
					<h2 className="font-semibold text-white mb-5">Quick Links</h2>
					<ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
						<li>
							<Link to="/" aria-label="Go to Home">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" aria-label="Learn more About us">
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" aria-label="Contact Us">
								Contact
							</Link>
						</li>
						<li>
							<Link to="/terms" aria-label="View Terms & Conditions">
								Terms & Conditions
							</Link>
						</li>
					</ul>
				</div>

				{/* Subscription Section */}
				<div className="md:flex flex-col items-start w-full">
					<h2 className="font-semibold text-white mb-5">
						Subscribe to Updates
					</h2>
					<p className="text-sm text-white/80">
						Get the latest Git tutorials, tips, and tricks delivered straight to
						your inbox.
					</p>

					{/* Input & Button */}
					<div className="flex items-center gap-2 pt-4 w-full">
						<input
							type="email"
							placeholder="Enter your email"
							className="border border-gray-400 bg-gray-800 text-white placeholder-gray-300 outline-none w-full h-9 rounded px-3 text-sm"
							value={subscribeEmail}
							onChange={(e) => {
								setSubscribeEmail(e.target.value);
								setError(""); // Clear error when typing
							}}
							aria-label="Enter your email address"
						/>
						<button
							onClick={handleSubscribe}
							className="bg-blue-600 px-4 h-9 text-white rounded shadow-md hover:bg-blue-700 transition"
							aria-label="Subscribe to newsletter"
						>
							Subscribe
						</button>
					</div>

					{/* Error Message */}
					{error && <p className="text-red-400 text-xs mt-2">{error}</p>}

					{/* Social Icons */}
					<div className="ml-8 mt-8 md:ml-0 md:mt-0">
						<SocialIcons />
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<p className="py-4 text-center text-xs md:text-sm text-white/60">
				&copy; 2025 Git Learning Platform. All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
