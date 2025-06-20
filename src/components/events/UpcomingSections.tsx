"use client";
import { motion } from "motion/react";
import UpcomingCard from "@/components/events/UpcomingCard";
import Header from "@/components/Header";
import EventsWave from "@/public/events/eventsWave.webp";
import Image from "next/image";

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

const UpcomingSection = () => {
  return (
    <div className="flex w-full flex-col items-center">
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
    </div>
  );
};

export default UpcomingSection;
