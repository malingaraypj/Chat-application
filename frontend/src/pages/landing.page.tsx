import Accounts from "../components/Accounts";
import ActiveAccount from "../components/ActiveAccount";

function LandingPage() {
  return (
    <div className="w-screen h-screen bg-primary-dark flex">
      <Accounts />
      <ActiveAccount />
    </div>
  );
}

export default LandingPage;
