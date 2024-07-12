import MainLayout from "../../layouts/MainLayouts";
import ImageIcon from "../../assets/images/icon-home.svg";
import SearchInput from "../../components/SearchInput";
import UserCard from "../../components/UserCard";
import {
  MoveRight,
} from "lucide-react";

const FindPage = () => {
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
            <SearchInput />
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 lg:mx-36 gap-6">  
        <div className="w-full mx-6 my-3">
          <UserCard />
        </div>
        <div className="w-full mx-6 my-3">
          <UserCard />
        </div>
      </div>
    </MainLayout>
    
  );
};

export default FindPage;
