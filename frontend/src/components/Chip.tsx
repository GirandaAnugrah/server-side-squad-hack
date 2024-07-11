const Chip = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} px-3 py-1 rounded-xl min-w-28 flex justify-center items-center text-sm `}
    >
      {children}
    </div>
  );
};

export default Chip;
