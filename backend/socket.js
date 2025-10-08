const chatSocketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected: ", socket.id);

    socket.on("joinRoom", (roomId) => {
      console.log("joined to room : " + roomId);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

export default chatSocketHandler;
