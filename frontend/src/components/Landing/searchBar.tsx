import { Input } from "@/components/ui/input";

// icons
import { IoSearchOutline } from "react-icons/io5";

function SearchBar({ onTextChange }: { onTextChange: (text: string) => void }) {
  return (
    <div className="flex w-full items-center justify-start gap-5 bg-[#323230] px-5 py-3 rounded-lg">
      <IoSearchOutline />
      <Input
        type="text"
        id="search"
        placeholder="search accounts"
        onChange={(e) => onTextChange(e.target.value)}
        className="w-[100%] outline-none"
      />
    </div>
  );
}

export default SearchBar;
