import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/auth.page";
import RegisterPage from "./pages/Register.page";
import LoginPage from "./pages/Login.page";
import LandingPage from "./pages/landing.page";
import UserContextProvider from "./context/userContextProvider";
import ProtectWrapper from "./pages/ProtectWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectWrapper />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      { index: true, element: <LoginPage /> },
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
