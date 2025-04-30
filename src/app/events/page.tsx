import Image from "next/image";
import UpcomingCard from "@/components/events/UpcomingCard";
import EventsWave from "@/public/events/eventsWave.webp";

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
    <div className="relative">
      <div className="my-10 flex flex-wrap justify-center">
        <header className="text-rsd-title-blue font-rsd-main text-5xl">
          Upcoming Events
        </header>
      </div>
      <div className="my-16 flex flex-wrap justify-center gap-y-8">
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
      <div className="absolute bottom-0">
        <Image
          src={EventsWave}
          alt="Waves with Oars"
          className="w-screen object-fill"
        />
      </div>
    </div>
  );
};

export default Events;
