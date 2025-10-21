import { CgProfile } from "react-icons/cg";
import UserCard from "./UserCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CreatePrivateChat() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        onClick={() => setActive(true)}
        className="relative flex items-center gap-2 cursor-pointer hover:bg-[#c0c0c0] hover:text-black p-2 rounded-md"
      >
        <CgProfile />
        New Private Chat
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
            <UserCard label="User 1" />
            <UserCard label="User 2" />
            <UserCard label="User 3" />
            <UserCard label="User 4" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreatePrivateChat;
