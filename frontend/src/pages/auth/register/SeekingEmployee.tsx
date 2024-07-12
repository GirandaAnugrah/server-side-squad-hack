import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import ProgressBar from "../../../components/ProgressBar";
import { PersonalData } from "../../../typings/data";
import React from "react";
import ReactSelectWithLabel from "../../../components/ReactSelectWithLabel";
import { PreferenceOption } from "../../../constant/constant";
import Button from "../../../components/Button";

interface PersonalInfoProps {
  handleSubmit: any;
  control: Control<PersonalData, any>;
  setValue: UseFormSetValue<PersonalData>;
}
const SeekingEmployee: React.FC<PersonalInfoProps> = ({
  handleSubmit,
  control,
  setValue,
}) => {
  return (
    <>
      <div className="h-screen grid place-items-center bg-broken-white">
        <div className="flex flex-col w-full px-5 md:w-2/5 ">
          <div className="w-full mx-auto mb-5">
            <h1 className="text-3xl font-bold mb-4">Seeking Employee</h1>
            <ProgressBar percents="100%" />
          </div>
          <div className="border-b-darkgray-main border-b-[1px] w-full">
            <h2 className="text-2xl font-bold mb-4">
              What job positions are you seeking from potential job seekers?
            </h2>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mt-3 flex flex-col gap-2 justify-start mb-4">
              <Controller // referensi
                control={control}
                name="firstJob"
                shouldUnregister
                rules={{
                  required: "This job position field is still empty!",
                }}
                render={({ field: { onChange, value } }) => (
                  <ReactSelectWithLabel
                    label="First job position you’re looking for"
                    getOptionLabel={(opt) => opt.label}
                    getOptionValue={(opt) => opt.value}
                    value={PreferenceOption.find((opt) => opt.value === value)}
                    options={PreferenceOption}
                    onChange={(opt) => {
                      setValue("firstJob", opt?.value || "");
                      onChange(opt?.value.toString());
                    }}
                    // menuPosition="fixed"
                    className="mt-4"
                    placeholder="Enter the first job position"
                  />
                )}
              />
              <Controller // referensi
                control={control}
                name="secJob"
                shouldUnregister
                rules={{
                  required: "This job position field is still empty!",
                }}
                render={({ field: { onChange, value } }) => (
                  <ReactSelectWithLabel
                    label="Second job position you’re looking for"
                    getOptionLabel={(opt) => opt.label}
                    getOptionValue={(opt) => opt.value}
                    value={PreferenceOption.find((opt) => opt.value === value)}
                    options={PreferenceOption}
                    onChange={(opt) => {
                      setValue("secJob", opt?.value || "");
                      onChange(opt?.value.toString());
                    }}
                    // menuPosition="fixed"
                    className="mt-4"
                    placeholder="Enter the second job position"
                  />
                )}
              />
            </div>
            <Button
              type="submit"
              className="bg-primary-main rounded-md text-white-main"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SeekingEmployee;
