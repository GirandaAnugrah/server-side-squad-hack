import SearchInput from "../../components/SearchInput";
import MainLayout from "../../layouts/MainLayouts";
import ImageIcon from "../../assets/images/icon-home.svg";
import UserCard from "../../components/UserCard";
import InputText from "../../components/InputText";

const FindEmployee = () => {
  return (
    <MainLayout>
      <div className="h-screen grid place-items-center pt-24 lg:pt-0">
        <div className="flex justify-evenly items-center min-w-2.5 gap-10 flex-wrap mx-3">
          <img src={ImageIcon} alt="" className="w-80 md:w-96" />
          <div className="h-full w-full md:w-2/5 flex flex-col gap-3">
            <h1 className="text-6xl font-bold">
              <span className="text-primary-main">Accessible</span> Jobs for All
            </h1>
            <p>
              Empowering individuals with disabilities by connecting them to
              meaningful employment opportunities.
            </p>
            <SearchInput />
          </div>
        </div>
      </div>
      <div className="pt-16 md:pt-0 px-2 lg:px-40 mb-10">
        <div className="flex justify-between">
          <span className="text-sm md:text-xl px-5 mb-6 flex">
            3177 Job seekers that match the keyword{" "}
            <span className="font-bold">“Mathematics Tutor”</span>
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-2 md:gap-2">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default FindEmployee;
