import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useActionState, useContext } from "react";
import { loginUser } from "@/api/auth.api";
import { UserContext } from "@/context/userContext";

function LoginPage() {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  interface LoginFormState {
    user: {
      email: string;
      password: string;
    };
    error: string | null;
    success: boolean;
  }

  const handleFormAction = async (
    prevState: LoginFormState,
    formData: FormData
  ) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate required fields
    if (!email || !password) {
      return {
        ...prevState,
        error: "Email and password are required",
        success: false,
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        ...prevState,
        error: "Please enter a valid email address",
        success: false,
      };
    }

    // Validate password length
    if (password.length < 6) {
      return {
        ...prevState,
        error: "Password must be at least 6 characters long",
        success: false,
      };
    }

    try {
      const response = await loginUser({ email, password });
      const { token, data } = response;
      // Set user context
      userCtx.setUser({
        username: data.username,
        email: data.email,
        status: "online",
        avatar: data.avatar,
      });

      localStorage.setItem("token", token);
    } catch (error) {
      return {
        ...prevState,
        error: error as string,
        success: false,
      };
    }

    navigate("/");

    // Show success message
    return {
      ...prevState,
      error: null,
      success: true,
      user: {
        email,
        password,
      },
    };
  };

  const [formState, formAction] = useActionState<LoginFormState, FormData>(
    handleFormAction,
    {
      user: {
        email: "",
        password: "",
      },
      error: null,
      success: false,
    }
  );

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
      <div className="w-full px-6 pt-4 flex flex-col items-center">
        <h1 className="font-bold whitespace-nowrap text-lg text-[#a86803]">
          Login Form
        </h1>
        {formState.error && (
          <div className="mt-2 text-red-500 text-sm">{formState.error}</div>
        )}
        {formState.success && (
          <div className="mt-2 text-green-500 text-sm">
            Login successful! Redirecting...
          </div>
        )}
      </div>

      {/* Login Fields */}
      <form action={formAction} className="w-full">
        <div className="w-full grid grid-cols-1 gap-4 py-2 px-6">
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="email" className="font-bold text-[#a86803]">
              Email
            </label>

            <Input
              type="email"
              id="email"
              defaultValue={formState.user.email}
              name="email"
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
              defaultValue={formState.user.password}
              name="password"
              className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-4 mb-4">
          <Button
            type="submit"
            className="hover:bg-[#8a5402] cursor-pointer"
            disabled={formState.success}
          >
            {formState.success ? "Logging in..." : "Login"}
          </Button>
          <p className="text-[#a86803] text-sm">
            Don't have an account?{" "}
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={handleNavigateToRegister}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </motion.div>
  );
}

export default LoginPage;
