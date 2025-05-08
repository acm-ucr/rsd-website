import Image from "next/image";
import UpcomingCard from "@/components/events/UpcomingCard";
import Header from "@/components/Header";
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
      <Header text="Upcoming Events" />
      <div className="mb-16 flex flex-col items-center gap-8 px-10 md:px-0">
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
