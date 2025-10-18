import { Outlet } from "react-router-dom";

function AuthPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#ea9b4d] to-[#a86803]">
      <Outlet />
    </div>
  );
}

export default AuthPage;
