import { useEffect, useState } from "react";
import Accordian from "./Accordian";
import AccountCard from "./AccountCards";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";

// icons
import { getMyGroup, getMyPrivateChats } from "@/api/chats.api";
import type { groupType } from "@/TypeModules/Accounts";
import CreateChat from "./CreateChat";
import FilterCard from "./FilterCard";

function Accounts() {
  const [activeAccordian, setActiveAccordian] = useState("Group Chats");
  const [groups, setGroups] = useState<groupType[]>([]);
  const [privateChats, setPrivateChats] = useState<groupType[]>([]);

  const handleActiveAccordian = (accordian: string) => {
    if (activeAccordian === accordian) setActiveAccordian("");
    else setActiveAccordian(accordian);
  };

  useEffect(() => {
    const getMyGroups = async () => {
      const groups = await getMyGroup();
      setGroups(groups.data);
    };
    const getMyChats = async () => {
      const privateChats = await getMyPrivateChats();
      setPrivateChats(privateChats.data);
    };
    getMyGroups();
    getMyChats();
  }, []);
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
          <SearchBar />
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
