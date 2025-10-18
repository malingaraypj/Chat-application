import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/auth/login");
  };

  return (
    <motion.div
      className="w-[30%] bg-white text-black rounded-xl flex flex-col justify-around items-center gap-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[80%] bg-white text-black rounded-xl flex flex-col justify-around items-center gap-5">
        <div className="w-full px-6 pt-4 flex justify-center">
          <h1 className="font-bold whitespace-nowrap text-lg text-[#a86803]">
            Registration Form
          </h1>
        </div>

        {/* Input fields */}
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
                className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="lastname" className="font-bold text-[#a86803]">
                Last Name
              </label>
              <Input
                type="text"
                id="lastname"
                className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
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

          {/* Gender and Birth Date */}
          <div className="w-full grid grid-cols-2 gap-4 py-2 px-6">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="gender" className="font-bold text-[#a86803]">
                Gender
              </label>
              <Input
                type="text"
                id="gender"
                className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="dateofbirth" className="font-bold text-[#a86803]">
                Date of Birth
              </label>
              <Input
                type="date"
                id="dateofbirth"
                className="w-full h-[35px] border border-[#a86803] rounded-md px-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#a86803]"
              />
            </div>
          </div>
        </div>

        {/* Register button and login link */}
        <div className="flex justify-center flex-col gap-3 items-center pb-4">
          <Button className="hover:bg-[#8a5402] cursor-pointer">
            Register
          </Button>
          <p className="text-[#a86803] text-sm">
            Already have an account?{" "}
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={handleRegister}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default RegisterPage;
