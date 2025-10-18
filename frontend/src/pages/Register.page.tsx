import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useActionState } from "react";
import { registerUser } from "@/api/auth.api";

function RegisterPage() {
  const navigate = useNavigate();

  // Form is now handled by formAction
  interface FormState {
    user: {
      username: string;
      email: string;
      password: string;
    };
    error: null | string;
    success: boolean;
  }

  const handleFormAction = async (prevState: FormState, formData: FormData) => {
    // Extract form values
    const formValues = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Validate all required fields
    if (!formValues.username) {
      return {
        ...prevState,
        error: "Username is required",
        user: {
          ...prevState.user,
          ...formValues,
        },
      };
    }

    if (!formValues.email || !formValues.password) {
      return {
        ...prevState,
        error: "Email and password are required",
        user: {
          ...prevState.user,
          ...formValues,
        },
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      return {
        ...prevState,
        error: "Please enter a valid email address",
        user: {
          ...prevState.user,
          ...formValues,
        },
      };
    }

    // Validate password length
    if (formValues.password.length < 6) {
      return {
        ...prevState,
        error: "Password must be at least 6 characters long",
        user: {
          ...prevState.user,
          ...formValues,
        },
      };
    }

    const response = await registerUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    });

    if (response) {
      navigate("/auth/login");
    }

    // Show success message
    return {
      ...prevState,
      error: null,
      success: true,
      user: {
        ...prevState.user,
        ...formValues,
      },
    };
  };

  const [formState, formAction] = useActionState<FormState, FormData>(
    handleFormAction,
    {
      user: {
        username: "",
        email: "",
        password: "",
      },
      error: null,
      success: false,
    }
  );

  return (
    <motion.div
      className="w-[30%] bg-white text-black rounded-xl flex flex-col justify-around items-center gap-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[80%] bg-white text-black rounded-xl flex flex-col justify-around items-center gap-5">
        <div className="w-full px-6 pt-4 flex flex-col items-center">
          <h1 className="font-bold whitespace-nowrap text-lg text-[#a86803]">
            Registration Form
          </h1>
          {formState.error && (
            <div className="mt-2 text-red-500 text-sm">{formState.error}</div>
          )}
          {formState.success && (
            <div className="mt-2 text-green-500 text-sm">
              Registration successful! Redirecting to login...
            </div>
          )}
        </div>

        {/* Input fields */}
        <form
          action={formAction}
          className="w-full flex flex-col justify-around items-center gap-5 px-4"
        >
          <div>
            {/* Username */}
            <div className="w-full py-2 px-6">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="username" className="font-bold text-[#a86803]">
                  Username
                </label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                  defaultValue={formState.user.username}
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full py-2 px-6">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="email" className="font-bold text-[#a86803]">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                  defaultValue={formState.user.email}
                />
              </div>
            </div>

            {/* Password */}
            <div className="w-full py-2 px-6">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="password" className="font-bold text-[#a86803]">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                />
              </div>
            </div>
          </div>

          {/* Register button and login link */}
          <div className="flex justify-center flex-col gap-3 items-center pb-4">
            <Button
              type="submit"
              className="hover:bg-[#8a5402] cursor-pointer"
              disabled={formState.success}
            >
              {formState.success ? "Registering..." : "Register"}
            </Button>
            <p className="text-[#a86803] text-sm">
              Already have an account?{" "}
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default RegisterPage;
