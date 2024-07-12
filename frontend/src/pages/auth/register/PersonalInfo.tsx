import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import ProgressBar from "../../../components/ProgressBar";
import { PersonalData } from "../../../typings/data";
import React from "react";
import ReactSelectWithLabel from "../../../components/ReactSelectWithLabel";

const OPTION_GENDER = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

interface PersonalInfoProps {
  register: UseFormRegister<PersonalData>;
  errors: FieldErrors<PersonalData>;
  nextpage: React.Dispatch<React.SetStateAction<number>>;
  control: Control<PersonalData, any>;
  setValue: UseFormSetValue<PersonalData>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  register,
  errors,
  nextpage,
  control,
  setValue,
}) => {
  return (
    <>
      <div className="mx-5 md:w-2/5 md:mx-auto pt-32 flex flex-col gap-2 bg-broken-white">
        <div className="w-80 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3">Personal info</h1>
          <ProgressBar percents="30%" />
        </div>
        <div className="border-b-[1px] border-b-darkgray-main py-3 mb-3">
          <h3 className="text-xl font-bold">Biodata</h3>
        </div>
        <form className="flex flex-col gap-4" onSubmit={() => nextpage(3)}>
          <InputText
            labelname="Full Name"
            errMsg={errors.fullName?.message}
            {...register("fullName", {
              required: "Full Name is Required",
            })}
          />
          <InputText
            labelname="Phone Number"
            errMsg={errors.phone?.message}
            {...register("phone", {
              required: "Phone number is Required",
            })}
          />
          <InputText
            labelname="Age"
            errMsg={errors.age?.message}
            {...register("age", {
              required: "Age is Required",
            })}
          />
          <Controller
            control={control}
            name="gender"
            shouldUnregister
            rules={{
              required: "Gender must be filled",
            }}
            render={({ field: { onChange, value } }) => (
              <ReactSelectWithLabel
                label="Gender"
                getOptionLabel={(opt) => opt.label}
                getOptionValue={(opt) => opt.value}
                value={OPTION_GENDER.find((opt) => opt.value === value)}
                options={OPTION_GENDER}
                onChange={(opt) => {
                  setValue("gender", opt?.value.toString() || "");
                  onChange(opt?.value.toString());
                }}
                className="mt-4"
                placeholder="Gender"
              />
            )}
          />
          <div className="border-b-[1px] border-b-darkgray-main py-3 mb-3">
            <h3 className="text-xl font-bold">Address</h3>
          </div>
          <InputText
            labelname="Province"
            errMsg={errors.province?.message}
            {...register("province", {
              required: "Province is Required",
            })}
          />
          <InputText
            labelname="District"
            errMsg={errors.district?.message}
            {...register("district", {
              required: "District is Required",
            })}
          />
          <InputText
            labelname="Street Name"
            errMsg={errors.streetName?.message}
            {...register("streetName", {
              required: "Street Name is Required",
            })}
          />
          <Button
            type="submit"
            className="px-6 bg-primary-main rounded-sm text-white-main"
          >
            Next
          </Button>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
