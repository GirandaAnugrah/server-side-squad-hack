import { useForm } from "react-hook-form";
import InputText from "../../components/InputText";
import { LoginData } from "../../typings/data";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import LoadingFallback from "../../components/LoadingFallback";
import { handleLogin } from "../../store/main-store/main.action";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userData } = useAppSelector((state) => state.main);
  const { initialLoad } = useAppSelector((state) => state.main);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onChange",
  });

  const submitLogin = handleSubmit(async (data) => {
    dispatch(handleLogin({ email: data.email, password: data.password }));
  });

  useEffect(() => {
    if (userData !== null) return navigate("/");
  }, [dispatch, userData]);

  if (initialLoad) return <LoadingFallback />;
  return (
    <>
      <Navbar hideButton />
      <div className="h-screen grid place-items-center bg-slate-200 ">
        <form
          onSubmit={submitLogin}
          className="w-full md:w-2/5 flex flex-col rounded-md bg-slate-50 p-5 gap-5 "
        >
          <h1 className="text-center text-3xl font-bold">Login</h1>
          <InputText
            labelname="Email"
            className="w-full"
            inputMode="email"
            required
            errMsg={errors.email?.message}
            {...register("email", {
              required: "Email is required",
            })}
          />
          <InputText
            labelname="Password"
            className="w-full"
            type="password"
            required
            errMsg={errors.password?.message}
            {...register("password", {
              required: "Password is required",
            })}
          />
          <Button
            type="submit"
            className="bg-primary-main text-white-main rounded-lg"
          >
            Submit
          </Button>
          <span className="text-center">
            Don’t have an account ?{" "}
            <Link className="text-blue-main" to={"/register"}>
              Sign up
            </Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
