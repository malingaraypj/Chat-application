import Message from "../models/Message.js";
import AppError from "../utils/AppError.js";

const socketHandler = (io, socket) => {
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);

    console.log(`user ${socket.id} joined group ${roomId}`);
  });

  socket.on("sendMessage", async ({ roomId, senderId, content }) => {
    try {
      const result = await Message.create({
        chatRoomId: roomId,
        sender: senderId,
        content: content,
      });

      io.emit("receiveMessage", result);
    } catch (err) {
      console.log(err);
      throw new AppError("error while sending message");
    }
  });
};

export default socketHandler;
