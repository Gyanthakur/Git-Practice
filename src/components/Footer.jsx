import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  // Subscription state
  const [subscribeEmail, setSubscribeEmail] = useState("");

  // Subscription handler
  const handleSubscribe = () => {
    console.log("Subscribed with:", subscribeEmail);
    alert(`Subscribed with: ${subscribeEmail}`);
    setSubscribeEmail("");
  };

  return (
    <footer className="bg-gray-500 md:px-36 text-left w-full">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center justify-center text-white"
          >
            <img className="w-18 h-10" src="/git_practice.png" alt="Git Learning" />
            Git Learning
          </Link>
          <p className="mt-6 text-center sm:flex sm:flex-row sm:justify-center md:text-left text-sm text-white/80">
            Master Git effortlessly! Learn commands, workflows, and best practices 
            with hands-on interactive lessons and real-world examples.
          </p>
        </div>
        
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Quick Links</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to Updates</h2>
          <p className="text-sm text-white/80">
            Get the latest Git tutorials, tips, and tricks delivered straight to your inbox.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-white placeholder-gray-100 outline-none w-64 h-9 rounded px-2 text-sm"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 w-2/4 h-9 text-white rounded"
            >
              Subscribe
            </button>
          </div>
          <div className="ml-8 mt-5 md:ml-0 md:mt-0">
            <SocialIcons />
          </div>
        </div>
      </div>
      
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        &copy; 2025 Git Learning Platform. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
