import Image from "next/image";
import dragon from "@/public/home/dragon2.webp";
import fourStar from "@/public/4pointStar.webp";
import fiveStar from "@/public/5pointStar.webp";

const Landing = () => {
  return (
    <div className="bg-rsd-mid-blue relative m-10 flex h-1/2 w-full items-center justify-center rounded-4xl p-5 text-center sm:h-full md:w-13/15">
      <Image
        src={dragon}
        alt="dragon outline"
        className="bg-rsd-dark-blue h-[90vh] rounded-3xl object-cover sm:h-full lg:rounded-4xl"
      />
      <Image
        src={fourStar}
        alt="star"
        className="absolute top-[15vh] left-[10vh] size-10 sm:top-[10vh] sm:left-[10vh] md:left-[15vh] lg:top-[15vh] lg:left-[14vh] lg:size-13 xl:left-[16vh] xl:size-16"
      />
      <Image
        src={fourStar}
        alt="star"
        className="absolute right-[10vh] bottom-[22vh] size-10 sm:right-[13vh] sm:bottom-[12vh] md:right-[11vh] md:bottom-[13vh] lg:right-[15vh] lg:bottom-[17vh] lg:size-13 xl:bottom-[20vh] xl:size-16"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute bottom-[14vh] left-[11vh] hidden size-7 sm:block md:left-[13vh] lg:bottom-[20vh] lg:left-[15vh] lg:size-9 xl:left-[18vh] xl:size-12"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-[30vh] left-[20vh] hidden size-7 sm:block md:top-[27vh] lg:top-[39vh] lg:left-[30vh] lg:size-9 xl:top-[45vh] xl:size-12"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-[25vh] right-[5vh] hidden size-7 sm:block md:top-[27vh] lg:top-[35vh] lg:size-9 xl:top-[42vh] xl:size-12"
      />

      <div className="absolute top-[20vh] flex w-2/3 flex-col items-center justify-center sm:top-[26vh] md:top-[10vh] md:h-9/12 lg:top-[18vh] lg:p-10 xl:w-3/4">
        <div className="font-rsd-main text-rsd-yellow text-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
          Riverside <br />
          Surging Dragons
        </div>
        <div className="font-rsd-alt item-center pt-2 text-center text-base text-white sm:text-sm md:text-base lg:text-xl xl:pt-4 xl:text-2xl 2xl:text-3xl">
          Riverside Surging Dragons is a dragon boat club at UCR, rooted in the
          traditions of Chinese sport: dragon boat racing. We are a devoted team
          of college students, eager to thrive in the water and build
          everlasting friendships whilst fostering an inclusive and welcoming
          environment.
        </div>
      </div>
    </div>
  );
};

export default Landing;
