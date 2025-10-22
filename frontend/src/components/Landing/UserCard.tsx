import { createPrivateChat } from "@/api/chats.api";
import { FaUserAlt } from "react-icons/fa";

function UserCard({ label, userId }: { label: string; userId: string }) {
  const handleClick = async () => {
    const response = await createPrivateChat(userId);
    if (response) {
      console.log(response);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center w-[160px] gap-2 px-2 py-1 rounded-md hover:bg-[#525252] cursor-pointer"
    >
      <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#2a2929]">
        <FaUserAlt size={20} />
      </div>
      <div className="truncate w-[100px]">{label}</div>
    </div>
  );
}

export default UserCard;
