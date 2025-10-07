import AccountCard from "./AccountCards";
import SearchBar from "./searchBar";

// icons
import { FiEdit } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";

function Accounts() {
  return (
    <div className="w-[25%] border border-r-[#61615f] p-3 flex flex-col text-white">
      <div className="mt-5 ml-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-full hover:bg-[#525250]">
        <IoReorderThreeSharp size={25} />
      </div>
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
      <div className="flex flex-col gap-5 mt-5">
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
