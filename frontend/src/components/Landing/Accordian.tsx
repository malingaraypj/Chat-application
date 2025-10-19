import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";

function Accordian({
  AccordianLabel,
  children,
  isActive,
  onClick,
}: {
  AccordianLabel: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        onClick={onClick}
        className="w-full h-12 bg-[#525250] flex items-center justify-between px-4"
      >
        <div>
          <h2 className="text-lg font-bold">{AccordianLabel}</h2>
        </div>
        <div className="flex items-center gap-2">
          <FaChevronDown size={20} />
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="flex h-[70%] flex-col gap-5 mt-5 overflow-y-auto hide-scrollbar"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Accordian;
