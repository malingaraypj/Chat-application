import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useActionState } from "react";

function RegisterPage() {
  const navigate = useNavigate();

  // Form is now handled by formAction
  interface FormState {
    user: {
      firstname: string;
      lastname: string;
      email: string;
      password: string;
      gender: string;
      dateofbirth: string;
    };
    error: null | string;
    success: boolean;
  }

  const handleFormAction = (prevState: FormState, formData: FormData) => {
    // Extract form values
    const formValues = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      gender: formData.get("gender") as string,
      dateofbirth: formData.get("dateofbirth") as string,
    };

    // Validate all required fields
    if (!formValues.firstname || !formValues.lastname) {
      return {
        ...prevState,
        error: "First name and last name are required",
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

    if (!formValues.gender) {
      return {
        ...prevState,
        error: "Please select a gender",
        user: {
          ...prevState.user,
          ...formValues,
        },
      };
    }

    if (!formValues.dateofbirth) {
      return {
        ...prevState,
        error: "Date of birth is required",
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

    // If validation passes
    console.log("Form submitted successfully:", formValues);

    // Simulate successful registration and redirect
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);

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
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        dateofbirth: "",
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
            {/* First and Last Name */}
            <div className="w-full grid grid-cols-2 gap-4 py-2 px-6">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="firstname" className="font-bold text-[#a86803]">
                  First Name
                </label>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                  defaultValue={formState.user.firstname}
                />
              </div>

              <div className="flex flex-col items-start gap-1">
                <label htmlFor="lastname" className="font-bold text-[#a86803]">
                  Last Name
                </label>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                  defaultValue={formState.user.lastname}
                />
              </div>
            </div>

            {/* Email and Password */}
            <div className="w-full grid grid-cols-2 gap-4 py-2 px-6">
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

            {/* Gender and Birth Date */}
            <div className="w-full grid grid-cols-2 gap-4 py-2 px-6">
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="gender" className="font-bold text-[#a86803]">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                  defaultValue={formState.user.gender}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="dateofbirth"
                  className="font-bold text-[#a86803]"
                >
                  Date of Birth
                </label>
                <Input
                  type="date"
                  id="dateofbirth"
                  name="dateofbirth"
                  className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
                  defaultValue={formState.user.dateofbirth}
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
