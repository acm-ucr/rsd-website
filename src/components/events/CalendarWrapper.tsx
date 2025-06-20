import Image from "next/image";
import Calendar from "@/components/events/CalendarCall";
import Star from "@/public/4pointStar.svg";

const CalendarWrapper = () => {
  return (
    <div className="relative w-full">
      <Image
        src={Star}
        alt="Star"
        className="absolute top-35 left-22 hidden scale-70 rotate-10 sm:block"
      />
      <Image
        src={Star}
        alt="Star"
        className="absolute top-37 left-40 hidden scale-30 rotate-10 sm:block"
      />
      <div className="mt-5 w-full md:mt-40">
        <Calendar />
      </div>
      <Image
        src={Star}
        alt="Star"
        className="absolute right-15 -bottom-10 hidden scale-30 rotate-20 sm:block"
      />
    </div>
  );
};

export default CalendarWrapper;
