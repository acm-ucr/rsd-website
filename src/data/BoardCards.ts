import RSDLogo from "@/public/RSDLogo.webp";
import MemberIMG1 from "@/public/board/ArielLee.webp";
import MemberIMG2 from "@/public/board/CandiceHsieh.webp";
import MemberIMG3 from "@/public/board/EmilyHuang.webp";
import MemberIMG4 from "@/public/board/EthanHo.webp";
import MemberIMG5 from "@/public/board/JocelynLee.webp";
import MemberIMG6 from "@/public/board/JustinChao.webp";
import MemberIMG7 from "@/public/board/LaurenChou.webp";
import MemberIMG8 from "@/public/board/NathanTan.webp";
import MemberIMG9 from "@/public/board/PatrickGao.webp";
import MemberIMG10 from "@/public/board/QuentinPhillips.webp";
import { StaticImageData } from "next/image";

export interface BoardMember {
  name: string;
  title: string;
  image: StaticImageData;
  email: string;
  discord: string;
  instagram: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Ethan Ho",
    title: "CAPTAIN",
    image: MemberIMG4,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Justin Chao",
    title: "TEAM MANAGER",
    image: MemberIMG6,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Ariel Lee",
    title: "TEAM MANAGER",
    image: MemberIMG1,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Candice Hsieh",
    title: "TREASURER",
    image: MemberIMG2,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Patrick Gao",
    title: "OUTREACH/FUNDRAISING",
    image: MemberIMG9,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Nathan Tan",
    title: "SOCIAL CHAIR",
    image: MemberIMG8,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Emily Huang",
    title: "PR CHAIR",
    image: MemberIMG3,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Lauren Chou",
    title: "PR CHAIR",
    image: MemberIMG7,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Anishka Durvasula",
    title: "PR CHAIR",
    image: RSDLogo,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Jocelyn Lee",
    title: "WATER COACH",
    image: MemberIMG5,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Justin Shiu",
    title: "WATER COACH",
    image: RSDLogo,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Quentin Phillips",
    title: "LAND COACH",
    image: MemberIMG10,
    email: "/",
    discord: "/",
    instagram: "/",
  },
  {
    name: "Angelica Lee",
    title: "LAND COACH",
    image: RSDLogo,
    email: "/",
    discord: "/",
    instagram: "/",
  },
];

export default boardMembers;
