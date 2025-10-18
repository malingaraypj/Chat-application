import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing.page";
import AuthPage from "./pages/auth.page";
import RegisterPage from "./pages/register.page";
import LoginPage from "./pages/Login.page";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
