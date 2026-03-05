import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4  text-white">
            <div className="font-bold text-xl">EDUJAR</div>
            <ul className="flex space-x-12">
                 <Link to="/home" className="hover:text-gray-300  trat">Home</Link>
                 <Link to="/about" className="hover:text-gray-300">About</Link>
                 <Link to="/course" className="hover:text-gray-300">course</Link>
                 <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                 <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </ul>
               <div className="flex space-x-9 p-8">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600  transform hover:scale-105">LOGIN</Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 ">GET started</Button>
               </div>
        </nav>
    );
}

   
export default Navbar;