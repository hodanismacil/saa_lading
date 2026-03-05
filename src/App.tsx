import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04012c] via-[#0c0966] to-[#2c0568] text-white">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;