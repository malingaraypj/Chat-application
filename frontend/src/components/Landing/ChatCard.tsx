import { FaUser } from "react-icons/fa6";

interface ChatCardProps {
  position?: "left" | "right";
  message?: string;
  user: string;
}

function ChatCard({ position = "left", message, user }: ChatCardProps) {
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
          className={`max-w-[60%] rounded-xl p-3 ${
            isRight ? "bg-[#2b6cb0] text-white" : "bg-[#353333] text-white"
          }`}
        >
          {!isRight && <h1 className="font-bold">{user}</h1>}
          {message ||
            "Some message here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, saepe!"}
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
