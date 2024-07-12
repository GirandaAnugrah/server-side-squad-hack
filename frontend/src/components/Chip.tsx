const Chip = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} px-4 py-1.5 rounded-full  flex justify-center items-center text-xs font-semibold`}>
      {children}
    </div>
  );
};

export default Chip;
