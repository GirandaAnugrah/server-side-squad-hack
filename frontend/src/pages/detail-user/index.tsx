import { useParams } from "react-router-dom";
import Chip from "../../components/Chip";
import MainLayout from "../../layouts/MainLayouts";
import Button from "../../components/Button";
import { Accessibility, MapPin, PinIcon } from "lucide-react";
import { useAppSelector } from "../../hooks/useRedux";
import useQueryUrl from "../../hooks/useQueryUrl";
import { useEffect } from "react";

const DetailUser = () => {
  const { detailCandidates } = useAppSelector((state) => state.main);
  useEffect(() => {
    console.log("User Data: ", detailCandidates);
  }, [detailCandidates]);
  return (
    <MainLayout>
      <div className="grid place-items-center">
        <div className="md:w-2/5 flex flex-col mx-5 mt-28 ">
          <div className="flex gap-6 p-3">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-52 h-52 border-[2px] border-primary-main rounded-full mb-2"
            />
            <div className="flex flex-col gap-3">
              <div className="font-semibold min-w-40 text-center px-2 py-1 text-sm text-primary-main border-[2px] border-primary-main">
                {detailCandidates?.email}
              </div>
              <h1 className="text-2xl font-bold">
                {detailCandidates?.fullName}
              </h1>
              <div className="flex flex-wrap gap-2">
                {detailCandidates?.interest.map((dt) => (
                  <Chip className="bg-primary-main text-white-main">{dt}</Chip>
                ))}
              </div>
            </div>
          </div>
          <p className="mb-5">{detailCandidates?.description}</p>
          <div className="grid grid-cols-2 gap-2">
            <div>Gender</div>
            <div>{detailCandidates?.gender}</div>
            <div>Highest Study</div>
            <div>{detailCandidates?.education}</div>
            <div>Phone Number</div>
            <div>{detailCandidates?.phoneNumber}</div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex items-center gap-2">
              <MapPin className="text-primary-main" />
              <h2 className="text-2xl">Location</h2>
            </div>
            <div className="grid grid-cols-2">
              <h2>District</h2>
              <h2>{detailCandidates?.location}</h2>
              <h2>Province</h2>
              <h2>{detailCandidates?.province}</h2>
              <h2>Street Name</h2>
              <h2>{detailCandidates?.street} </h2>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex items-center gap-2">
              <Accessibility className="text-primary-main" />
              <h2 className="text-2xl">Deficiency</h2>
            </div>
            <div className="flex gap-1 my-3">
              {detailCandidates?.deficiencies.map((data) => (
                <Chip className="border-[1px] border-primary-main">{data}</Chip>
              ))}
            </div>
          </div>
          <Button className="bg-primary-main text-white-main">
            Contact Via Email
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailUser;
