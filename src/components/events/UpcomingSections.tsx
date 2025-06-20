"use client";
import { motion } from "motion/react";
import {
  TypedGoogleEventProps,
  GoogleEventProps,
  calendarSources,
} from "@/components/events/CalendarCall";
import UpcomingCard from "@/components/events/UpcomingCard";
import Header from "@/components/Header";
import EventsWave from "@/public/events/eventsWave.webp";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import InfoBox from "@/components/InfoBox";

const UpcomingSection = () => {
  const { data } = useQuery<{
    allEvents: TypedGoogleEventProps[];
    futureEvents: TypedGoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const results = await Promise.all(
        calendarSources.map(async ({ id, eventType }) => {
          try {
            const res = await fetch(
              `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
            );

            if (!res.ok) {
              console.warn(`Failed to fetch ${eventType} calendar`);
              return [];
            }

            const data = await res.json();

            return (data.items || []).map((item: GoogleEventProps) => ({
              ...item,
              eventType,
            }));
          } catch (err) {
            console.error(`Error fetching ${eventType} events`, err);
            return [];
          }
        }),
      );

      const allEvents: TypedGoogleEventProps[] = results.flat();

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 3);

      return { allEvents, futureEvents };
    },
  });

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
        <div className="mb-16 flex w-full flex-wrap justify-center gap-y-8">
          {data?.futureEvents ? (
            data.futureEvents
              ?.filter((event: GoogleEventProps) => {
                if (!event || !event.start) return false;
                const startString = event.start.dateTime || event.start.date;
                if (!startString) return false;
                const eventDate = new Date(startString);
                const currentDate = new Date();
                return eventDate >= currentDate;
              })
              .slice(0, 3)
              .map((event: GoogleEventProps, index: number) => {
                const startString = event.start.dateTime || event.start.date;
                const eventDate = startString ? new Date(startString) : null;
                return (
                  <UpcomingCard
                    key={index}
                    name={event.summary || "Untitled Event"}
                    month={
                      eventDate
                        ? eventDate.toLocaleDateString("en-US", {
                            month: "long",
                          })
                        : ""
                    }
                    date={
                      eventDate
                        ? eventDate.toLocaleDateString("en-US", {
                            day: "numeric",
                          })
                        : ""
                    }
                    desc={event.description || ""}
                  />
                );
              })
          ) : (
            <InfoBox
              text={
                <p className="w-[70vw] text-center text-7xl text-white">
                  No upcoming events.
                </p>
              }
            />
          )}
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
