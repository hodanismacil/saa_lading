import { Link,  } from "react-router-dom";
import { useState } from "react";


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-gray-900 z-50">
      <nav className="flex items-center justify-between p-4 px-6 md:px-12 text-white max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wider">
          EDU<span className="text-blue-400">JAR</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/course" className="hover:text-blue-400 transition">Course</Link></li>
          <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 rounded-md border border-gray-500 hover:bg-gray-800 transition">
              LOGIN
            </button>
          </Link>
          <Link to="/getstarted">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5">
              GET STARTED
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setOpen(!open)}
            className="text-3xl focus:outline-none transition-transform duration-300"
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(0)' }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 flex flex-col items-center gap-6 py-10 md:hidden transition-all duration-300 ease-in-out
          ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
        `}>
          <Link onClick={() => setOpen(false)} to="/" className="text-lg hover:text-blue-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="text-lg hover:text-blue-400">About</Link>
          <Link onClick={() => setOpen(false)} to="/course" className="text-lg hover:text-blue-400">Course</Link>
          <Link onClick={() => setOpen(false)} to="/blog" className="text-lg hover:text-blue-400">Blog</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="text-lg hover:text-blue-400">Contact</Link>
          
          <div className="flex flex-col w-full px-10 gap-4 mt-4">
            <Link onClick={() => setOpen(false)} to="/login" className="w-full">
              <button className="w-full border border-blue-500 text-blue-400 py-3 rounded-md">
                Login
              </button>
            </Link>
            <Link onClick={() => setOpen(false)} to="/getstarted" className="w-full">
              <button className="w-full bg-blue-600 py-3 rounded-md text-white font-bold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;