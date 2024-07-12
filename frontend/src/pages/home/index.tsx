import MainLayout from "../../layouts/MainLayouts";
import ImageIcon from "../../assets/images/icon-home.svg";
import ImageCall from "../../assets/images/call-calling.svg";
import ImageFavourite from "../../assets/images/favourite.svg";
import ImageFork from "../../assets/images/ForkKnife.svg";
import ImageHome from "../../assets/images/Home.svg";
import ImageOne from "../../assets/images/Icon-1.svg";
import ImageTeach from "../../assets/images/Icon.svg";
import ImageMusic from "../../assets/images/Music.svg";
import IconKey from "../../assets/images/Key-pana.svg";
import IconDisabled from "../../assets/images/disabled student-amico.svg";
import IconDream from "../../assets/images/Button style-cuate.svg";
import SearchInput from "../../components/SearchInput";
import CustomCategory from "../../components/CustomCategory";
import {
  Baby,
  Code,
  CookingPot,
  GraduationCap,
  Home,
  MoveRight,
  Music4,
  PhoneCall,
} from "lucide-react";
import OfferingCard from "../../components/OfferingCard";
import Button from "../../components/Button";
import UserCard from "../../components/UserCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleOnSearch = () => {
    return navigate(`/find-employee?searchkey=${search}`);
  };
  return (
    <MainLayout>
      <div className="h-screen grid place-items-center pt-24 lg:pt-0">
        <div className="flex justify-evenly items-center min-w-2.5 gap-10 flex-wrap mx-3">
          <img src={ImageIcon} alt="" className="w-80 md:w-96" />
          <div className="h-full w-full md:w-2/5 flex flex-col gap-3">
            <h1 className="text-6xl font-bold">
              <span className="text-primary-main">Accessible</span> Jobs for All
            </h1>
            <p className="text-color-text">
              Empowering individuals with disabilities by connecting them to
              meaningful employment opportunities.
            </p>
            <SearchInput searchKey={setSearch} onSearch={handleOnSearch} />
          </div>
        </div>
      </div>
      <div className="pt-16 md:pt-0 px-2 lg:px-40 mb-10">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold px-5 mb-12">
            Explore by <span className="text-primary-main">Category</span>
          </h2>
          <div className="flex">
            <p
              className="text-lg font-medium text-primary-main cursor-pointer"
              onClick={() => navigate("/find-employee")}
            >
              Show all job seekers
            </p>
            <MoveRight className="mx-2 w-6 text-primary-main  " />
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-2 sm:gap-6">
          <CustomCategory
            icon={<img src={ImageTeach} alt="" className="w-12 h-12" />}
            title="Teaching"
            employers="255"
          />
          <CustomCategory
            icon={<img src={ImageFork} alt="" className="w-12 h-12" />}
            title="Cooking"
            employers="255"
          />
          <CustomCategory
            icon={<img src={ImageHome} alt="" className="w-12 h-12" />}
            title="House Assistant"
            employers="255"
          />
          <CustomCategory
            icon={<img src={ImageFavourite} alt="" className="w-12 h-12" />}
            title="Babysitting"
            employers="255"
          />
          <CustomCategory
            icon={<img src={ImageMusic} alt="" className="w-12 h-12" />}
            title="Musician"
            employers="255"
          />
          <CustomCategory
            icon={<img src={ImageOne} alt="" className="w-12 h-12" />}
            title="Coding & Desain"
            employers="255"
          />
          <CustomCategory
            icon={<img src={ImageCall} alt="" className="w-12 h-12" />}
            title="Customer Service"
            employers="255"
          />
        </div>
      </div>
      <div className="xl:flex justify-between pt-20 mx-16">
        <div className="flex flex-col justify-center items-start w-2/3">
          <div>
            <h1 className="text-lg font-regular tracking-widest text-primary-main">
              EqualPath
            </h1>
            <h1 className="text-5xl pt-2 font-bold">What we offer</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <OfferingCard
            icon={<img src={IconDream} alt="" className="w-56 md:w-68" />}
            title="Find your Dream Job Opportunity"
            desc="Our platform connects you with employers who value diversity and are committed to creating an inclusive workforce"
          />
          <OfferingCard
            icon={<img src={IconKey} alt="" className="w-56 md:w-68" />}
            title="Unlock Potential of your Skills"
            desc="By unlocking your potential, you’ll stand out to employers and open doors to exciting career prospects."
          />
          <OfferingCard
            icon={<img src={IconDisabled} alt="" className="w-56 md:w-68" />}
            title=" Solution for the Disabled"
            desc="We provide tailored solutions, including job matching algorithms and resources to support your job search."
          />
        </div>
      </div>
      <div className="bg-darkgray-main py-24 px-16 text-white-main md:grid grid-cols-2 mt-32">
        <div className="flex flex-col gap-10 mr-8">
          <h1 className="text-5xl font-bold mt-6">
            All-in-one resource for disabled job seekers
          </h1>
          <p>
            EqualPath is an application that collaborates with individuals with
            disabilities in finding suitable employment. This application aims
            to increase public awareness and perspective that people with
            disabilities are capable of making major contributions. By
            understanding users' needs and skills, EqualPath helps them find
            jobs that match their abilities and specializations.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold mt-6">Register Now</h1>
          <p>
            Employers can easily discover your unique skills as a person with
            disabilities. Our platform streamlines the job search process,
            connecting you with opportunities that align with your abilities and
            aspirations. Whether you’re an adept coder, a caretaker, or a
            skilled musician, we’re here to empower you on your journey toward
            meaningful employment. Join us today and let your talents shine!
          </p>
          <Button className="bg-primary-main">Sign Up</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
