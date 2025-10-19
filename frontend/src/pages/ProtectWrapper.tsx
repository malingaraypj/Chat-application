import { Navigate, Outlet } from "react-router-dom";

function ProtectWrapper() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}

export default ProtectWrapper;
