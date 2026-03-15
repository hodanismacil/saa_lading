import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { BookOpen, Clock, Search } from "lucide-react";

const courses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    instructor: "John Doe",
    title: "Data Science & Machine Learning with Python",
    price: "$120",
    oldPrice: "$180",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    instructor: "Sarah Smith",
    title: "Full Stack Web Development Bootcamp",
    price: "$150",
    oldPrice: "$200",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    instructor: "David Lee",
    title: "UI / UX Design Masterclass",
    price: "$90",
    oldPrice: "$140",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    instructor: "Michael Chen",
    title: "React & TypeScript Complete Guide",
    price: "$110",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
    instructor: "Michael Chen",
    title: "html complete guide",
    price: "$110",
  },
];

const Course = () => {
  return (
    <div className="mt-20">

      {/* Header Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-purple-500">
          Start Favorite Courses
        </h1>
        <p className="text-gray-400 mt-4">
          Learn from anywhere and build your bright career
        </p>
      </section>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <InputGroup className="max-w-xs bg-purple-950">
          <InputGroupInput placeholder="Search courses" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Courses Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 " >

        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-purple-950 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition "
          >

            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">

              <div className="flex justify-between mb-3">
                <p className="text-sm text-gray-300">
                  {course.instructor}
                </p>

                <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded">
                  Course
                </span>
              </div>

              <h3 className="text-white font-semibold mb-3">
                {course.title}
              </h3>

              <div className="flex gap-6 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>8 hr</span>
                </div>

                <div className="flex items-center gap-1">
                  <BookOpen size={16} />
                  <span>29 Lectures</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-green-400 font-bold">
                    {course.price}
                  </span>

                  {course.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {course.oldPrice}
                    </span>
                  )}
                </div>

                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>

              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
                Enroll Now
              </button>

            </div>
          </div>
        ))}

      </section>
    </div>
  );
};

export default Course;