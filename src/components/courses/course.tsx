import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { BookOpen, Clock, Search } from "lucide-react"
interface Props {
  image: string;
  instructor: string;
  title: string;
  price: string;
  oldPrice?: string;
}
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
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    instructor: "Emily Brown",
    title: "Business & Marketing Strategy",
    price: "$70",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
    instructor: "James Wilson",
    title: "Data Analysis with Excel & Power BI",
    price: "$95",
  },
];

const Course: React.FC<Props> = ({  instructor, title, price, oldPrice }) => {
  return (
    <div className="hover:scale-105 duration-300">
    <section className="py-20 mt-20">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 items-center">

<div>
<h1 className="text-purple-500">Star Favorite Courses</h1>

<p className="text-3xl md:text-4xl mt-6">
New learning from anywhere building your
<span className="text-purple-500"> bright career</span>
</p>

<p className="text-gray-300 mt-7">
Lorem ipsum dolor sit amet consectetur.
</p>

<button className="bg-purple-600 rounded-lg px-4 py-2 mt-7 hover:scale-105 transition">
Started Courses
</button>

</div>

<div className="bg-purple-600 rounded-3xl px-6 py-4 text-white w-fit mx-auto">
<p className="text-2xl font-bold">📖 1,235</p>
<p>Courses</p>
</div>

<div className="flex justify-center">
<img
src="https://en.pimg.jp/089/525/696/1/89525696.jpg"
className="w-full max-w-sm rounded-xl"
alt=""
/>
</div>

</div>
</section>
      <section className="mt-20">

  {/* Title + Search */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 max-w-7xl mx-auto">

    <h1 className="text-2xl text-purple-400 font-bold">
      All Courses Edule
    </h1>

    <InputGroup className="max-w-xs bg-purple-950">
      <InputGroupInput placeholder="Search courses" />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        12 results
      </InputGroupAddon>
    </InputGroup>

  </div>


  {/* Category Buttons */}
  <div className="bg-purple-900 flex flex-wrap gap-4 rounded-md items-center justify-center md:justify-between px-6 py-6 max-w-7xl mx-auto mt-9">

    <button className="border-2 rounded-full px-5 py-2 transition-all duration-300 hover:text-purple-600">
      UX/UI Design
    </button>

    <button className="text-white px-6 py-2 bg-purple-950 rounded-full hover:bg-purple-700 transition">
      Development
    </button>

    <button className="text-white px-6 py-2 bg-purple-950 rounded-full hover:bg-purple-700 transition">
      Data Analysis
    </button>

    <button className="text-white px-6 py-2 bg-purple-950 rounded-full hover:bg-purple-700 transition">
      Business
    </button>

    <button className="text-white px-6 py-2 bg-purple-950 rounded-full hover:bg-purple-700 transition">
      Finance
    </button>

  </div>

</section>
<section className="flex justify-center gap-7 mt-20 md:grid-cols-2 lg:grid-cols-3 ">

  {/* Card 1 */}
  <div className="bg-purple-950 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition w-[300px]">

    <img
      src="https://plus.unsplash.com/premium_vector-1720824711826-bdfbcc05cfe9?q=80&w=834"
      alt="course"
      className="w-full h-48 object-cover"
    />

    <div className="p-5">

      <div className="flex justify-between items-center mb-3">

        <div className="flex items-center gap-2">
          <img
            src="https://plus.unsplash.com/premium_vector-1682307798482-3d415c287228?q=80&w=880"
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <p className="text-sm text-gray-300">{instructor}</p>
        </div>

        <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded">📖
          Science
        </span>

      </div>

      <h3 className="font-semibold text-white mb-4">
        {title}
      </h3>

      <h1 className="text-gray-300 mb-4">
        Data science and machine learning with python
      </h1>

      <div className="flex gap-6 text-gray-400 text-sm mb-4">

        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>08 hr 15 mins</span>
        </div>

        <div className="flex items-center gap-1">
          <BookOpen size={16} />
          <span>29 Lectures</span>
        </div>

      </div>

      <div className="flex justify-between items-center">

        <div className="flex gap-2 items-center">
          <span className="text-green-400 font-bold">{price}</span>

          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {oldPrice}
            </span>
          )}
          <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        </div>

        

      </div>
      <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
  Enroll Now
</button>

    </div>
  </div>


  {/* Card 3 */}
  <div className="bg-purple-950 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition w-[300px]">

    <img
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170"
      alt="course"
      className="w-full h-48 object-cover"
    />

    <div className="p-5">

      <div className="flex justify-between items-center mb-3">

        <div className="flex items-center gap-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?q=80&w=1170"
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <p className="text-sm text-gray-300">{instructor}</p>
        </div>

        <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded">📚
          Science
        </span>

      </div>

      <h3 className="font-semibold text-white mb-4">
        {title}
      </h3>

      <h1 className="text-gray-300 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>

      <div className="flex gap-6 text-gray-400 text-sm mb-4">

        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>08 hr 15 mins</span>
        </div>

        <div className="flex items-center gap-1">
          <BookOpen size={16} />
          <span>29 Lectures</span>
        </div>

      </div>

      <div className="flex justify-between items-center">

        <div className="flex gap-2 items-center">
          <span className="text-green-400 font-bold">{price}</span>

          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {oldPrice}
            </span>
          )}
           <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        </div>

       
        

      </div>
<button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
  Enroll Now
</button>
    </div>
  </div>

</section>

<section>
  <section className="flex justify-center gap-7 mt-20 md:grid-cols-2 lg:grid-cols-3 ">

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {courses.map((course) => (
      <div
        key={course.id}
        className="bg-purple-950 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
      >

        <img
          src={course.image}
          alt="course"
          className="w-full h-48 object-cover"
        />

        <div className="p-5">

          <div className="flex justify-between items-center mb-3">

            <p className="text-sm text-gray-300">
              {course.instructor}
            </p>

            <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded  transition">
              Course
            </span>

          </div>

          <h3 className="font-semibold text-white mb-4">
            {course.title}
          </h3>

          <div className="flex gap-6 text-gray-400 text-sm mb-4">

            <div className="flex items-center gap-1">
              ⏰ <span>08 hr</span>
            </div>

            <div className="flex items-center gap-1">
              📚 <span>29 Lectures</span>
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

  </div>

</section>
</section>
    </div>
  );
};

export default Course;