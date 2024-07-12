import SearchInput from "../../components/SearchInput";
import MainLayout from "../../layouts/MainLayouts";
import ImageIcon from "../../assets/images/icon-home.svg";
import UserCard from "../../components/UserCard";
import InputText from "../../components/InputText";
import { useFetchCandidatesList } from "../../firebase/Candidates/hooks/useFetchCandidatesList";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getAllDataUser } from "../../store/main-store/main.action";
import useQueryUrl from "../../hooks/useQueryUrl";
import SearchTextLocation from "../../components/SearchTextLocation";

const FindEmployee = () => {
  const dispatch = useAppDispatch();
  const { dataCandidates } = useAppSelector((state) => state.main);
  const query = useQueryUrl();
  const [searchSkill, setSearchSkill] = useState(query.get("searchkey") || "");
  const [searchLoc, setSearchLoc] = useState("");

  const memoizeData = useMemo(() => {
    return searchSkill === "" && searchLoc === ""
      ? dataCandidates
      : dataCandidates
          .filter((dt) =>
            dt.desiredRole.toLowerCase().includes(searchSkill.toLowerCase())
          )
          .filter((dt) =>
            dt.location.toLowerCase().includes(searchLoc.toLowerCase())
          );
  }, [searchSkill, dataCandidates]);

  useEffect(() => {
    dispatch(getAllDataUser());
  }, [dispatch]);

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
            <SearchTextLocation
              searchKeyLocation={setSearchLoc}
              searchKeySkill={setSearchSkill}
            />
            {/* <SearchInput searchKey={setSearch} /> */}
          </div>
        </div>
      </div>
      <div className="pt-16 md:pt-0 px-2 lg:px-40 mb-10">
        <div className="flex justify-between">
          <span
            className={`text-sm md:text-xl px-5 mb-6 flex ${
              searchSkill === "" ? "hidden" : ""
            }`}
          >
            {memoizeData.length} Job seekers that match the keyword{" "}
            <span className={`font-bold`}>“{searchSkill}”</span>
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-2 md:gap-2">
          {memoizeData.map((dt) => (
            <UserCard user={dt} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default FindEmployee;
