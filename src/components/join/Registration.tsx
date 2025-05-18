import InfoBox from "../InfoBox";
import Image from "next/image";
import Star4Point from "@/public/4pointStar.webp";
import { items } from "@/data/FeeLabels";

const Registration = () => {
  return (
    <div className="flex flex-col">
      <div className="text-rsd-title-blue text-center text-6xl">
        Fee Information
      </div>
      <div className="relative flex justify-center">
        <div className="absolute top-10 left-0.5 sm:left-1 lg:left-5 xl:left-10">
          <Image src={Star4Point} alt="Four Point Star" width={130} />
        </div>
        <div className="absolute right-0.5 bottom-30 sm:right-1 lg:right-5 xl:right-10">
          <Image src={Star4Point} alt="Four Point Star" className="w-3/4" />
        </div>
        <InfoBox
          text={
            <div className="p-10">
              <ul className="marker:text-rsd-gold list-outside list-disc">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <span className="text-rsd-gold">{item.label}:</span>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Registration;
