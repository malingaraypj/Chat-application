import Input from "../components/Input";
import { Button } from "../components/ui/button";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can handle form submission here later
    console.log("Login clicked");
  };

  const handleNavigateToRegister = () => {
    navigate("/auth/register");
  };

  return (
    <motion.div
      className="w-[30%]  bg-white text-black rounded-xl flex flex-col justify-around items-center gap-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <div className="w-full px-6 pt-4 flex justify-center">
        <h1 className="font-bold whitespace-nowrap text-lg text-[#a86803]">
          Login Form
        </h1>
      </div>

      {/* Login Fields */}
      <div className="w-full grid grid-cols-1 gap-4 py-2 px-6">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="email" className="font-bold text-[#a86803]">
            Email
          </label>
          <Input
            type="email"
            id="email"
            className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
          />
        </div>

        <div className="flex flex-col items-start gap-1">
          <label htmlFor="password" className="font-bold text-[#a86803]">
            Password
          </label>
          <Input
            type="password"
            id="password"
            className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-3">
        <Button
          onClick={handleLogin}
          className="hover:bg-[#8a5402] cursor-pointer"
        >
          Login
        </Button>
        <p className="text-[#a86803] text-sm">
          Don’t have an account?{" "}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={handleNavigateToRegister}
          >
            Register
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default LoginPage;
