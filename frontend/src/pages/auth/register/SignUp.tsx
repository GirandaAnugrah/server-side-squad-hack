import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { PersonalData } from "../../../typings/data";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PersonalInfoProps {
  register: UseFormRegister<PersonalData>;
  errors: FieldErrors<PersonalData>;
  nextpage: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: UseFormHandleSubmit<PersonalData, undefined>;
}
const SignUp: React.FC<PersonalInfoProps> = ({
  register,
  errors,
  nextpage,
  handleSubmit,
}) => {
  const [cutomError, setCustomError] = useState("");
  const handleNextPage = handleSubmit((data) => {
    if (data.confirmPassword !== data.password)
      return setCustomError("Password and Confirm Password must be the same");

    return nextpage(1);
  });
  return (
    <>
      <div className="h-screen grid place-items-center bg-broken-white">
        <div className="md:w-2/5 w-full p-10">
          <h1 className="text-3xl font-bold py-10 text-center">Sign Up</h1>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleNextPage}
          >
            <InputText
              labelname="Email"
              inputMode="email"
              errMsg={errors.email?.message}
              {...register("email", {
                required: "Email is Required",
              })}
            />
            <InputText
              labelname="Create Password"
              type="password"
              errMsg={errors.password?.message}
              {...register("password", {
                required: "Password is Required",
              })}
            />
            <InputText
              labelname="Confirm Password"
              type="password"
              errMsg={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Confirm Password is Required",
              })}
            />
            <AnimatePresence mode="wait">
              {cutomError && (
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
                  className="text-b3 text-darkred-main origin-top overflow-hidden"
                >
                  {cutomError}
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              type="submit"
              className="bg-primary-main text-white-main rounded-sm mt-5"
            >
              Next
            </Button>

            <span className="text-center">
              Already have an account?{" "}
              <span className="text-link-color font-bold"><Link to={"/login"}>
                Login
              </Link></span>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
