import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${className} px-2 py-1 md:py-2 rounded-sm text-md font-bold text-white border-primary-main`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
