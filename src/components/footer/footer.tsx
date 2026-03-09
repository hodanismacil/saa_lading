import { Link } from "react-router-dom";



const Footer: React.FC = () => {
  return (
<div className="bg-gray-900 text-gray-300 pt-16 pb-6 mt-26">
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500 mb-4">
            EduFlex.
          </h2>
          <p className="text-sm leading-6">
            EduFlex waa madal waxbarasho casri ah oo kaa caawinaysa
            xirfado cusub iyo horumar shaqo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-500">About</Link></li>
            <li><Link to="/course" className="hover:text-purple-500">course</Link></li>
             <li><Link to="/blog" className="hover:text-purple-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-500 cursor-pointer">Web Development</li>
            <li className="hover:text-purple-500 cursor-pointer">Cyber Security</li>
            <li className="hover:text-purple-500 cursor-pointer">Data Analysis</li>
            <li className="hover:text-purple-500 cursor-pointer">UI / UX Design</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Hel warar & casharro cusub email-kaaga.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button
              className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EduFlex. All rights reserved.
      </div>
    </footer>
    </div>
  );

};



export default Footer;


