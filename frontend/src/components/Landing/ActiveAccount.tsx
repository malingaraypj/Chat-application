import TypeBox from "./TypeBox";
import ChatCard from "./ChatCard";
import ActiveHeader from "./ActiveHeader";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function ActiveAccount() {
  const chats = useSelector((state: RootState) => state.chat.chats);
  console.log(chats);
  const currentUser = { name: "Alice" };
  return (
    <div className="w-[75%] relative border border-l-[#78787b] justify-between flex flex-col text-white">
      <ActiveHeader />
      <div className="overflow-y-scroll hide-scrollbar flex flex-col gap-5 mt-5 mb-15">
        {chats.length > 0 &&
          chats.map((chat) => (
            <ChatCard
              key={chat.id}
              message={chat.message}
              user={chat.user}
              position={chat.user === currentUser.name ? "right" : "left"}
            />
          ))}
      </div>
      <TypeBox />
    </div>
  );
}

export default ActiveAccount;
