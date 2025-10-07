import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing.page";

const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
