import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import CreateGroup from "./CreateGroup";
import CreatePrivateChat from "./CreatePrivateChat";

function CreateChat() {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setOpenEdit(true)}
        onMouseLeave={() => setOpenEdit(false)}
        className="relative"
      >
        <FiEdit
          size={25}
          className="hover:bg-[#525250] cursor-pointer p-1 flex items-center justify-center rounded-full"
        />
        <AnimatePresence>
          {openEdit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute shadow-gray-500 ring ring-[#5e5e5e] shadow-lg z-10 w-[250px] max-h-[400px] p-5 bg-[#5e5e5e] flex flex-col gap-5 items-start justify-between rounded-md top-[30px] left-[0px]"
            >
              <CreatePrivateChat />
              <CreateGroup />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default CreateChat;
