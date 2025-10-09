import { useEffect } from "react";
import Accounts from "../components/Accounts";
import ActiveAccount from "../components/ActiveAccount";
import socket from "../socket";

function LandingPage() {
  useEffect(() => {
    socket.emit("joinRoom", "68e6c3b39d7f9b04eb9be7de");

    // socket.emit("sendMessage", {
    //   roomId: "68e6c3b39d7f9b04eb9be7de",
    //   senderId: "68e6af2a7d6bfb6880cedc86",
    //   content: "this is testing message",
    // });
  }, []);

  socket.on("receiveMessage", (message) => console.log(message));
  return (
    <div className="w-screen h-screen bg-primary-dark flex">
      <Accounts />
      <ActiveAccount />
    </div>
  );
}

export default LandingPage;
