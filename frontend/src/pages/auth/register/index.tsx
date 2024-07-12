import { useForm } from "react-hook-form";
import InputText from "../../../components/InputText";
import ProgressBar from "../../../components/ProgressBar";
import MainLayout from "../../../layouts/MainLayouts";
import { PersonalData } from "../../../typings/data";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SignUp from "./SignUp";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import RegisterRole from "./RegisterRole";
import SkillEducation from "./SkillEducation";
import Defisiency from "./Deficiency";
import JobPreferences from "./JobPreferences";
import { useAppSelector } from "../../../hooks/useRedux";
import SeekingEmployee from "./SeekingEmployee";

const RegisterPage = () => {
  const [page, setPage] = useState(0);
  const { userNow } = useAppSelector((state) => state.main);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<PersonalData>({
    mode: "onChange",
    defaultValues: {},
  });
  const handleRegisteruser = handleSubmit((data) => {
    console.log("REGISTER DATA: ", data);
  });
  useEffect(() => {
    console.log("PAGE: ", page);
  }, [page]);
  return (
    <>
      <Navbar hideButton={true} />
      {page === 0 && (
        <>
          <SignUp
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            nextpage={setPage}
          />
        </>
      )}
      {page === 5 && (
        <JobPreferences
          setValue={setValue}
          control={control}
          register={register}
          errors={errors}
          handleSubmit={handleRegisteruser}
        />
      )}
      {page === 4 && <Defisiency setValue={setValue} nextPage={setPage} />}
      {page === 3 && userNow === "disable" && (
        <SkillEducation setValue={setValue} nextPage={setPage} />
      )}
      {page === 3 && userNow === "normal" && (
        <SeekingEmployee
          setValue={setValue}
          handleSubmit={handleRegisteruser}
          control={control}
        />
      )}
      {page === 1 && <RegisterRole nextpage={setPage} setValue={setValue} />}
      {page === 2 && (
        <PersonalInfo
          setValue={setValue}
          register={register}
          errors={errors}
          nextpage={setPage}
          control={control}
        />
      )}
      <Footer />
    </>
  );
};

export default RegisterPage;
