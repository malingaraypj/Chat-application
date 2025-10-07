import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({ className = "", ...props }) => {
  return (
    <textarea
      {...props}
      className={`bg-transparent resize-none outline-none text-white w-full ${className}`}
    />
  );
};

export default TextArea;
