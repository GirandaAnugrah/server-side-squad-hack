import React from "react";
interface OfferingCardProps {
  icon?: React.ReactNode;
  title: string;
  desc?: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-10 rounded-xl items-center px-6 pt-12 pb-24 shadow-md min-h-96 ">
      {icon}
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="opacity-60 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default OfferingCard;
