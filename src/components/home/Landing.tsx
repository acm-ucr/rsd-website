import Image from "next/image";
import dragon from "@/public/home/dragon.webp";
import fourStar from "@/public/home/4pointStar.webp";
import fiveStar from "@/public/home/5pointStar.webp";

const Landing = () => {
  return (
    <div className="bg-rsd-mid-blue relative w-[50%] rounded-4xl p-3 text-center  ">
      <Image
        src={dragon}
        alt="dragon outline"
        //add tailwind classes for the image
        //mask clip for edges
        className=" rounded-4xl bg-rsd-dark-blue object-contain "

      />

      {/* //stars go here and i just eyeball that shi (place a img tag and place em top bot left right) */}
      <Image
        src={fourStar}
        alt="star"
        className="absolute top-20 left-18 w-12 h-12"
      />
      <Image
        src={fourStar}
        alt="star"
        className="absolute top-100 left-170 w-12 h-12"
      />
       <Image
        src={fiveStar}
        alt="star"
        className="absolute top-47 left-30 w-8 h-8"
      />
         <Image
        src={fiveStar}
        alt="star"
        className="absolute top-100 left-25 w-8 h-8"
      />
       <Image
        src={fiveStar}
        alt="star"
        className="absolute top-40 left-170 w-8 h-8"
      />

      <div className="item-center absolute inset-0 inset-x-1/4 inset-y-2/7 flex flex-col text-center">
        <p className="font-rsd-main text-rsd-yellow text-center text-4xl">
          Riverside <br /> Surging Dragons
        </p>
        <br />
        <p className="font-rsd-alt item-center text-center text-lg text-white">
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
