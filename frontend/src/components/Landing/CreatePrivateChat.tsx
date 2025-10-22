import { CgProfile } from "react-icons/cg";
import UserCard from "./UserCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./searchBar";
import { getConnectionSuggestions } from "@/api/user.api";
import type { UserType } from "@/context/userContext";

function CreatePrivateChat() {
  const [active, setActive] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const handleTextChange = async (text: string) => {
    const response = await getConnectionSuggestions(text);
    if (response.data) {
      setUsers(response.data);
      console.log(response.data);
    } else {
      setUsers([]);
    }
  };

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
            <SearchBar onTextChange={handleTextChange} />
            {users.map((user) => (
              <UserCard
                key={user._id}
                userId={user._id}
                label={user.username}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreatePrivateChat;
