import { Link, useLocation, useNavigate, useRoutes } from "react-router-dom";
import Button from "./Button";
import { useAppSelector } from "../hooks/useRedux";
import { auth } from "../firebase/Firebase";

const Navbar = ({ hideButton = false }: { hideButton: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = useAppSelector((state) => state.main);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };
  return (
    <nav className="bg-white-main shadow-lg fixed w-full z-50">
      <div className="flex p-5 justify-between">
        <a href="" className="flex items-center gap-1">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
          /> */}
          <Link
            to={"/"}
            className="text-2xl md:text-3xl text-primary-main font-bold"
          >
            EqualPath
          </Link>
        </a>
        <div className="flex justify-center items-center gap-3">
          <Link
            to={"/"}
            className={`${
              location.pathname === "/" ? "text-primary-main " : ""
            } hover:text-primary-main underline`}
          >
            HomePage
          </Link>
          <Link
            to={"/find-employee"}
            className={`${
              location.pathname === "/find-employee" ? "text-primary-main " : ""
            } hover:text-primary-main underline`}
          >
            Find Employee
          </Link>
        </div>
        {!hideButton && userData === null ? (
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
        ) : (
          <></>
        )}
        {!hideButton && userData !== null ? (
          <Button
            onClick={handleSignOut}
            className="bg-primary-main px-3 text-sm text-white-main"
          >
            Logout
          </Button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
