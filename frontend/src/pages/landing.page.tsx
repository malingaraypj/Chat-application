import { useEffect } from "react";
import Accounts from "../components/Landing/Accounts";
import ActiveAccount from "../components/Landing/ActiveAccount";
import socket from "../socket";

function LandingPage() {
  useEffect(() => {
    socket.emit("joinRoom", "68e6c3b39d7f9b04eb9be7de");
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
