import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input: React.FC<InputProps> = ({ type = "text", id, ...props }) => {
  return (
    <div>
      <input type={type} id={id} {...props} />
    </div>
  );
};

export default Input;
