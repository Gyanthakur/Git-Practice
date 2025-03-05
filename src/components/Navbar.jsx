import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          GitPractice
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/lessons" className="hover:text-gray-200">Lessons</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-blue-700 flex flex-col space-y-2 p-4 rounded">
          <Link to="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/lessons" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Lessons</Link>
          <Link to="/about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
