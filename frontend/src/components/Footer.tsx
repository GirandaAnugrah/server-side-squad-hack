import { InstagramIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="md:grid grid-cols-2 py-20 px-16 justify-evenly">
        <div className="flex flex-col gap-2 md:w-3/5 mb-3">
          <h1 className="text-4xl font-bold text-primary-main">EqualPath</h1>
          <p className="text-md opacity-40">
            EqualPath is an application that collaborates with individuals with
            disabilities in finding suitable employment.
          </p>
        </div>
        <div className="md:grid grid-cols-2">
          <div className="flex flex-col gap-8 mb-4">
            <h1 className="text-2xl font-bold">Company</h1>
            <Link to={"/"}>Home Page</Link>
            <Link to={"/"}>Find Employee</Link>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Meet Us</h1>
            <Link to={"/"}>+62 81976564321</Link>
            <Link to={"/"}>info@equalpath.com</Link>
            <Link to={"/"}>Scientia Garden, Gading Serpong</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
