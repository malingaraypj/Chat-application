import { useContext, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

// icons
import { MdAttachFile } from "react-icons/md";
import { useSelector } from "react-redux";
import { UserContext } from "@/context/userContext";
import type { RootState } from "@/store/store";
import { sendMesage } from "@/api/chats.api";

function TypeBox() {
  const userCtx = useContext(UserContext);
  const currentUser = userCtx.user;

  const selectedGroup = useSelector(
    (state: RootState) => state.chat.selectedGroup
  );

  const [message, setMessage] = useState("");

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() === "") return;

      sendMesage({
        senderId: currentUser._id,
        content: message,
        roomId: selectedGroup,
      });

      setMessage("");
    }
  };

  return (
    <div className="w-full h-14 bg-[#454242] flex items-center gap-5 fixed z-50 bottom-0">
      <MdAttachFile size={25} className="ml-5" />
      <Textarea
        onChange={handleMessage}
        value={message}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default TypeBox;
