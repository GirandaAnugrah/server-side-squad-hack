import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ hideButton = false }: { hideButton: boolean }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white-main shadow-lg fixed w-full z-50">
      <div className="flex p-5 justify-between">
        <a href="" className="flex items-center gap-1">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
          /> */}
          <span className="text-2xl md:text-3xl text-primary-main font-bold">
            EqualPath
          </span>
        </a>
        {!hideButton && (
          <div className="flex gap-1">
            <Button
              onClick={() => navigate("/login")}
              className="border-[2px] border-primary-main px-3 text-sm md:px-6 text-primary-main"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="bg-primary-main px-3 md:px-6 text-sm border-1 text-white-main"
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
