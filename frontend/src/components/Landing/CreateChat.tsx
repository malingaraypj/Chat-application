import { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import AccountCard from "./AccountCards";
import SearchBar from "./searchBar";
import { motion, AnimatePresence } from "framer-motion";

function CreateChat() {
  const ref = useRef<HTMLDivElement>(null);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <div
        ref={ref}
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
              className="absolute shadow-gray-500 shadow-lg z-10 w-[300px] max-h-[400px] overflow-y-scroll hide-scrollbar p-5 bg-[#f7f7f2] flex flex-col gap-5 items-center justify-between rounded-md top-[30px] left-[0px]"
            >
              <h1 className="text-lg font-bold text-black">Create Chat</h1>
              <SearchBar />
              <AccountCard
                data={{
                  name: "Create Chat",
                  admin: ["You"],
                  createdAt: new Date().toLocaleDateString(),
                  createdBy: "You",
                  isGroupChat: true,
                  participants: ["You", "Other User"],
                  _id: "1234567890",
                }}
              />
              <AccountCard
                data={{
                  name: "Create Chat",
                  admin: ["You"],
                  createdAt: new Date().toLocaleDateString(),
                  createdBy: "You",
                  isGroupChat: true,
                  participants: ["You", "Other User"],
                  _id: "1234567890",
                }}
              />
              <AccountCard
                data={{
                  name: "Create Chat",
                  admin: ["You"],
                  createdAt: new Date().toLocaleDateString(),
                  createdBy: "You",
                  isGroupChat: true,
                  participants: ["You", "Other User"],
                  _id: "1234567890",
                }}
              />
              <AccountCard
                data={{
                  name: "Create Chat",
                  admin: ["You"],
                  createdAt: new Date().toLocaleDateString(),
                  createdBy: "You",
                  isGroupChat: true,
                  participants: ["You", "Other User"],
                  _id: "1234567890",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default CreateChat;
