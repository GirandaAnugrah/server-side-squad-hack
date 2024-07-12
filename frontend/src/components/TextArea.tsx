import { AnimatePresence, motion } from "framer-motion";
import React, { InputHTMLAttributes, useEffect } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  labelname: string;
  className?: string;
  SuffixElement?: React.ReactNode;
  inputHeight?: string;
  errMsg?: string;
}

const TextArea: React.FC<InputWithLabelProps> = React.forwardRef<
  HTMLTextAreaElement,
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
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {labelname}
          </label>
          <textarea
            id={name}
            name={name}
            readOnly={readOnly}
            {...props}
            rows={4}
            ref={ref}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-primary-main focus:ring-primary-main focus:border-primary-main"
            placeholder="Describe your skills, years of experience, and why you should be hired for the job you’re looking for"
          ></textarea>
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
      </>
    );
  }
);
export default TextArea;

// const TextArea = () => {
//   return (
//     <>
//       <label
//         htmlFor="message"
//         className="block mb-2 text-sm font-medium text-gray-900"
//       >
//         Description Of Yourself
//       </label>
//       <textarea
//         id="message"
//         rows={4}
//         className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-primary-main focus:ring-primary-main focus:border-primary-main"
//         placeholder="Describe your skills, years of experience, and why you should be hired for the job you’re looking for"
//       ></textarea>
//     </>
//   );
// };

// export default TextArea;
