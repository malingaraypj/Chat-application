import ChatRoom from "../models/ChatRoom.js";
import Message from "../models/Message.js";
import AppError from "../utils/AppError.js";

export const createMessage = async (chatRoomId, senderId, content) => {
  if (!chatRoomId || !senderId || !content) {
    throw new AppError(
      "Chat room ID, sender ID, and content are required",
      400
    );
  }

  // check if chatroom is present or not
  const chatRoom = await ChatRoom.findById(chatRoomId);
  if (!chatRoom) {
    throw new AppError("Chat room not found", 404);
  }

  // check if sender is part of the chatroom or not
  if (!chatRoom.participants.includes(senderId)) {
    throw new AppError("Sender is not part of the chat room", 403);
  }

  if (content.trim() === "") {
    throw new AppError("Content cannot be empty", 400);
  }

  const result = await Message.create({
    chatRoomId,
    sender: senderId,
    content,
  });

  return result;
};
