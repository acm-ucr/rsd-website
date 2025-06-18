import ArielLee from "@/public/board/ArielLee.webp";
import CandiceHsieh from "@/public/board/CandiceHsieh.webp";
import EmilyHuang from "@/public/board/EmilyHuang.webp";
import EthanHo from "@/public/board/EthanHo.webp";
import JocelynLee from "@/public/board/JocelynLee.webp";
import JustinChao from "@/public/board/JustinChao.webp";
import LaurenChou from "@/public/board/LaurenChou.webp";
import NathanTan from "@/public/board/NathanTan.webp";
import PatrickGao from "@/public/board/PatrickGao.webp";
import QuentinPhillips from "@/public/board/QuentinPhillips.webp";
import AnishkaDhruv from "@/public/board/AnishkaDhruv.webp";
import JustinShiu from "@/public/board/JustinShiu.webp";
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
    name: "Ethan Ho",
    title: "CAPTAIN",
    image: EthanHo,
    email: "/",
    instagram: "/",
  },
  {
    name: "Justin Chao",
    title: "TEAM MANAGER",
    image: JustinChao,
    email: "/",
    instagram: "/",
  },
  {
    name: "Ariel Lee",
    title: "TEAM MANAGER",
    image: ArielLee,
    email: "/",
    instagram: "/",
  },
  {
    name: "Candice Hsieh",
    title: "TREASURER",
    image: CandiceHsieh,
    email: "/",
    instagram: "/",
  },
  {
    name: "Patrick Gao",
    title: "OUTREACH/FUNDRAISING",
    image: PatrickGao,
    email: "/",
    instagram: "/",
  },
  {
    name: "Nathan Tan",
    title: "SOCIAL CHAIR",
    image: NathanTan,
    email: "/",
    instagram: "/",
  },
  {
    name: "Emily Huang",
    title: "PR CHAIR",
    image: EmilyHuang,
    email: "/",
    instagram: "/",
  },
  {
    name: "Lauren Chou",
    title: "PR CHAIR",
    image: LaurenChou,
    email: "/",
    instagram: "/",
  },
  {
    name: "Anishka Durvasula",
    title: "PR CHAIR",
    image: AnishkaDhruv,
    email: "/",
    instagram: "/",
  },
  {
    name: "Jocelyn Lee",
    title: "WATER COACH",
    image: JocelynLee,
    email: "/",
    instagram: "/",
  },
  {
    name: "Justin Shiu",
    title: "WATER COACH",
    image: JustinShiu,
    email: "/",
    instagram: "/",
  },
  {
    name: "Quentin Phillips",
    title: "LAND COACH",
    image: QuentinPhillips,
    email: "/",
    instagram: "/",
  },
];
