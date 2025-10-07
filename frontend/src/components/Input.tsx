import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`bg-transparent text-wrap outline-none text-white ${className}`}
    />
  );
};

export default Input;
