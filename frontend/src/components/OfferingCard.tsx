import React from "react";
// interface OfferingCardProps {
//   icon?: React.ReactNode;
//   title: string;
//   subtitle?: string;
// }

// const OfferingCard: React.FC<OfferingCardProps> = ({
//   icon,
//   title,
//   subtitle,
// }) => {
//   return (
//     <div className="flex flex-col gap-10 rounded-xl items-center px-6 pt-12 pb-24 shadow-md min-h-96 ">
//       {icon}
//       <div className="text-center flex flex-col gap-3">
//         <h1 className="text-2xl font-medium">
//           {title}
//         </h1>
//         <p className="opacity-60 text-sm">
//           {subtitle}
//         </p>
const OfferingCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-10 rounded-xl justify-center items-center pt-6 pb-36 px-10 md:shadow-xl min-h-96 ">
      <img className="w-20" src={img} alt="" />
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="opacity-60 text-md">{desc}</p>
      </div>
    </div>
  );
};

export default OfferingCard;