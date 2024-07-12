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
    <div className="flex flex-col gap-4 border-[2px] border-color-text border-opacity-5 p-6 rounded-md">
      {icon}
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="flex items-center opacity-50">
        {employers ? employers + " employers " : ""}{" "}
        <MoveRight className="mx-2 w-6 text-color-text" />
      </p>
    </div>
  );
};

export default CustomCategory;
