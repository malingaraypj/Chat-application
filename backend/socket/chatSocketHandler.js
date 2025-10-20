import { createMessage } from "../services/chat.services.js";
import catchSocketAsync from "../utils/catchSocketAsync.js";

const socketHandler = (io, socket) => {
  socket.on("join-group", (roomId) => {
    console.log("user joined to group:", roomId);
    socket.join(roomId);
  });

  socket.on(
    "send-message",
    catchSocketAsync(async (socket, data) => {
      const { roomId, senderId, content } = data;

      if (!roomId || !senderId || !content) {
        throw new Error("Invalid message payload");
      }

      const result = await createMessage(roomId, senderId, content);
      console.log("message sent to group:", roomId);
      io.to(roomId).emit("receive-message", result);
    })
  );
};

export default socketHandler;
