import { useForm } from "react-hook-form";
import { PersonalData } from "../../../typings/data";
import { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SignUp from "./SignUp";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import RegisterRole from "./RegisterRole";
import SkillEducation from "./SkillEducation";
import Defisiency from "./Deficiency";
import JobPreferences from "./JobPreferences";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import SeekingEmployee from "./SeekingEmployee";
import useRegister from "../../../firebase/auth/hooks/useRegister";
import { Candidates, Recruiters } from "../../../firebase/auth/models/User";
import { UserRoles } from "../../../firebase/auth/models/UserRoles";
import { Education } from "../../../firebase/enums/Education";
import { Deficiencies } from "../../../firebase/enums/Deficiencies";
import LoadingFallback from "../../../components/LoadingFallback";
import { setErrorAlert } from "../../../store/main-store/main.slice";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../../../store/main-store/main.action";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { userData } = useAppSelector((state) => state.main);
  const [page, setPage] = useState(0);
  const dispatch = useAppDispatch();
  const { userNow } = useAppSelector((state) => state.main);
  const { loading, user, error, register: handleRegisterUser } = useRegister();
  const [profileImg, setProfileImg] = useState<File | undefined>(undefined);

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
  const handleRegisteruser = handleSubmit(async (data) => {
    console.log("MASUK KE ");
    const paramReqruiter: Recruiters = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phone,
      birthdate: data.age,
      gender: data.gender === "male" ? true : false,
      province: data.province,
      district: data.district,
      street: data.streetName,
      role: userNow === "normal" ? UserRoles.RECRUITERS : UserRoles.CANDIDATES,
      jobPosition: [data.firstJob, data.secJob],
      imageLink: "",
    };
    const paramCandidates: Candidates = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phone,
      birthdate: data.age,
      gender: data.gender === "male" ? true : false,
      province: data.province,
      district: data.district,
      street: data.streetName,
      role: userNow === "normal" ? UserRoles.RECRUITERS : UserRoles.CANDIDATES,
      interest: data.skils,
      education: data.education as Education,
      deficiencies: data.deficiency as Deficiencies[],
      minimumSalary: data.minimumWage,
      maximumSalary: data.maximumWage,
      desiredRole: data.jobPosition,
      location: data.province,
      description: data.description,
      imageLink: "",
    };
    const copyData = userNow === "normal" ? paramReqruiter : paramCandidates;
    dispatch(handleRegister({ user: copyData, userImageBlob: profileImg }));
  });

  useEffect(() => {
    dispatch(setErrorAlert("Testinh"));
  }, [dispatch]);
  useEffect(() => {
    if (userData !== null) return navigate("/");
  }, [dispatch, userData]);

  if (loading) return <LoadingFallback />;
  return (
    <>
      <Navbar hideButton={true} />
      {/* {!error && <AlertError error={error}/>} */}
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
          setProfileImage={setProfileImg}
          profileImage={profileImg}
        />
      )}
      <Footer />
    </>
  );
};

export default RegisterPage;
