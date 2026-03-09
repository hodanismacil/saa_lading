
const blogs = [
  {
    id: 1,
    title: "How to master UI/UX design in 2026",
    excerpt: "Baro tillaabooyinka ugu muhiimsan ee aad ku noqon karto naqshadeeye sare...",
    date: "March 5, 2026",
    author: "Ahmed Ali",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    category: "Design"
  },
  {
    id: 2,
    title: "The future of AI in Online Learning",
    excerpt: "Sirdoonka macmalka ah wuxuu beddelayaa sida aan wax u baranno...",
    date: "Feb 28, 2026",
    author: "Sahra Jaamac",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    category: "Technology"
  },
  {
    id: 3,
    title: "The future of code  Online Learning",
    excerpt: "lasoco aduun yada casriga...",
    date: "Feb 28, 2026",
    author: "Sahra Jaamac",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    category: "Technology"
  },
   {
    id: 4,
    title: "How to master UI/UX design in 2026",
    excerpt: "Baro tillaabooyinka ugu muhiimsan ee aad ku noqon karto naqshadeeye sare...",
    date: "March 5, 2026",
    author: "Ahmed Ali",
    image: "https://images.pexels.com/photos/12891180/pexels-photo-12891180.jpeg",
    category: "Design"
  },
  {
    id: 2,
    title: "The future of digital market Online Learning",
    excerpt: "baro waxa noloshada anfacad oo kharkaa latartan...",
    date: "Feb 28, 2026",
    author: "Sahra Jaamac",
    image: "https://images.pexels.com/photos/5833309/pexels-photo-5833309.jpeg",
    category: "Technology"
  },
  {
    id: 3,
    title: "The future of code  Online Learning",
    excerpt: "lasoco aduun yada casriga...",
    date: "Feb 28, 2026",
    author: "Sahra Jaamac",
    image: "https://images.pexels.com/photos/12899183/pexels-photo-12899183.jpeg",
    category: "Technology"
  }

];
const Blog:React.FC=()=>{
    return(
<div>
    {/* 1. Header Section */}
      <section className="py-20 text-center ">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          Our <span className="text-purple-400">Latest Blogs</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto px-6">
          Halkan kala soco talooyinka, wararka, iyo casharrada ugu dambeeya ee ku saabsan horumarka xirfadahaaga.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 duration-500 group-hover:scale-110">
          
          {blogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer  bg-purple-950 rounded-b-lg">
              {/* Image with Hover Effect */}
              <div className="relative overflow-hidden rounded-[30px] mb-6 aspect-video">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-purple-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="px-2">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span>{blog.date}</span>
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  <span>By {blog.author}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                  {blog.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold text-white border-b-2 border-purple-500 pb-1 hover:gap-4 transition-all">
                  Read More 
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-purple-900 rounded-40 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relitive z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to our newsletter</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white text-black outline-none"
              />
              <button className="bg-purple-950 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all">
                Join Now
              </button>

            </div>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        </div>

      </section>

</div>
    )
}


export default Blog
