import { IoFilterSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FilterCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative text-black z-10"
    >
      <IoFilterSharp
        color="white"
        className="hover:bg-[#525250]  cursor-pointer p-1 flex items-center justify-center rounded-full"
        size={25}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute flex flex-col gap-5 top-[30px] left-[0px] w-[180px] bg-[#e0e0d6] p-3 rounded-md"
          >
            <div className="flex items-center justify-between px-5 hover:bg-amber-50 cursor-pointer rounded-md">
              <p>Favorite</p>
              <FaHeart color="red" size={15} />
            </div>
            <div className="flex items-center justify-between px-5 hover:bg-amber-50 cursor-pointer rounded-md">
              <p>Hidden</p>
              <BiHide size={20} />
            </div>
            <div className="flex items-center justify-between px-5 hover:bg-amber-50 cursor-pointer rounded-md">
              <p>Scheduled</p>
              <GrSchedule size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FilterCard;
