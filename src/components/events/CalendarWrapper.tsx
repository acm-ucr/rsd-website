
import Image from "next/image";
import Calendar from "@/components/events/CalendarCall";
import Star from "@/public/4pointStar.webp";

const CalendarWrapper = () => {
    return(
        <div className="relative w-full">
        <Image
          src={Star}
          alt="Star"
          className="absolute top-45 left-27 hidden scale-175 rotate-45 sm:block"
        />
        <Image
          src={Star}
          alt="Star"
          className="absolute top-45 left-50 hidden scale-60 rotate-60 sm:block"
        />
        <div className="mt-5 w-full md:mt-40">
          <Calendar />
        </div>
        <Image
          src={Star}
          alt="Star"
          className="absolute right-25 -bottom-3 hidden scale-60 -rotate-20 sm:block"
        />
      </div>
    );
}

export default CalendarWrapper;