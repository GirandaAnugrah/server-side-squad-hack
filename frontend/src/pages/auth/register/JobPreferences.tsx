import ReactSelect from "react-select";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import InputText from "../../../components/InputText";
import TextArea from "../../../components/TextArea";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { PersonalData } from "../../../typings/data";
import React from "react";
import ReactSelectWithLabel from "../../../components/ReactSelectWithLabel";
import { PreferenceOption } from "../../../constant/constant";

interface PersonalInfoProps {
  register: UseFormRegister<PersonalData>;
  errors: FieldErrors<PersonalData>;
  handleSubmit: any;
  control: Control<PersonalData, any>;
  setValue: UseFormSetValue<PersonalData>;
}
const JobPreferences: React.FC<PersonalInfoProps> = ({
  register,
  errors,
  handleSubmit,
  control,
  setValue,
}) => {
  // const handleSubmitData = handleSubmit(() => {
  //   console.log("DATA SUBMITTED: ");
  // });

  return (
    <>
      <div className="h-screen grid place-items-center">
        <div className="flex flex-col w-full px-5 md:w-2/5 ">
          <div className="w-full mx-auto mb-5">
            <h1 className="text-3xl font-bold">Job Preferences</h1>
            <ProgressBar percents="100%" />
          </div>
          <div className="border-b-darkgray-main border-b-[1px] w-full">
            <h2 className="text-2xl font-bold mb-4">
              Desired Job Position & Wage
            </h2>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mt-3 flex flex-col gap-2 justify-start mb-4">
              {/* <ReactSelect
                placeholder="Select your desired job position"
                options={PoritionOptions}
                className="w-full focus:bg-primary-main"
                onChange={(val) =>}
              /> */}
              <Controller // referensi
                control={control}
                name="jobPosition"
                shouldUnregister
                rules={{
                  required: "Tampaknya Refrensi anda masih kosong!",
                }}
                render={({ field: { onChange, value } }) => (
                  <ReactSelectWithLabel
                    label="Referensi Anda Menerima Informasi ini dari?"
                    getOptionLabel={(opt) => opt.label}
                    getOptionValue={(opt) => opt.value}
                    value={PreferenceOption.find((opt) => opt.value === value)}
                    options={PreferenceOption}
                    onChange={(opt) => {
                      setValue("jobPosition", opt?.value || "");
                      onChange(opt?.value.toString());
                    }}
                    // menuPosition="fixed"
                    className="mt-4"
                    placeholder="Referensi anda"
                  />
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <InputText
                  type="number"
                  labelname="Minimum Wage"
                  errMsg={errors.minimumWage?.message}
                  {...register("minimumWage", {
                    required: "Need to input this field",
                  })}
                />
                <InputText
                  type="number"
                  labelname="Maximum Wage"
                  errMsg={errors.maximumWage?.message}
                  {...register("maximumWage", {
                    required: "Need to input this field",
                  })}
                />
              </div>
              <TextArea
                errMsg={errors.description?.message}
                labelname="Description of yourself"
                {...register("description", {
                  required: "Description need to be input",
                })}
              />{" "}
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

export default JobPreferences;
