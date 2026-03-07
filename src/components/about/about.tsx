
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
           <section className="max-w7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center ">
                <h2 className="text-2xl font-bold mb-4">Our <span className="text-purple-700">Story</span></h2>
                <p className="text-gray-300 leading-relaxed md:text-lg items-center">
                    Our platform was created to make learning simple, flexible, and
            accessible for everyone. We believe education should be affordable
            and available worldwide.
          </p>
             <p className="text-gray-400">
               Thousands of students trust us to improve their skills and grow
            their careers.
             </p>

            </div>
            <div className="flex items-center justify-center ">
                <img src="https://images.pexels.com/photos/5717411/pexels-photo-5717411.jpeg" alt="Our Story" className="rounded-lg shadow-lg" />
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