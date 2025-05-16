import Image from "next/image";
import Header from "@/components/Header";
import Wave from "@/public/home/wave.webp";
import InfoBox from "@/components/InfoBox";
import PracticeShuttle from "@/components/home/PracticeShuttle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PracticeWrapper = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex justify-center font-normal">
        <Header text="Practice Info" />
      </div>
      <Image src={Wave} alt="Wave" className="absolute z-0 flex w-full" />
      <div className="z-10 flex flex-row items-start justify-evenly rounded-full">
        <div className="ml-5 flex w-3/4">
          <InfoBox
            text={
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            }
          />
        </div>

        <div className="mr-10 flex w-1/2">
          <InfoBox
            text={
              <ul className="flex list-[square] flex-col items-start gap-5 p-4 text-left text-3xl marker:text-3xl marker:text-white">
                <li>Sunscreen</li>
                <li>Water</li>
                <li>Change of clothes</li>
                <li>Open-toed shoes</li>
                <li>Towel</li>
              </ul>
            }
          />
        </div>
      </div>

      <div className="z-10 flex flex-col items-center gap-30">
        <PracticeShuttle />
        <Button className="bg-rsd-gold hover:bg-rsd-yellow font-rsd-alt rounded-full p-15 text-center text-5xl font-bold text-black">
          <Link href="/">more events!</Link>
        </Button>
      </div>
    </div>
  );
};

export default PracticeWrapper;
