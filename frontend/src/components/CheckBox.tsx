import { BoxSelect, SquareCheckBig } from "lucide-react";
import { useState } from "react";

const CheckBox = ({
  setChecked,
  title,
}: {
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
  title: string;
}) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div
      className={`flex items-center px-4 border-[1px] ${
        isCheck ? "border-primary-main" : "border-darkgray-main"
      } rounded`}
      onClick={() => {
        setChecked((prev) => [...prev, title]);
        setIsCheck((prev) => !prev);
      }}
    >
      {isCheck ? (
        <SquareCheckBig className="text-primary-main" />
      ) : (
        <BoxSelect className="text-darkgray-main" />
      )}

      <label
        htmlFor="bordered-checkbox-2"
        className={`w-full py-2 ms-2 text-sm ${
          isCheck ? "text-primary-main" : "text-darkgray-main"
        } `}
      >
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
