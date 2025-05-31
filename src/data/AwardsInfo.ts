import { StaticImageData } from "next/image";
import CollegeCupLogo from "@/public/home/collegecuplogo.jpg";
import TempeLogo from "@/public/home/tempelogo.png";

export interface Award {
  name: string;
  image: StaticImageData;
}
const Awards: Award[] = [
  {
    name: "2010 College Cup Mixed 1st place C Division",
    image: CollegeCupLogo,
  },
  {
    name: "2015 & 2016 College Cup Mixed 2nd place C Division",
    image: CollegeCupLogo,
  },
  {
    name: "2017 College Cup Mixed 1st place B Division",
    image: CollegeCupLogo,
  },
  {
    name: "2019 College Cup Mixed 3rd place B Division",
    image: CollegeCupLogo,
  },
  {
    name: "2022 College Cup Mixed 2nd place B Division",
    image: CollegeCupLogo,
  },
  {
    name: "2023 College Cup Mixed 1st place B Division",
    image: CollegeCupLogo,
  },
  {
    name: "2024 Arizona Dragon Boat Festival 2nd place C Division",
    image: TempeLogo,
  },
];
export default Awards;
