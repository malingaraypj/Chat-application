import { configDotenv } from "dotenv";
configDotenv({ path: "./.env" });

import app from "./app.js";
import http from "http";
import { Server } from "socket.io";
import chatSocketHandler from "./socket.js";

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

chatSocketHandler(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
