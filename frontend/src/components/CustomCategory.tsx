import { MoveRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 border-[2px] border-color-text border-opacity-5 p-6 rounded-md">
      {icon}
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="flex items-center opacity-50">
        {employers ? employers + " employers " : ""}{" "}
        <MoveRight
          className="mx-2 w-6 text-color-text cursor-pointer"
          onClick={() => navigate(`/find-employee?searchkey=${title}`)}
        />
      </p>
    </div>
  );
};

export default CustomCategory;
