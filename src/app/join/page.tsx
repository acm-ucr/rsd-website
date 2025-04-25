import Image from "next/image";
import JoinDragon from "@/public/join/joinDragon.webp";
import Cloud from "@/public/cloud.webp";
import InfoBox from "@/components/InfoBox";

const Join = () => {
  return (
    <div className="bg-rsd-light-blue">
      <div className="relative my-20 flex justify-center">
        <div className="absolute -top-[5vh] -left-[16vw]">
          <Image src={Cloud} alt="Cloud" />
        </div>
        <InfoBox
          text_button={
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
              <button className="bg-rsd-mid-blue mt-4 rounded-4xl p-5">
                Join Our Discord!
              </button>
            </div>
          }
        />
        <div className="absolute -right-[10vw] bottom-0">
          <Image src={Cloud} alt="Cloud" />
        </div>
      </div>
      <div className="relative mt-[10vh] h-[55vh]">
        <Image src={JoinDragon} alt="Dragon Riding a Wave" fill />
      </div>
    </div>
  );
};

export default Join;
