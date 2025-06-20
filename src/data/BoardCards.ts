import ArielLee from "@/public/board/ArielLee.jpg";
import CandiceHsieh from "@/public/board/CandiceHsieh.jpg";
import BryanNguyen from "@/public/board/BryanNguyen.jpg";
import JeffreyDeLeon from "@/public/board/JeffreyDeLeon.jpg";
import JustinLee from "@/public/board/JustinLee.jpg";
import JustinChao from "@/public/board/JustinChao.jpg";
import MaisieKallner from "@/public/board/MaisieKallner.jpg";
import NathanTan from "@/public/board/NathanTan.jpg";
import VictorXia from "@/public/board/VictorXia.jpg";
import AngelicaLee from "@/public/board/AngelicaLee.jpg";
import { StaticImageData } from "next/image";

export interface BoardMember {
  name: string;
  title: string;
  image: StaticImageData;
  email: string;
  instagram: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Ariel Lee",
    title: "CAPTAIN",
    image: ArielLee,
    email: "mailto:alee537@ucr.edu",
    instagram: "/",
  },
  {
    name: "Nathan Tan",
    title: "TEAM MANAGER",
    image: NathanTan,
    email: "mailto:ntan018@ucr.edu",
    instagram: "/",
  },
  {
    name: "Victor Xia",
    title: "TEAM MANAGER",
    image: VictorXia,
    email: "mailto:vxia002@ucr.edu",
    instagram: "/",
  },
  {
    name: "Candice Hsieh",
    title: "TREASURER",
    image: CandiceHsieh,
    email: "mailto:shsie017@ucr.edu",
    instagram: "/",
  },
  {
    name: "JustinChao",
    title: "OUTREACH",
    image: JustinChao,
    email: "mailto:jchao035@ucr.edu",
    instagram: "/",
  },
  {
    name: "Justin Lee",
    title: "WATER COACH",
    image: JustinLee,
    email: "mailto:mwu169@ucr.edu",
    instagram: "/",
  },
  {
    name: "Angelica Lee",
    title: "ASSISTAN WATER COACH",
    image: AngelicaLee,
    email: "mailto:alee558@ucr.edu",
    instagram: "/",
  },
  {
    name: "Bryan Nguyen",
    title: "LAND COACH",
    image: BryanNguyen,
    email: "mailto:bnguy447@ucr.edu",
    instagram: "/",
  },
  {
    name: "Jeffrey De Leon",
    title: "SOCIAL CHAIR",
    image: JeffreyDeLeon,
    email: "mailto:jdele030@ucr.edu",
    instagram: "/",
  },
  {
    name: "Maisie Kallner",
    title: "PR CHAIR",
    image: MaisieKallner,
    email: "mailto:mkall003@ucr.edu",
    instagram: "/",
  },
];
