import Image from "next/image";
import JoinDragon from "@/public/join/joinDragon.webp";
import Cloud from "@/public/cloud.webp";
import InfoBox from "@/components/InfoBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Join = () => {
  return (
    <div className="bg-rsd-light-blue">
      <div className="relative my-20 flex justify-center">
        <div className="absolute -top-[5vh] -left-[16vw]">
          <Image src={Cloud} alt="Cloud" />
        </div>
        <InfoBox
          text={
            <div className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button className="bg-rsd-mid-blue hover:bg-rsd-title-blue mt-4 rounded-4xl p-7 text-2xl">
                <Link href="/">Join Our Discord!</Link>
              </Button>
            </div>
          }
        />
        <div className="absolute -right-[10vw] bottom-0">
          <Image src={Cloud} alt="Cloud" />
        </div>
      </div>
      <div className="relative mt-[10vh]">
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
