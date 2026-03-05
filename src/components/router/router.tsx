import { createBrowserRouter ,Outlet } from "react-router-dom";
import Navbar from "../navebar/navbar";
import Home from "../homepages/home";
import About from "../about/about";
import Course from "../courses/course";


const Router:React.FC=()=>{
    return(
        <div>
           <div> <Navbar/></div>
            <Outlet/>
        </div>
    )
      

}

export default Router;


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Router/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
         {
            path:'course',
            element:<Course/>
         }
        ]
    }
])

