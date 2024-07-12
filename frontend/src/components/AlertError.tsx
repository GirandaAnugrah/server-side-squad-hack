import { Ban } from "lucide-react";
import { useAppSelector } from "../hooks/useRedux";
import Button from "./Button";

const AlertError = ({ error }: { error: string }) => {
  const { errorAlert } = useAppSelector((state) => state.main);
  return !errorAlert ? (
    <></>
  ) : (
    <div className="h-screen grid place-items-center backdrop-blur-sm fixed w-full z-50">
      <div className=" w-full mx-11 md:w-2/5 flex flex-col bg-white-main border-darkred-main border-[1px] p-5 rounded">
        <div className="flex justify-center mb-5">
          <Ban className="w-20 h-20 text-darkred-main" />
        </div>
        <p className="text-darkred-main text-center text-xl ">{error}</p>
        <div className="flex justify-end">
          <Button className="bg-primary-main w-40 text-white-main">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertError;
