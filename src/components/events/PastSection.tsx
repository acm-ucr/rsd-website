
import PastCard from "@/components/events/PastCard";
import Cloud from "@/public/cloud.webp";
import logo from "@/public/RSDLogo.webp";
import Header from "@/components/Header";
import Image from "next/image";

const PastSection = () => {
    return(
        <div className="relative flex w-full max-w-screen flex-col items-center pb-20 md:mt-15">
        <Header text="Past Events" />
        <div className="flex w-10/12 flex-col justify-center gap-10 md:w-11/12 md:flex-row md:[&>*:nth-child(even)]:mt-40">
          <PastCard eventName="eventName" image={logo} />
          <PastCard eventName="eventName" image={logo} />
          <PastCard eventName="eventName" image={logo} />
        </div>
        <Image
          src={Cloud}
          alt="cloud"
          className="absolute bottom-0 -left-[7%] hidden w-1/4 md:block"
        />
        <Image
          src={Cloud}
          alt="cloud"
          className="absolute -right-[7%] bottom-0 hidden w-1/4 md:block"
        />
      </div>
    );
}

export default PastSection;