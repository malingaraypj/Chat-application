import { useState } from "react";
import { GrGroup } from "react-icons/gr";
import UserCheckBox from "./UserCheckBox";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./searchBar";
import { searchUsers } from "@/api/user.api";
import { IoMdAdd } from "react-icons/io";

import type { UserType } from "@/context/userContext";
import { createNewChat } from "@/api/chats.api";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { addChatRoom } from "@/store/reducers/chatRoom";

function CreateGroup() {
  const [active, setActive] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [groupName, setGroupName] = useState<string>("");

  const dispatch = useDispatch();

  const handleUserSelect = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleCreateGroup = async () => {
    if (selectedUsers.length === 0) return;
    const response = await createNewChat({
      groupName,
      users: selectedUsers,
    });
    if (response.data) {
      dispatch(addChatRoom(response.data));
      setSelectedUsers([]);
      setActive(false);
    }
  };

  const handleTextChange = async (text: string) => {
    const response = await searchUsers(text);
    if (response.data) {
      setUsers(response.data);
    } else {
      setUsers([]);
    }
  };

  return (
    <div className="relative">
      {/* Trigger button */}
      <div
        onClick={() => setActive(true)}
        className="relative flex items-center gap-2 cursor-pointer hover:bg-[#c0c0c0] hover:text-black p-2 rounded-md"
      >
        <GrGroup />
        New Group
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onMouseLeave={() => setActive(false)}
            className="absolute gap-5 p-5 z-200 top-[40px] left-0 w-[250px] max-h-[400px] bg-[#3d3c3c] rounded-md flex flex-col"
          >
            <Input
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="group name"
              className="w-full p-2 rounded-md"
            />
            <SearchBar onTextChange={handleTextChange} />
            {/* Scrollable user list */}
            <div className="flex-1 overflow-y-auto hide-scrollbar mt-3">
              {users.map((user) => (
                <UserCheckBox
                  key={user._id}
                  id={user._id}
                  onSelect={handleUserSelect}
                  label={user.username}
                />
              ))}
            </div>

            {/* Create button stays visible at bottom */}
            <button
              onClick={handleCreateGroup}
              className="mt-3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition"
            >
              <IoMdAdd size={18} />
              <span>Create New</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreateGroup;
