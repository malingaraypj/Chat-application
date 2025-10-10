import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function SideBar() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {/* Menu Button */}
      <div
        onClick={toggleVisibility}
        className="mt-5 ml-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-full hover:bg-[#525250] transition-colors"
      >
        <IoReorderThreeSharp size={25} />
      </div>

      {/* Sidebar */}
      {visible && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed  left-0 bg-black/80 w-40 h-[85vh] rounded-r-xl z-10 p-4 shadow-lg"
        >
          <ul className="text-white space-y-4 mt-8">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </motion.div>
      )}
    </>
  );
}

export default SideBar;
