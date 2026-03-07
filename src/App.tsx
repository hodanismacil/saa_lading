import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#363179] via-[#0c0966] to-[#4d258a] text-white">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;