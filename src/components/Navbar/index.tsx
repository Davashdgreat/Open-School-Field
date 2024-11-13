import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu toggle

  const handleNavClick = (path: string) => {
    // Placeholder logic for logged-in check; replace with actual check later
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigate('/select-type');
    } else {
      navigate(path);
    }
  };

  return (
    <nav>
      <div className="w-full h-[75px] px-4 lg:px-[310px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a onClick={() => handleNavClick("/")} className='cursor-pointer'>
            <img
              src={logo}
              alt="logo"
              className="h-10"
            />
          </a>
        </div>

        {/* Desktop Menu (lg and up) */}
        <div className="hidden lg:flex space-x-14 text-base font-normal">
          <a onClick={() => handleNavClick("/schools")} className="hover:text-gray-900 cursor-pointer">Schools</a>
          <a onClick={() => handleNavClick("/fields")} className="hover:text-gray-900 cursor-pointer">Fields</a>
          <a onClick={() => handleNavClick("/agents")} className="hover:text-gray-900 cursor-pointer">Agents</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 hover:text-gray-700 focus:outline-none"
          >
            <span className="text-2xl">{isMenuOpen ? '×' : '☰'}</span> 
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-[75px] left-0 w-full bg-white shadow-lg`}>
          <div className="flex flex-col items-center p-4 space-y-4">
            <a onClick={() => handleNavClick("/schools")} className="hover:text-gray-900">Schools</a>
            <a onClick={() => handleNavClick("/fields")} className="hover:text-gray-900">Fields</a>
            <a onClick={() => handleNavClick("/agents")} className="hover:text-gray-900">Agents</a>
            <Link to="/login" className="hover:text-gray-900">Login</Link>
            <Link to="/signup" className="hover:text-gray-900">Sign up</Link>
          </div>
        </div>

        
        <div className="hidden lg:flex space-x-4">
          <Link to="/login" className="hover:text-gray-900">Login</Link>
          <Link to="/signup" className="hover:text-gray-900">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
