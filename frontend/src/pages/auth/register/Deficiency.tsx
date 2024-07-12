import React, { useState } from "react";
import CheckBox from "../../../components/CheckBox";
import ProgressBar from "../../../components/ProgressBar";
import Button from "../../../components/Button";
import { UseFormSetValue } from "react-hook-form";
import { PersonalData } from "../../../typings/data";

interface DeviciensiesProps {
  setValue: UseFormSetValue<PersonalData>;
  nextPage: React.Dispatch<React.SetStateAction<number>>;
}

const Defisiency: React.FC<DeviciensiesProps> = ({ setValue, nextPage }) => {
  const [defisience, setDefisience] = useState<string[]>([]);
  const handleNextPage = () => {
    console.log(defisience);
    setValue("deficiency", defisience);
    return nextPage(5);
  };
  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="flex flex-col md:w-2/5 mx-5">
          <div className="md:w-2/5 mx-auto mb-5">
            <h1 className="text-3xl font-bold">Deficiency</h1>
            <ProgressBar percents="80%" />
          </div>
          <div className="border-b-darkgray-main border-b-[1px] w-full">
            <h2 className="text-2xl font-bold">What are your deficiencies?</h2>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 justify-start mb-4">
            <CheckBox title="Visual" setChecked={setDefisience} />
            <CheckBox title="Hearing" setChecked={setDefisience} />
            <CheckBox title="Speaking" setChecked={setDefisience} />
            <CheckBox title="Locomotor" setChecked={setDefisience} />
            <CheckBox title="Neurological" setChecked={setDefisience} />
            <CheckBox title="Other" setChecked={setDefisience} />
          </div>
          <Button
            onClick={handleNextPage}
            className="bg-primary-main rounded-md text-white-main"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Defisiency;
