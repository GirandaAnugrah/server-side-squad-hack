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
    useEffect(() => {
      console.log(errMsg, name);
    }, [errMsg, name]);
    return (
      <>
        <div className={`${className}`}>
          <label htmlFor={`${name}`} className="block mb-1 font-semibold">
            {labelname}
            {required ? <span className="text-red-500">*</span> : ""}
          </label>
          <div className="flex space-x-2 items-center">
            <input
              ref={ref}
              id={name}
              name={name}
              type="text"
              // required={required}
              className={`bg-white rounded border-2 px-3 py-2 focus:border-primary outline-none transition-colors w-full`}
              readOnly={readOnly}
              {...props}
            />
            {SuffixElement && (
              <button className="bg-primary  items-center justify-center w-9 h-9 border border-primary hidden lg:flex">
                {SuffixElement}
              </button>
            )}
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
                className="text-b3 text-red-500 origin-top overflow-hidden"
              >
                {errMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  }
);
export default InputText;
