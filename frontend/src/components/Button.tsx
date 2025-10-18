import React from "react";

function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      {...props}
      className={`py-2 px-4 bg-[#a86803] text-white rounded-md hover:bg-[#8a5402] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
