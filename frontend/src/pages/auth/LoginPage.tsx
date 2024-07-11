import { useForm } from "react-hook-form";
import InputText from "../../components/InputText";
import { LoginData } from "../../typings/data";
import Button from "../../components/Button";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onChange",
  });

  const submitLogin = handleSubmit((data) => {
    console.log("DATA LOGIN: ", data);
  });
  return (
    <div className="h-screen grid place-items-center bg-slate-200">
      <form
        onSubmit={submitLogin}
        className="w-96 flex flex-col rounded-md border-1 shadow-sm bg-slate-50 p-5 gap-1"
      >
        <h1 className="text-center text-2xl font-bold">Login</h1>
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
        <Button type="submit" className="bg-blue-300">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
