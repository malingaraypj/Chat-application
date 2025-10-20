import TypeBox from "./TypeBox";
import ChatCard from "./ChatCard";
import ActiveHeader from "./ActiveHeader";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import PlaceholderAccount from "./PlaceholderAccount";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";
import socket from "@/socket";
import { getMessages } from "@/store/reducers/chatThunk";

function ActiveAccount() {
  const dispatch = useDispatch<AppDispatch>();

  const chats = useSelector((state: RootState) => state.chat.chats);
  const currentUser = useContext(UserContext).user;
  const selectedGroup = useSelector(
    (state: RootState) => state.chat.selectedGroup
  );

  useEffect(() => {
    if (selectedGroup !== "") {
      socket.emit("join-group", selectedGroup);
      getMessages(selectedGroup)(dispatch);
    }
  }, [selectedGroup, dispatch]);

  if (selectedGroup === "") {
    return <PlaceholderAccount />;
  }

  return (
    <div className="w-[75%] relative border border-l-[#78787b] justify-between flex flex-col text-white">
      <ActiveHeader />
      <div className="overflow-y-scroll hide-scrollbar flex flex-col gap-5 mt-5 mb-15">
        {chats.length > 0 &&
          chats.map((chat) => (
            <ChatCard
              key={chat._id}
              content={chat.content}
              sender={chat.sender}
              position={chat.sender._id === currentUser._id ? "right" : "left"}
            />
          ))}
      </div>
      <TypeBox />
    </div>
  );
}

export default ActiveAccount;
