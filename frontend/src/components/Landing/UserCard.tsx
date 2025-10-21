import { FaUserAlt } from "react-icons/fa";

function UserCard({ label }: { label: string }) {
  return (
    <div className="flex items-center w-[160px] gap-2 px-2 py-1 rounded-md hover:bg-[#525252] cursor-pointer">
      <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#2a2929]">
        <FaUserAlt size={20} />
      </div>
      <div className="truncate w-[100px]">{label}</div>
    </div>
  );
}

export default UserCard;
