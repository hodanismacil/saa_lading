import { Link,  } from "react-router-dom";
import { useState } from "react";


const Navbar: React.FC = () => {
    const [open,setOpen] = useState(false)

    return (
   <div>
<nav className="flex items-center justify-between p-4 text-white">

{/* Logo */}
<div className="font-bold text-xl">
EDUJAR
</div>

{/* Desktop Menu */}
<ul className="hidden md:flex space-x-4">

<Link to="" className="hover:text-gray-300">
Home
</Link>

<Link to="/about" className="hover:text-gray-300">
About
</Link>

<Link to="/course" className="hover:text-gray-300">
Course
</Link>

<Link to="/blog" className="hover:text-gray-300">
Blog
</Link>

<Link to="/contact" className="hover:text-gray-300">
Contact
</Link>

</ul>


{/* Desktop Buttons */}
<div className="hidden md:flex space-x-6">

<Link to="/login">
<button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded hover:scale-105">
LOGIN
</button>
</Link>

<Link to="/getstarted">
<button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded hover:scale-105">
GET STARTED
</button>
</Link>

</div>


{/* Mobile Menu Button */}
<div className="md:hidden">

<button onClick={()=>setOpen(!open)}>
☰
</button>

</div>


{/* Mobile Menu */}
{open && (

<div className="absolute top-16 left-0 w-full bg-purple-950 flex flex-col items-center gap-6 py-6 md:hidden">

<Link to="/home">Home</Link>
<Link to="/about">About</Link>
<Link to="/course">Course</Link>
<Link to="/blog">Blog</Link>
<Link to="/contact">Contact</Link>

<Link to="/login">
<button className="bg-purple-600 px-4 py-2 rounded">
Login
</button>
</Link>

<Link to="/getstarted">
<button className="bg-blue-500 px-4 py-2 rounded">
Get Started
</button>
</Link>

</div>

)}

</nav>
</div>
)

}

export default Navbar