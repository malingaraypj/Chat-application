import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setSelectedGroup } from "@/store/reducers/chats";
import type { groupType } from "@/TypeModules/Accounts";

function AccountCard({ data }: { data: groupType }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setSelectedGroup(data._id))}
      className="bg-[#3b3b3a] flex justify-between px-5 py-3 items-center gap-5 w-full h-18 rounded-xl"
    >
      <div className="flex gap-5">
        <div className="bg-[#2c2b2b] rounded-full w-12 h-12 flex items-center justify-center">
          <FaUser />
        </div>
        <div>
          <h1>{data.name || data.participants[0]}</h1>
        </div>
      </div>
      <div>
        <MdNotifications />
      </div>
    </div>
  );
}

export default AccountCard;
