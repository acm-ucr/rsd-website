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
        <div className="absolute top-10 left-25">
          <Image src={Star4Point} alt="Four Point Star" width={130} />
        </div>
        <div className="absolute right-25 bottom-20">
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
