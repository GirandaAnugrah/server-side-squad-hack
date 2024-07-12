const ProgressBar = ({ percents }: { percents: string }) => {
  return (
    <div className="w-full bg-light-gray-body rounded-full h-2.5">
      <div
        className="bg-secondary-main h-2.5 rounded-full"
        style={{ width: `${percents}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
