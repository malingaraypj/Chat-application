import { useState } from "react";
import Accordian from "./Accordian";
import AccountCard from "./AccountCards";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";

// icons
import { FiEdit } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";

function Accounts() {
  const [activeAccordian, setActiveAccordian] = useState("Group Chats");
  const handleActiveAccordian = (accordian: string) => {
    if (activeAccordian === accordian) setActiveAccordian("");
    else setActiveAccordian(accordian);
  };
  return (
    <div className="w-[25%] h-screen border border-r-[#61615f] flex flex-col text-white">
      <div className="h-[30%]">
        <SideBar />
        <div className="p-5 flex justify-between items-center">
          <h1 className="font-bold text-lg">Chats</h1>
          <div className="flex items-center gap-5">
            <FiEdit
              size={25}
              className="hover:bg-[#525250] cursor-pointer p-1 flex items-center justify-center rounded-full"
            />
            <IoFilterSharp
              className="hover:bg-[#525250] cursor-pointer p-1 flex items-center justify-center rounded-full"
              size={25}
            />
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
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </Accordian>

        <Accordian
          isActive={activeAccordian === "Private Chats"}
          AccordianLabel="Private Chats"
          onClick={() => handleActiveAccordian("Private Chats")}
        >
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </Accordian>
      </div>
    </div>
  );
}

export default Accounts;
