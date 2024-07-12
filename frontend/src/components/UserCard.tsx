import { Currency, CurrencyIcon, LucideCurrency, MapPin } from "lucide-react";
import Chip from "./Chip";

const UserCard = () => {
  return (
    <>
      <div className="bg-white-main rounded- shadow-sm p-6 border-[1px] border-color-text border-opacity-5">
        <div className="flex gap-6">
          <img
            className="rounded-full w-20 h-20 border-[3px] border-primary-main border-opacity-25"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <div className="flex justify-between mb-2">
              <h1 className="text-xl font-bold">Devina Aryani</h1>
              <div className="px-2 py-1 text-sm font-medium text-primary-main border-[1px] border-primary-main">
                Part Time Math Tutor
              </div>
            </div>
            <p className="text-gray flex items-center text-color-text opacity-80 gap-1 flex-wrap">
              <span className="flex gap-2">
                <MapPin className="w-4 text-gray-body" /> Tangerang, Banten
              </span>
              <span className="flex gap-2">
                <Currency className="w-4 text-gray-body" /> Rp. 500.000 - Rp. 1.500.000
              </span>
            </p>
            
            <p className="text-gray-body text-sm mt-2">
            I am autistic but possess incredible knowledge in Mathematics and have 3 - 4 years of teaching experience as a Math Tutor for various Kindergarten levels.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Chip className="bg-primary-main bg-opacity-15 text-primary-main font-medium">
                Mathematic
              </Chip>
              <Chip className="bg-secondary-main bg-opacity-15 text-secondary-main font-medium">
                Teach Experiance
              </Chip>
              <Chip className="bg-tertiary-main bg-opacity-15 text-tertiary-main font-medium">
                Good With Children
              </Chip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
