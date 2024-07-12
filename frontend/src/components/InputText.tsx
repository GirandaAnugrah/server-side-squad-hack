import { AnimatePresence, motion } from "framer-motion";
import React, { InputHTMLAttributes, useEffect } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  labelname: string;
  className?: string;
  SuffixElement?: React.ReactNode;
  inputHeight?: string;
  errMsg?: string;
}

const InputText: React.FC<InputWithLabelProps> = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProps
>(
  (
    {
      name,
      required,
      labelname,
      SuffixElement,
      // inputHeight = "",
      readOnly,
      className,
      errMsg,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <div className={`${className}`}>
          <div>
            <div className="relative">
              <input
                ref={ref}
                type="text"
                id={name}
                name={name}
                readOnly={readOnly}
                {...props}
                aria-describedby="outlined_success_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-primary-main appearance-none  focus:outline-none focus:ring-0 focus:border-primary-main peer"
                placeholder=" "
              />
              <label
                htmlFor={name}
                className="absolute bg-white-main text-sm text-green-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {labelname}
              </label>
            </div>
            <AnimatePresence mode="wait">
              {errMsg && (
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
                  {errMsg}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </>
    );
  }
);
export default InputText;
