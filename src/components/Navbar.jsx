import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  // Update active link based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path.includes("/lessons")) setActiveLink("lessons");
    else if (path.includes("/about")) setActiveLink("about");
    else if (path.includes("/terminal")) setActiveLink("terminal");
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center justify-center">
          <img className="w-18 h-10" src="/git_practice.png" alt="" />
          GitPractice
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`hover:text-gray-200 transition-colors duration-200 py-1 border-b-2 ${activeLink === "home" ? "border-white" : "border-transparent"}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/lessons" 
            className={`hover:text-gray-200 transition-colors duration-200 py-1 border-b-2 ${activeLink === "lessons" ? "border-white" : "border-transparent"}`}
            onClick={handleLinkClick}
          >
            Lessons
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-gray-200 transition-colors duration-200 py-1 border-b-2 ${activeLink === "about" ? "border-white" : "border-transparent"}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            to="/terminal" 
            className={`hover:text-gray-200 transition-colors duration-200 py-1 border-b-2 ${activeLink === "terminal" ? "border-white" : "border-transparent"}`}
            onClick={handleLinkClick}
          >
            Terminal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-blue-700 flex flex-col p-4 rounded-lg animate-fadeIn">
          <Link 
            to="/" 
            className="py-3 px-2 hover:bg-blue-800 rounded transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/lessons" 
            className="py-3 px-2 hover:bg-blue-800 rounded transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Lessons
          </Link>
          <Link 
            to="/about" 
            className="py-3 px-2 hover:bg-blue-800 rounded transition-colors duration-200"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            to="/terminal" 
            className="py-3 px-2 hover:bg-blue-800 rounded transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Terminal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;