import React from "react";

const Badge = ({
  children,
  check,
  ...props
}: {
  children: React.ReactNode;
  check: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div
        className={`px-4 py-2 text-sm rounded-3xl border-[2px] cursor-pointer ${
          check ? "border-primary-background bg-primary-main text-white-main" : "border-darkgray-main"
        }`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Badge;
