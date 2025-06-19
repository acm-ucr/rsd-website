"use client";
import { motion } from "motion/react";
import Image from "next/image";
import UpcomingCard from "@/components/events/UpcomingCard";
import Header from "@/components/Header";
import EventsWave from "@/public/events/eventsWave.webp";
import PastCard from "@/components/events/PastCard";
import Cloud from "@/public/cloud.webp";
import logo from "@/public/RSDLogo.webp";
import Calendar from "@/components/events/CalendarCall";
import Star from "@/public/4pointStar.webp";

const UpcomingEventsInfo = [
  {
    Month: "January",
    Date: "05",
    Name: "Cool Event",
    Desc: "awesome event so cool and awesome",
  },
  {
    Month: "October",
    Date: "11",
    Name: "Swag Event",
    Desc: "practice at the beach or whatever wow so swag",
  },
];

const Events = () => {
  return (
    <div className="flex w-full max-w-screen flex-col items-center overflow-hidden">
      <Header text="Upcoming Events" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex w-full flex-col items-center"
      >
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
        <Image
          src={EventsWave}
          alt="Waves with Oars"
          className="absolute bottom-0 -z-10 hidden w-screen object-fill md:-bottom-[13%] md:block"
        />
      </motion.div>
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
    </div>
  );
};

export default Events;
