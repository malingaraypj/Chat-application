const SocketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected: ", socket.id);

    chatSocketHandler(io, socket);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

export default SocketHandler;
