import { useState } from "react";
import { addChat } from "../../store/reducers/chats";

import TextArea from "../TextArea";
import type { RootState } from "../../store/store";

// icons
import { MdAttachFile } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function TypeBox() {
  const chatLength = useSelector((state: RootState) => state.chat.chats.length);
  const dispatch = useDispatch();
  const currentUser = { name: "Alice" };

  const [message, setMessage] = useState("");

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(() => e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() === "") return;

      const newChat = {
        id: chatLength + 1 + "",
        user: currentUser.name,
        message,
        timeStamp: Date.now(),
      };

      dispatch(addChat(newChat));
      setMessage("");
    }
  };

  return (
    <div className="w-full h-14 bg-[#454242] flex items-center gap-5 fixed z-50 bottom-0">
      <MdAttachFile size={25} className="ml-5" />
      <TextArea
        onChange={handleMessage}
        value={message}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default TypeBox;
