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

const RegisterPage = () => {
  const [page, setPage] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
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
      {page === 1 && (
        <PersonalInfo register={register} errors={errors} nextpage={setPage} />
      )}
      <Footer />
    </>
  );
};

export default RegisterPage;
