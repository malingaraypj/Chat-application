import AccountCard from "./AccountCards";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";

// icons
import { FiEdit } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";

function Accounts() {
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
        <AccountCard />
        <AccountCard />
      </div>
    </div>
  );
}

export default Accounts;
