import { FaUser } from "react-icons/fa6";

function ActiveHeader() {
  return (
    <div className="flex w-full p-2 gap-5 bg-[#3a3838] sticky top-1 z-50 rounded-lg">
      <div className="bg-[#222020] rounded-full w-12 h-12 flex items-center justify-center">
        <FaUser />
      </div>
      <div>
        <h1>UserName</h1>
        <p>suptitle</p>
      </div>
    </div>
  );
}

export default ActiveHeader;
