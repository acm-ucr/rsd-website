import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import Image from "next/image";
import Paddles from "@/public/doublePaddle.webp";
import Star4Point from "@/public/4pointStar.webp";

const AboutUs = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center px-6 py-14 text-center">
      <Header text="About Us" />
      <InfoBox
        text="Dragon Boat is a team sport with 18-20 paddlers, a drummer, and a steer. The drummer sits at the front, drumming to set the pace and make calls when necessary. The steer stands at the back of the boat (the stern) and guides the boat through the water, keeping it on course. 
    Riverside Surging Dragons is UCR’s competitive dragon boat team, where competition meets community! We push each other to be stronger on the water while creating a tight-knit community through team socials, bonding events, and shared experiences. Whether you’re here to compete, make friends, or try something new, our boat is always open to you!"
      />
      <Image
        src={Star4Point}
        alt="Four Point Star"
        className="absolute top-60 left-25 w-30 rotate-45"
      />
      <Image
        src={Star4Point}
        alt="Four Point Star"
        className="absolute top-75 left-10 w-20"
      />
      <Image
        src={Paddles}
        alt="Paddles"
        className="absolute top-8 -right-40 scale-110 scale-x-[-1] -rotate-35"
      />
    </div>
  );
};

export default AboutUs;
