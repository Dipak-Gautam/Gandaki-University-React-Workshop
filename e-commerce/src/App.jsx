import Cart from "./Component/Cart/Cart";
import Home from "./Component/HomePage/Home";
import NavBar from "./Component/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <div className="h-[100vh] flex ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
