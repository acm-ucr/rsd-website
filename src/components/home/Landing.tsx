import Image from "next/image";
import dragon from "@/public/home/dragon.webp";
import fourStar from "@/public/4pointStar.webp";
import fiveStar from "@/public/5pointStar.webp";

const Landing = () => {
  return (
    <div className="bg-rsd-mid-blue relative m-10 w-7/12 rounded-4xl p-5 text-center">
      <Image
        src={dragon}
        alt="dragon outline"
        //add tailwind classes for the image
        //mask clip for edges
        className="bg-rsd-dark-blue rounded-[50px] object-cover"
      />

      {/* //stars go here and i just eyeball that shi (place a img tag and place em top bot left right) */}
      <Image
        src={fourStar}
        alt="star"
        className="absolute top-20 left-20 h-13 w-13"
      />
      <Image
        src={fourStar}
        alt="star"
        className="absolute top-120 left-200 h-13 w-13"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-50 left-30 h-8 w-8"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-120 left-30 h-8 w-8"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-60 left-205 h-8 w-8"
      />

      <div className="item-center absolute inset-0 inset-x-1/4 inset-y-2/7 flex flex-col text-center">
        <p className="font-rsd-main text-rsd-yellow text-center text-5xl font-bold">
          Riverside <br /> Surging Dragons
        </p>
        <br />
        <p className="font-rsd-alt item-center text-center text-xl text-white">
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
