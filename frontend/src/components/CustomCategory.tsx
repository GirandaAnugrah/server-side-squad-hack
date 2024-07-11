import { MoveRight } from "lucide-react";
import React from "react";

interface CustomCategoryProps {
  icon?: React.ReactNode;
  title: string;
  employers?: string;
}

const CustomCategory: React.FC<CustomCategoryProps> = ({
  icon,
  title,
  employers,
}) => {
  return (
    <div className="flex flex-col gap-3 border-[1px] border-color-text border-opacity-20 p-5">
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="flex items-center opacity-50">
        {employers ? employers + " employers " : ""}{" "}
        <MoveRight className="w-5" />
      </p>
    </div>
  );
};

export default CustomCategory;
