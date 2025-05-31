import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import Image from "next/image";
import Paddles from "@/public/doublePaddle.webp";
import Star4Point from "@/public/4pointStar.webp";

const AboutUs = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center overflow-hidden px-6 py-14 text-center">
      <Header text="About Us" />
      <div className="relative flex w-full flex-col items-center">
        <InfoBox
          text="Dragon Boat is a team sport with 18-20 paddlers, a drummer, and a steer. The drummer sits at the front, drumming to set the pace and make calls when necessary. The steer stands at the back of the boat (the stern) and guides the boat through the water, keeping it on course. 
    Riverside Surging Dragons is UCR’s competitive dragon boat team, where competition meets community! We push each other to be stronger on the water while creating a tight-knit community through team socials, bonding events, and shared experiences. Whether you’re here to compete, make friends, or try something new, our boat is always open to you!"
        />
        <Image
          src={Star4Point}
          alt="Four Point Star"
          className="absolute top-6 left-[8%] size-10 rotate-45 md:top-0 md:left-[7%] md:size-20"
        />
        <Image
          src={Star4Point}
          alt="Four Point Star"
          className="absolute top-12 left-[3%] size-8 md:top-[9%] md:size-15"
        />
        <Image
          src={Paddles}
          alt="Paddles"
          className="scale-x-[-1]-rotate-35 absolute -top-[5%] -right-[5%] hidden size-60 md:block xl:right-0"
        />
      </div>
    </div>
  );
};

export default AboutUs;
