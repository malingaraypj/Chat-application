import TextArea from "./TextArea";

// icons
import { MdAttachFile } from "react-icons/md";

function TypeBox() {
  return (
    <div className="w-full h-14 bg-[#454242] flex items-center gap-5 fixed z-50 bottom-0">
      <MdAttachFile size={25} className="ml-5" />
      <TextArea />
    </div>
  );
}

export default TypeBox;
