const ProgressBar = ({ percents }: { percents: string }) => {
  return (
    <div className="w-full bg-light-gray rounded-full h-2.5">
      <div
        className="bg-primary-main h-2.5 rounded-full"
        style={{ width: `${percents}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
