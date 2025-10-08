import { useEffect } from "react";
import Accounts from "../components/Accounts";
import ActiveAccount from "../components/ActiveAccount";
import socket from "../socket";

function LandingPage() {
  useEffect(() => {
    socket.emit("joinRoom", 5);
  }, []);
  return (
    <div className="w-screen h-screen bg-primary-dark flex">
      <Accounts />
      <ActiveAccount />
    </div>
  );
}

export default LandingPage;
