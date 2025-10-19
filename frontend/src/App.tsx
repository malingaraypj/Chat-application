import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing.page";
import AuthPage from "./pages/auth.page";
import RegisterPage from "./pages/Register.page";
import LoginPage from "./pages/Login.page";
import UserContextProvider from "./context/userContextProvider";

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
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
