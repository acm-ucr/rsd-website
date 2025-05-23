import Image from "next/image";
import dragon from "@/public/home/dragon2.webp";
import fourStar from "@/public/4pointStar.webp";
import fiveStar from "@/public/5pointStar.webp";

const Landing = () => {
  return (
    <div className="bg-rsd-mid-blue relative m-10 w-8/12 items-center rounded-[75px] p-5 text-center">
      <Image
        src={dragon}
        alt="dragon outline"
        className="bg-rsd-dark-blue rounded-[75px] object-cover"
      />

      <Image
        src={fourStar}
        alt="star"
        className="absolute top-30 left-30 size-20"
      />
      <Image
        src={fourStar}
        alt="star"
        className="absolute right-30 bottom-40 size-20"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-85 left-60 size-13"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute bottom-40 left-35 size-13"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-80 right-10 size-13"
      />

      <div className="item-center absolute inset-x-1/6 top-1/3 flex w-2/3 flex-col text-center">
        <p className="font-rsd-main text-rsd-yellow text-center text-6xl font-bold">
          Riverside <br /> Surging Dragons
        </p>
        <br />
        <p className="font-rsd-alt item-center text-center text-3xl text-white">
          Riverside Surging Dragons is a dragon boat club at UCR, rooted in the
          traditions of Chinese sport: dragon boat racing. We are a devoted team
          of college students, eager to thrive in the water and build
          everlasting friendships whilst fostering an inclusive and welcoming
          environment.
        </p>
      </div>
    </div>
  );
};

export default Landing;
