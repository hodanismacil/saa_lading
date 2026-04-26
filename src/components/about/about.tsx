
const About = () => {
    return (
        <div className="p-8 ">
           
           <section className="py-24 text-center py">
             <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    We provide modern online courses that help students grow their
          knowledge and build real-world skills.
                </p>
           </section>
          {/* {our story} */}
         <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
  
  {/* Qoraalka (Text Side) */}
  <div className="text-center md:text-left space-y-6">
    <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-2">
      About Us
    </div>
    
    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
      Our <span className="text-purple-500 italic">Story</span>
    </h2>
    
    <p className="text-gray-400 leading-relaxed text-lg">
      Our platform was created to make learning <span className="text-gray-200 font-medium">simple, flexible, and accessible</span> for everyone. We believe education should be affordable and available worldwide.
    </p>
    
    <p className="text-gray-500 border-l-4 border-purple-600 pl-4 italic">
      "Thousands of students trust us to improve their skills and grow their careers every single day."
    </p>

    <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
      Learn More
    </button>
  </div>

  {/* Sawirka (Image Side) */}
  <div className="relative group">
    {/* Qurxin dhabarka dambe ah (Decorative background element) */}
    <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all"></div>
    
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/5">
      <img 
        src="https://images.pexels.com/photos/5717411/pexels-photo-5717411.jpeg" 
        alt="Our Story" 
        className="w-full h-auto object-cover transform group-hover:scale-105 transition-duration-500" 
      />
    </div>

    {/* Card yar oo sawirka dushiisa ah (Optional) */}
    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden lg:block mt-4">
      <div className="flex items-center gap-3">
        <div className="bg-green-100 p-2 rounded-full text-green-600">
          ✓
        </div>
        <div className="text-sm">
          <p className="font-bold text-gray-900">10k+ Students</p>
          <p className="text-gray-500">Joined this month</p>
        </div>
      </div>
    </div>
  </div>

            <div>
                 <div className="bg-purple-800/45 rounded-3xl h-350px flex items-center justify-center text-6xl">
          🎓
        </div>
            </div>
</section>
            <section className="py-20 bg-purple-800/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center px-6">
          <div>
            <h3 className="text-4xl font-bold text-purple-400">10K+</h3>
            <p className="text-gray-300 mt-2">Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">200+</h3>
            <p className="text-gray-300 mt-2">Courses</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">50+</h3>
            <p className="text-gray-300 mt-2">Instructors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">95%</h3>
            <p className="text-gray-300 mt-2">Satisfaction</p>
          </div>
        </div>
      </section>



    <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-purple-400">Us?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-purple-800 p-8 rounded-2xl hover:-translate-y-4 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-300">
              Learn from industry professionals with real-world experience.
            </p>
          </div>

          <div className="bg-purple-800 p-8 rounded-2xl hover:-translate-y-4 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
            <p className="text-gray-300">
              Study anytime, anywhere at your own pace.
            </p>
          </div>

          <div className="bg-purple-800 p-8 rounded-2xl hover:-translate-y-4 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Affordable Courses</h3>
            <p className="text-gray-300">
              High-quality education at an affordable price.
            </p>
          </div>

     
        </div>
        <section className="py-20 bg-purple-800 text-center hover:translate-y-5 transition duration-300 mt-9 ">
      
        <h3 className="text-4xl font-bold md 16  ">
          meet our <span className="text-purple-400 ">team</span> 
        </h3>
         
            
         
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

    <div className="bg-[#2D215E] p-8 rounded-2xl">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="font-semibold">John Doe</h3>
      <p className="text-gray-400 text-sm">Instructor</p>
    </div>

    <div className="bg-[#2D215E] p-8 rounded-2xl">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="font-semibold">Sarah Smith</h3>
      <p className="text-gray-400 text-sm">Course Designer</p>
    </div>

    <div className="bg-[#2D215E] p-8 rounded-2xl">
      <img
        src="https://randomuser.me/api/portraits/men/55.jpg"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="font-semibold">David Lee</h3>
      <p className="text-gray-400 text-sm">Developer</p>
    </div>

  </div>
         

         
       </section>
       
        
      </section>


        </div>
    );
}

export default About;