import Image from "next/image";
import JoinDragon from "@/public/join/joinDragon.webp";
import Cloud from "@/public/cloud.webp";
import InfoBox from "@/components/InfoBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Registration from "@/components/join/Registration";
import Header from "@/components/Header";

const Join = () => {
  return (
    <div className="bg-rsd-light-blue">
      <Header text="Registration" />
      <div className="relative my-10 flex justify-center">
        <div className="mid:scale-100 invisible absolute -top-[10vh] -left-[16vw] sm:visible sm:-top-[8vh] sm:-left-[35vw] sm:scale-80 lg:-left-[25vw] xl:-left-[16vw]">
          <Image src={Cloud} alt="Cloud" />
        </div>
        <InfoBox
          text={
            <div className="flex flex-col items-center justify-center text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button className="bg-rsd-mid-blue hover:bg-rsd-title-blue mt-5 rounded-4xl p-7 text-xl sm:text-2xl xl:p-8 xl:text-3xl">
                <Link href="/">Join Our Discord!</Link>
              </Button>
            </div>
          }
        />
        <div className="mid:scale-100 mid:-right-[29vw] invisible absolute -right-[10vw] -bottom-5 sm:visible sm:-right-[35vw] sm:scale-80 xl:-right-[10vw]">
          <Image src={Cloud} alt="Cloud" />
        </div>
      </div>
      <Registration />

      <div className="invisible relative sm:visible">
        <Image
          src={JoinDragon}
          alt="Dragon Riding a Wave"
          className="w-full object-fill"
        />
      </div>
    </div>
  );
};

export default Join;
