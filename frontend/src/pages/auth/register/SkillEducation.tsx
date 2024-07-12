import React, { useState } from "react";
import CheckBox from "../../../components/CheckBox";
import ProgressBar from "../../../components/ProgressBar";
import Button from "../../../components/Button";
import Badge from "../../../components/Badge";
import { UseFormSetValue } from "react-hook-form";
import { PersonalData } from "../../../typings/data";

interface SkillProps {
  setValue: UseFormSetValue<PersonalData>;
  nextPage: React.Dispatch<React.SetStateAction<number>>;
}

const SkillEducation: React.FC<SkillProps> = ({ setValue, nextPage }) => {
  const [skils, setSkils] = useState<string[]>([]);
  const [studies, setStudies] = useState("");

  const handleNextPage = () => {
    if (skils.length === 0 || studies === "") return;
    setValue("skils", skils);
    setValue("education", studies);
    return nextPage(4);
  };
  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="flex flex-col md:w-2/5 mx-5">
          <div className="w-full mx-auto mb-5">
            <h1 className="text-3xl font-bold">Skill & Education</h1>
            <ProgressBar percents="60%" />
          </div>
          <div className="border-b-darkgray-main border-b-[1px] w-full">
            <h2 className="text-2xl font-bold">Skills & Interests</h2>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 justify-around">
            <CheckBox title="Teaching" setChecked={setSkils} />
            <CheckBox title="Cooking" setChecked={setSkils} />
            <CheckBox title="House Assisting" setChecked={setSkils} />
            <CheckBox title="Baby Sitting" setChecked={setSkils} />
            <CheckBox title="Customer Service" setChecked={setSkils} />
          </div>
          <div className="border-b-darkgray-main border-b-[1px] w-full">
            <h2 className="text-2xl font-bold">Highest Education</h2>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 justify-evenly py-3">
            <Badge
              onClick={() => setStudies("No Studies")}
              check={studies === "No Studies"}
            >
              No Studies
            </Badge>
            <Badge
              onClick={() => setStudies("Elementary School")}
              check={studies === "Elementary School"}
            >
              Elementary School
            </Badge>
            <Badge
              onClick={() => setStudies("Junior High School")}
              check={studies === "Junior High School"}
            >
              Junior High School
            </Badge>
            <Badge
              onClick={() => setStudies("Senior High School")}
              check={studies === "Senior High School"}
            >
              Senior High School
            </Badge>
            <Badge
              onClick={() => setStudies("Bachelor's Degree")}
              check={studies === "Bachelor's Degree"}
            >
              Bachelor's Degree
            </Badge>
            <Badge
              onClick={() => setStudies("Master's Degree")}
              check={studies === "Master's Degree"}
            >
              Master's Degree
            </Badge>
            <Badge
              onClick={() => setStudies("Specialized Course")}
              check={studies === "Specialized Course"}
            >
              Specialized Course
            </Badge>
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

export default SkillEducation;
