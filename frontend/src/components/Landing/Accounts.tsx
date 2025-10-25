import { useEffect, useState } from "react";
import Accordian from "./Accordian";
import AccountCard from "./AccountCards";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";

// icons
import CreateChat from "./CreateChat";
import FilterCard from "./FilterCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { loadChatRoomsThunk } from "@/store/reducers/chatRoomThunk";

function Accounts() {
  const [activeAccordian, setActiveAccordian] = useState("Group Chats");
  const groups = useSelector((state: RootState) => state.chatRoom.chatGroups);
  const privateChats = useSelector(
    (state: RootState) => state.chatRoom.privateChatRooms
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleActiveAccordian = (accordian: string) => {
    if (activeAccordian === accordian) setActiveAccordian("");
    else setActiveAccordian(accordian);
  };

  useEffect(() => {
    dispatch(loadChatRoomsThunk());
  }, [dispatch]);
  return (
    <div className="w-[25%] h-screen border border-r-[#61615f] flex flex-col text-white">
      <div className="h-[30%]">
        <SideBar />
        <div className="p-5 flex justify-between items-center">
          <h1 className="font-bold text-lg">Chats</h1>
          <div className="flex items-center gap-5">
            <CreateChat />
            <FilterCard />
          </div>
        </div>
        <div>
          <SearchBar onTextChange={(text) => console.log(text)} />
        </div>
      </div>
      <div className="flex h-[70%] flex-col gap-5 mt-5 overflow-y-auto hide-scrollbar">
        <Accordian
          isActive={activeAccordian === "Group Chats"}
          AccordianLabel="Group Chats"
          onClick={() => handleActiveAccordian("Group Chats")}
        >
          {groups.length > 0 &&
            groups.map((group) => <AccountCard key={group._id} data={group} />)}
        </Accordian>

        <Accordian
          isActive={activeAccordian === "Private Chats"}
          AccordianLabel="Private Chats"
          onClick={() => handleActiveAccordian("Private Chats")}
        >
          {privateChats.length > 0 &&
            privateChats.map((chat) => (
              <AccountCard key={chat._id} data={chat} />
            ))}
        </Accordian>
      </div>
    </div>
  );
}

export default Accounts;
