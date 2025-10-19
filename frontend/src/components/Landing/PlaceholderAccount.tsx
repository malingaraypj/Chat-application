import { FaUser } from "react-icons/fa6";

function PlaceholderAccount() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-[#b7b7b7] flex justify-between px-5 py-3 items-center gap-5  rounded-xl">
        <div className="flex gap-5 flex-col items-center">
          <div className="bg-[#9a9494] rounded-full w-12 h-12 flex items-center justify-center">
            <FaUser />
          </div>
          <div>
            <h1>Select a group or private chat to start</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderAccount;
