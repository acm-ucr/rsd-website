import InfoBox from "../InfoBox";
import Image from "next/image";
import Star4Point from "@/public/4pointStar.webp";
import { items } from "@/data/FeeLabels";
import Header from "@/components/Header";

const Registration = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Header text="Fee Information"/>
      <div className="relative flex justify-center">
          <Image src={Star4Point} alt="Four Point Star" className="absolute"  />
          <Image src={Star4Point} alt="Four Point Star" className="absolute" />
        <InfoBox
          text={
            <ul className="marker:text-rsd-gold list-outside list-disc">
              {items.map((item, idx) => (
                <li key={idx}>
                  <span className="text-rsd-gold">{item.label}:</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Registration;
