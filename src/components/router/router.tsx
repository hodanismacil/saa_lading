import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Home from "../homepages/home";
import About from "../about/about";
import Course from "../courses/course";
import Footer from "../footer/footer";
import Blog from "../Blog/blog";
import Login from "../Login/login";
import Contact from "../contactpage/contact";
import GETstarted from "../get-started/get-started";

const Router: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Router;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "course",
        element: <Course/>,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "getstarted",
        element: <GETstarted />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);