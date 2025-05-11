import Image from "next/image";
import UpcomingCard from "@/components/events/UpcomingCard";
import Header from "@/components/Header";
import EventsWave from "@/public/events/eventsWave.webp";
import PastCard from "@/components/events/PastCard";
import Cloud from "@/public/cloud.webp";
import logo from "@/public/RSDLogo.webp";

const UpcomingEventsInfo = [
  //Temporary Array of data, just for visualization
  {
    Month: "Month",
    Date: "Day",
    Name: "Name",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Month: "Month",
    Date: "Day",
    Name: "Name",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Events = () => {
  return (
    <div>
      <div className="relative">
        <Header text="Upcoming Events" />
        <div className="mb-16 flex flex-wrap justify-center gap-y-8">
          {UpcomingEventsInfo.map(({ Month, Date, Name, Desc }, index) => (
            <UpcomingCard
              key={index}
              month={Month}
              date={Date}
              name={Name}
              desc={Desc}
            />
          ))}
        </div>
        <div className="absolute -bottom-40">
          <Image
            src={EventsWave}
            alt="Waves with Oars"
            className="w-screen object-fill"
          />
        </div>
      </div>

      <div className="relative flex flex-col pb-20">
        <div className="mt-20">
          <Header text="Past Events" />
        </div>
        <div className="flex justify-center gap-10 [&>*:nth-child(even)]:mt-40">
          <PastCard eventName="eventName" image={logo} />
          <PastCard eventName="eventName" image={logo} />
          <PastCard eventName="eventName" image={logo} />
        </div>
        <Image
          src={Cloud}
          alt="cloud"
          className="absolute bottom-0 -left-30 w-1/4"
        />
        <Image
          src={Cloud}
          alt="cloud"
          className="absolute -right-30 bottom-0 w-1/4"
        />
      </div>
    </div>
  );
};

export default Events;
