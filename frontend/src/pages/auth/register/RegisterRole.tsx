import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { PersonalData } from "../../../typings/data";
import React, { useState } from "react";
import Button from "../../../components/Button";
import Disabled from "../../../assets/images/Disabled.svg";
import Employer from "../../../assets/images/Employer.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "../../../hooks/useRedux";
import { setUserNow } from "../../../store/main-store/main.slice";

interface PersonalInfoProps {
  setValue: UseFormSetValue<PersonalData>;
  nextpage: React.Dispatch<React.SetStateAction<number>>;
}
const RegisterRole: React.FC<PersonalInfoProps> = ({ setValue, nextpage }) => {
  const dispatch = useAppDispatch();
  const [chosee, setChosee] = useState("");
  const [error, setError] = useState("");
  const handleNextPage = () => {
    if (chosee === "") return setError("Please choose 1");
    dispatch(setUserNow(chosee));
    setValue("role", chosee);
    return nextpage(2);
  };
  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="md:w-2/4 flex flex-col mx-5 gap-3">
          <h1 className="text-center text-3xl font-bold mb-8">
            What Role Are You?
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div
              className={`rounded-xl text-center flex flex-col items-center border-[1.5px] ${
                chosee === "disable"
                  ? "border-primary-main"
                  : "border-light-gray"
              } p-5 gap-3 cursor-pointer`}
              onClick={() => setChosee("disable")}
            >
              <img src={Disabled} alt="" className="w-32 h-32" />
              <h1 className="text-xl font-bold">
                I’m disabled & actively searching for a job{" "}
              </h1>
              <p>
                Your disability can range from visual, hearing and speaking
                impairment, inability to walk and neurological disorders
              </p>
            </div>
            <div
              className={`rounded-xl text-center flex flex-col items-center border-[1.5px] ${
                chosee === "normal"
                  ? "border-primary-main"
                  : "border-light-gray"
              } p-5 gap-3 cursor-pointer`}
              onClick={() => setChosee("normal")}
            >
              <img src={Employer} alt="" className="w-32 h-32" />
              <h1 className="text-xl font-bold">
                I’m disabled & actively searching for a job{" "}
              </h1>
              <p>
                Your disability can range from visual, hearing and speaking
                impairment, inability to walk and neurological disorders
              </p>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key={"err-" + name}
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                className="text-b3 text-darkred-main origin-top overflow-hidden text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            onClick={handleNextPage}
            className="bg-primary-main px-6 rounded-lg text-white-main"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterRole;
