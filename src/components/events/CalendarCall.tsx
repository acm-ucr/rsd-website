"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar as UICalendar } from "@/components/ui/calendar";
import { Calendar as RBCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomEventPopover from "./week/CustomEvent";
import "./week/index.css";

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
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EVENTS, eventType: "general" },
];

const localizer = momentLocalizer(moment);

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isMonth, setIsMonth] = React.useState<boolean>(true);
  const [selectedEventTypes] = React.useState<string[]>(
    calendarSources.map((source) => source.eventType),
  );
  const isMobile = useWindowWidth() < 768;

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

  // Convert Google events to react-big-calendar events
  const calendarEvents = React.useMemo(() => {
    if (!data?.allEvents) return [];
    return data.allEvents
      .map((event) => {
        const startString = event.start?.dateTime || event.start?.date;
        const endString = event.end?.dateTime || event.end?.date;
        if (!startString || !endString) return null;
        return {
          title: event.summary ?? "Untitled Event",
          start: new Date(startString),
          end: new Date(endString),
          allDay: !event.start?.dateTime,
          resource: event,
        };
      })
      .filter(
        (
          e,
        ): e is {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: TypedGoogleEventProps;
        } => e !== null,
      );
  }, [data]);

  // Custom event renderer for react-big-calendar
  const CustomEvent = ({ event }: { event: CalendarEvent }) => {
    const resource = event.resource;
    return (
      <CustomEventPopover
        startDate={resource.start}
        endDate={resource.end}
        title={event.title}
        date={event.start}
        location={resource.location}
        description={resource.description}
        eventType={resource.eventType}
      />
    );
  };

  return (
    <div>
      {isLoading || !data ? (
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      ) : isMonth ? (
        <UICalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-rsd-dark-blue m-5 mx-auto w-11/12 rounded-4xl px-10 py-3 md:w-10/12"
          events={data.allEvents.filter((event) =>
            selectedEventTypes.includes(event.eventType),
          )}
        />
      ) : (
        <div className="rounded-calendar-top mx-auto h-[150vh] w-10/12 pb-8"></div>
      )}
    </div>
  );
};

export default CalendarCall;
