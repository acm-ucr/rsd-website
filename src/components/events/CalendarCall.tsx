"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar as UICalendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { motion } from "motion/react";
import Star from "@/public/4pointStar.svg";
import InfoBox from "@/components/InfoBox";
import UpcomingCard from "@/components/events/UpcomingCard";
import Header from "@/components/Header";
import EventsWave from "@/public/events/eventsWave.webp";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export type TypedGoogleEventProps = GoogleEventProps & {
  eventType: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: TypedGoogleEventProps;
};

export const calendarSources = [
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL, eventType: "general" },
];

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedEventTypes] = React.useState<string[]>(
    calendarSources.map((source) => source.eventType),
  );

  const { data, isLoading } = useQuery<{
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
    <div className="flex w-full max-w-screen flex-col items-center overflow-hidden">
      <div className="flex w-full flex-col items-center">
        <Header text="Upcoming Events" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col items-center"
        >
          <div className="mb-16 flex w-full flex-wrap justify-center gap-y-8 md:w-10/12">
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative w-full"
      >
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
          {isLoading || !data ? (
            <div className="flex min-h-screen items-center justify-center">
              Loading...
            </div>
          ) : (
            <UICalendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-rsd-dark-blue m-5 mx-auto w-11/12 rounded-4xl px-10 py-3 md:w-10/12"
              events={data.allEvents.filter((event) =>
                selectedEventTypes.includes(event.eventType),
              )}
            />
          )}
        </div>
        <Image
          src={Star}
          alt="Star"
          className="absolute right-15 -bottom-10 hidden scale-30 rotate-20 sm:block"
        />
      </motion.div>
    </div>
  );
};

export default CalendarCall;
