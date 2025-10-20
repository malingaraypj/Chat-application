import type { UserType } from "@/context/userContext";
import { FaUser } from "react-icons/fa6";

interface ChatCardProps {
  position?: "left" | "right";
  content?: string;
  sender: UserType;
}

function ChatCard({ position = "left", content, sender }: ChatCardProps) {
  const isRight = position === "right";

  return (
    <div
      className={`flex flex-col ${isRight ? "items-end mr-5" : "ml-5"} mb-3`}
    >
      <div className={`flex gap-3 ${isRight ? "justify-end" : ""}`}>
        {/* Avatar */}
        {!isRight && (
          <div className="bg-[#4d4a4a] rounded-full w-12 h-12 flex items-center justify-center">
            <FaUser />
          </div>
        )}

        {/* Message bubble */}
        <div
          className={`max-w-[60%] rounded-xl px-3 py-2 ${
            isRight ? "bg-[#2b6cb0] text-white" : "bg-[#353333] text-white"
          }`}
        >
          {!isRight && <h1 className="font-bold">{sender.username}</h1>}
          <p className="whitespace-pre-wrap px-5 py-3 flex justify-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
