import { Checkbox } from "../ui/checkbox";
import UserCard from "./UserCard";

function UserCheckBox({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center gap-5">
      <Checkbox
        id={id}
        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 w-[20px] h-[20px] font-bold data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
      />
      <label htmlFor={id}>
        <UserCard label={label} />
      </label>
    </div>
  );
}

export default UserCheckBox;
