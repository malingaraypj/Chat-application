import { useEffect } from "react";
import Accounts from "@/components/Landing/Accounts";
import ActiveAccount from "@/components/Landing/ActiveAccount";
import socket from "@/socket";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

function LandingPage() {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    // Set user status to online
    if (userCtx.user) {
      socket.emit("joinRoom", "68e6c3b39d7f9b04eb9be7de");
    }
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
