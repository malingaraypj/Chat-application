import { useState } from "react";
import { GrGroup } from "react-icons/gr";
import UserCheckBox from "./UserCheckBox";
import { motion, AnimatePresence } from "framer-motion";

function CreateGroup() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        onClick={() => setActive(true)}
        className="relative flex items-center gap-2 cursor-pointer hover:bg-[#c0c0c0] hover:text-black p-2 rounded-md"
      >
        <GrGroup />
        New Group
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onMouseLeave={() => setActive(false)}
            className="absolute p-5 z-50 top-[40px] left-0px w-[250px] h-[200px] overflow-y-auto hide-scrollbar bg-[#3d3c3c] rounded-md"
          >
            <UserCheckBox id="user1" label="User 1" />
            <UserCheckBox id="user2" label="User 2" />
            <UserCheckBox id="user3" label="User 3" />
            <UserCheckBox id="user4" label="User 4" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreateGroup;
