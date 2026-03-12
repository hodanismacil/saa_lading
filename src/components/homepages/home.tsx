import React from 'react';
import sawir from '../../assets/sawir.png';

import {} from 'react-icons/si';

 

 
const Home: React.FC = () => {
  return (
    <div>
      <section className=" px-8 py-16 flex flex-col justify-center relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
        
        {/* Qaybta Bidix */}
        <div className="z-10 ">
          <h1 className="text-5xl md:text-4xl font-serif font-bold leading-tight mb-6">
            Best courses <span className="text-purple-300 font-sans">are waiting</span> to enrich your skill <span className="text-red-400">+++</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-md">
            Provides you with the latest online learning system and material that help your knowledge growing.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Want to learn?" 
              className="w-full py-4 pl-12 pr-32 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 px-8 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full font-medium transition-colors">
              Explore
            </button>
          </div>
        </div>

         <div className="relative flex justify-center">
               <div className="  absolute top-10 left-20 text-yellow-400 text-3xl animate-pulse">⭐ </div>
 
    
    
          <div className="absolute  w-[350px] h-[450px] bg-purple-800 rounded-full"></div>
          <img 
            src={sawir} 
            alt="Learning Illustration" 
            className="w-full max-w-md drop-shadow-2xl top-3 relative z-10 animate-float" 
          />
        </div>
     

      
      </div>

      
      <div className="mt-24 max-w-7xl mx-auto w-full relative">
        
      
        <div className="border border-gray-300 rounded-2xl p-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70">
          
     
          <div className="absolute -top-4 left-10 bg-[#2f1362] px-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Our Course Partners
            </p>
          </div>
          <div className="flex gap-10 text-2xl text-gray-400">
 
</div >
          <span className="text-2xl font-bold transition-all duration-300 hover:text-purple-400">HubSpot</span>
          <span className="text-2xl font-bold italic transition-all duration-300 hover:text-purple-400">loom</span> 
          <span className="text-2xl font-bold transition-all duration-300 hover:text-purple-400" > GitLab</span>
          <span className="text-2xl font-bold transition-all duration-300 hover:text-purple-400">LiveChat</span>
          <span className="text-2xl font-bold underline transition-all duration-300 hover:text-purple-400">monday.com</span>
        </div>

      </div>




    </section>

   <section className=" py-6 px-7 rid ">
      <div className="max-w-7xl mx-auto px-8 flex  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          pobular
          <span className="text-purple-400"> courses</span>
        </h2>
        <p className="bg-gray-800 text-center max-w-2xl mx-auto  mb-10  space-x-8 rounded-2xl ">
         <button className='bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors'>desing</button>
          <span className="text-white py-2 px-4  hover:bg-purple-600 transition-all">develoment</span>
           <span className="text-white px-4 py-2 hover:bg-purple-600 transition-all ">marketing</span>
           <span className="text-white px-4 py-2 hover:bg-purple-600 transition-all">business</span>
           <span className="text-white px-4 py-2 hover:bg-purple-600 transition-all">it & software</span>
        </p>
      </div>
  
  

    <div className='flex gap-5 justify-center flex-wrap mt-10  animate-pulse transition-all duration-500 hover:-translate-y-4 hover:shadow-purple-500/20' >
      <div className="bg-[#2D215E] rounded-[30px] overflow-hidden shadow-xl border border-white/5 p-6 max-w-sm ">

  {/* Course Image */}
  <img 
    src="https://images.pexels.com/photos/4541996/pexels-photo-4541996.jpeg" 
    className="w-full h-48 object-cover rounded-xl mb-6" 
    alt="Course Banner" 
  />

  {/* Title */}
  <h1 className="text-lg font-bold text-white mb-6">
    Python for Financial Analysis Next and Algorithmic Trading
  </h1>

  {/* Instructor + Students */}
  <div className="flex justify-between items-center mb-6">

    <div className="flex items-center gap-3">
      <img 
        src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=2123&auto=format&fit=crop"
        className="w-10 h-10 rounded-full object-cover"
        alt="Instructor"
      />
      <div>
        <p className="text-sm font-semibold text-white">John Doe</p>
        <p className="text-xs text-gray-400">Instructor</p>
      </div>
    </div>

    <p className="text-xs text-gray-300">12,500 Students</p>

  </div>

  {/* Rating + Button */}
  <div className="flex justify-between items-center border-t border-white/10 pt-4">

    <div className="flex text-yellow-400 text-sm">
      ✨✨✨✨💫
    </div>

    <button className="text-purple-400 hover:text-white text-sm">
      Enroll Now
    </button>

  </div>

</div>
<div className=" bg-[#2D215E] rounded-[30px] overflow-hidden shadow-xl border border-white/5 p-6 max-w-sm">

  {/* Course Image */}
  <img 
    src="https://images.pexels.com/photos/5412266/pexels-photo-5412266.jpeg" 
    className="w-full h-48 object-cover rounded-xl mb-6" 
    alt="Course Banner" 
  />

  {/* Title */}
  <h1 className="text-lg font-bold text-white mb-6">
    Python for Financial Analysis Next and Algorithmic Trading
  </h1>

  {/* Instructor + Students */}
  <div className="flex justify-between items-center mb-6">

    <div className="flex items-center gap-3">
      <img 
        src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=2123&auto=format&fit=crop"
        className="w-10 h-10 rounded-full object-cover"
        alt="Instructor"
      />
      <div>
        <p className="text-sm font-semibold text-white">John Doe</p>
        <p className="text-xs text-gray-400">Instructor</p>
      </div>
    </div>

    <p className="text-xs text-gray-300">12,500 Students</p>

  </div>

  {/* Rating + Button */}
  <div className="flex justify-between items-center border-t border-white/10 pt-4">

    <div className="flex text-yellow-400 text-sm">
      ✨✨✨✨💫
    </div>

    <button className="text-purple-400 hover:text-white text-sm">
      Enroll Now
    </button>

  </div>

</div>
<div className="bg-[#2D215E] rounded-[30px] overflow-hidden shadow-xl border border-white/5 p-6 max-w-sm">

  {/* Course Image */}
  <img 
    src="https://images.pexels.com/photos/4087262/pexels-photo-4087262.jpeg" 
    className="w-full h-48 object-cover rounded-xl mb-6" 
    alt="Course Banner" 
  />

  {/* Title */}
  <h1 className="text-lg font-bold text-white mb-6">
    Python for Financial Analysis Next and Algorithmic Trading
  </h1>

  {/* Instructor + Students */}
  <div className="flex justify-between items-center mb-6">

    <div className="flex items-center gap-3">
      <img 
        src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=2123&auto=format&fit=crop"
        className="w-10 h-10 rounded-full object-cover"
        alt="Instructor"
      />
      <div>
        <p className="text-sm font-semibold text-white">John Doe</p>
        <p className="text-xs text-gray-400">Instructor</p>
      </div>
    </div>

    <p className="text-xs text-gray-300">12,500 Students</p>

  </div>

  {/* Rating + Button */}
  <div className="flex justify-between items-center border-t border-white/10 pt-4">

    <div className="flex text-yellow-400 text-sm">
      ✨✨✨✨💫
    </div>

    <button className="text-purple-400 hover:text-white text-sm">
      Enroll Now
    </button>

  </div>

</div>

     

    </div>




    <div className='flex gap-5 justify-center flex-wrap mt-10  animate-pulse transition-all duration-500 hover:-translate-y-4 hover:shadow-purple-500/20' >
      <div className="bg-[#2D215E] rounded-[30px] overflow-hidden shadow-xl border border-white/5 p-6 max-w-sm ">

  {/* Course Image */}
  <img 
    src="https://images.pexels.com/photos/9869063/pexels-photo-9869063.jpeg" 
    className="w-full h-48 object-cover rounded-xl mb-6" 
    alt="Course Banner" 
  />

  {/* Title */}
  <h1 className="text-lg font-bold text-white mb-6">
    Python for Financial Analysis Next and Algorithmic Trading
  </h1>

  {/* Instructor + Students */}
  <div className="flex justify-between items-center mb-6">

    <div className="flex items-center gap-3">
      <img 
        src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=2123&auto=format&fit=crop"
        className="w-10 h-10 rounded-full object-cover"
        alt="Instructor"
      />
      <div>
        <p className="text-sm font-semibold text-white">John Doe</p>
        <p className="text-xs text-gray-400">Instructor</p>
      </div>
    </div>

    <p className="text-xs text-gray-300">12,500 Students</p>

  </div>

  {/* Rating + Button */}
  <div className="flex justify-between items-center border-t border-white/10 pt-4">

    <div className="flex text-yellow-400 text-sm">
      ✨✨✨✨💫
    </div>

    <button className="text-purple-400 hover:text-white text-sm">
      Enroll Now
    </button>

  </div>

</div>
<div className=" bg-[#2D215E] rounded-[30px] overflow-hidden shadow-xl border border-white/5 p-6 max-w-sm">

  {/* Course Image */}
  <img 
    src="https://images.pexels.com/photos/5412266/pexels-photo-5412266.jpeg" 
    className="w-full h-48 object-cover rounded-xl mb-6" 
    alt="Course Banner" 
  />

  {/* Title */}
  <h1 className="text-lg font-bold text-white mb-6">
    Python for Financial Analysis Next and Algorithmic Trading
  </h1>

  {/* Instructor + Students */}
  <div className="flex justify-between items-center mb-6">

    <div className="flex items-center gap-3">
      <img 
        src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=2123&auto=format&fit=crop"
        className="w-10 h-10 rounded-full object-cover"
        alt="Instructor"
      />
      <div>
        <p className="text-sm font-semibold text-white">John Doe</p>
        <p className="text-xs text-gray-400">Instructor</p>
      </div>
    </div>

    <p className="text-xs text-gray-300">12,500 Students</p>

  </div>

  {/* Rating + Button */}
  <div className="flex justify-between items-center border-t border-white/10 pt-4">

    <div className="flex text-yellow-400 text-sm">
      ✨✨✨✨💫
    </div>

    <button className="text-purple-400 hover:text-white text-sm">
      Enroll Now
    </button>

  </div>

</div>
<div className="bg-[#2D215E] rounded-[30px] overflow-hidden shadow-xl border border-white/5 p-6 max-w-sm">

  {/* Course Image */}
  <img 
    src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg" 
    className="w-full h-48 object-cover rounded-xl mb-6" 
    alt="Course Banner" 
  />

  {/* Title */}
  <h1 className="text-lg font-bold text-white mb-6">
    Python for Financial Analysis Next and Algorithmic Trading
  </h1>

  {/* Instructor + Students */}
  <div className="flex justify-between items-center mb-6">

    <div className="flex items-center gap-3">
      <img 
        src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=2123&auto=format&fit=crop"
        className="w-10 h-10 rounded-full object-cover"
        alt="Instructor"
      />
      <div>
        <p className="text-sm font-semibold text-white">John Doe</p>
        <p className="text-xs text-gray-400">Instructor</p>
      </div>
    </div>

    <p className="text-xs text-gray-300">12,500 Students</p>

  </div>

  {/* Rating + Button */}
  <div className="flex justify-between items-center border-t border-white/10 pt-4">

    <div className="flex text-yellow-400 text-sm">
      ✨✨✨✨💫
    </div>

    <button className="text-purple-400 hover:text-white text-sm">
      Enroll Now
    </button>

  </div>

</div>

     

    </div>

    </section>

    </div>
  );
};

export default Home;