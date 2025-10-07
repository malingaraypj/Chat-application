import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
};

const TextArea: React.FC<TextAreaProps> = ({
  className = "",
  ref,
  ...props
}) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={`bg-transparent resize-none outline-none text-white w-full ${className}`}
    />
  );
};

export default TextArea;
