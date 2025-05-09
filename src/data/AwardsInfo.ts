import { StaticImageData } from "next/image";
import Awardlogo from "@/public/singlePaddle.webp";

export interface Award {
  name: string;
  image: StaticImageData;
}
const Awards: Award[] = [
  {
    name: "2010 College Cup Mixed 1st place C Division",
    image: Awardlogo,
  },
  {
    name: "2015 & 2016 College Cup Mixed 2nd place C Division",
    image: Awardlogo,
  },
  {
    name: "2017 College Cup Mixed 1st place B Division",
    image: Awardlogo,
  },
  {
    name: "2018 College Cup Mixed 1st place B Division",
    image: Awardlogo,
  },
];
export default Awards;
