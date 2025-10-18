import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`bg-transparent text-wrap outline-none border border-[#a86803] rounded-md px-2 ${className}`}
    />
  );
};

export default Input;
