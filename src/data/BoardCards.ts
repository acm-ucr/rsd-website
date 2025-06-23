import ArielLee from "@/public/board/ArielLee.webp";
import CandiceHsieh from "@/public/board/CandiceHsieh.webp";
import BryanNguyen from "@/public/board/BryanNguyen.webp";
import JeffreyDeLeon from "@/public/board/JeffreyDeLeon.webp";
import JustinLee from "@/public/board/JustinLee.webp";
import JustinChao from "@/public/board/JustinChao.webp";
import MaisieKallner from "@/public/board/MaisieKallner.webp";
import NathanTan from "@/public/board/NathanTan.webp";
import VictorXia from "@/public/board/VictorXia.webp";
import AngelicaLee from "@/public/board/AngelicaLee.webp";
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
    instagram: "https://www.instagram.com/aleeriel/",
  },
  {
    name: "Nathan Tan",
    title: "TEAM MANAGER",
    image: NathanTan,
    email: "mailto:ntan018@ucr.edu",
    instagram: "https://www.instagram.com/nathnetan/",
  },
  {
    name: "Victor Xia",
    title: "TEAM MANAGER",
    image: VictorXia,
    email: "mailto:vxia002@ucr.edu",
    instagram: "https://www.instagram.com/bictorlmaoo/",
  },
  {
    name: "Candice Hsieh",
    title: "TREASURER",
    image: CandiceHsieh,
    email: "mailto:shsie017@ucr.edu",
    instagram: "https://www.instagram.com/candice._.hsieh/",
  },
  {
    name: "JustinChao",
    title: "OUTREACH",
    image: JustinChao,
    email: "mailto:jchao035@ucr.edu",
    instagram: "https://www.instagram.com/_chaotime_/",
  },
  {
    name: "Justin Lee",
    title: "WATER COACH",
    image: JustinLee,
    email: "mailto:mwu169@ucr.edu",
    instagram: "https://www.instagram.com/ju.stinleeee/",
  },
  {
    name: "Angelica Lee",
    title: "ASSISTAN WATER COACH",
    image: AngelicaLee,
    email: "mailto:alee558@ucr.edu",
    instagram: "https://www.instagram.com/angelica.leee/",
  },
  {
    name: "Bryan Nguyen",
    title: "LAND COACH",
    image: BryanNguyen,
    email: "mailto:bnguy447@ucr.edu",
    instagram: "https://www.instagram.com/bryan.nnguyen/",
  },
  {
    name: "Jeffrey De Leon",
    title: "SOCIAL CHAIR",
    image: JeffreyDeLeon,
    email: "mailto:jdele030@ucr.edu",
    instagram: "https://www.instagram.com/jeffreythatman/",
  },
  {
    name: "Maisie Kallner",
    title: "PR CHAIR",
    image: MaisieKallner,
    email: "mailto:mkall003@ucr.edu",
    instagram: "https://www.instagram.com/maisiekallner/",
  },
];
