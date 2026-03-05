
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
            <div className="text-center">
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
            <div className="flex items-center justify-center">
                <img src="/path/to/image.jpg" alt="Our Story" className="rounded-lg shadow-lg" />
            </div>
            <div>
                 <div className="bg-purple-900/30 rounded-3xl h-350px flex items-center justify-center text-6xl">
          🎓
        </div>
            </div>
           </section>
            <section className="py-20 bg-[#291969]">
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

          <div className="bg-[#2D215E] p-8 rounded-2xl hover:-translate-y-4 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-300">
              Learn from industry professionals with real-world experience.
            </p>
          </div>

          <div className="bg-[#2D215E] p-8 rounded-2xl hover:-translate-y-4 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
            <p className="text-gray-300">
              Study anytime, anywhere at your own pace.
            </p>
          </div>

          <div className="bg-[#2D215E] p-8 rounded-2xl hover:-translate-y-4 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Affordable Courses</h3>
            <p className="text-gray-300">
              High-quality education at an affordable price.
            </p>
          </div>

        </div>
      </section>


        </div>
    );
}

export default About;