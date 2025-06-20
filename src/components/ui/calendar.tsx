"use client";

import * as React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { TypedGoogleEventProps } from "@/components/events/CalendarCall";
import CalendarDay from "@/components/events/month/CalendarDay";
import CalendarTop from "@/components/events/month/CalendarTop";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: TypedGoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={`${className} pb-8`}
        classNames={{
          months: "",
          month: "",
          caption: "",
          caption_label: "",
          nav: "space-x-8",
          nav_button: "",
          nav_button_previous: "hidden",
          nav_button_next: "hidden",
          table: "w-full  space-y-1",
          head_row:
            "bg-[#F9E1C3] flex mt-[2vw] w-full rounded-t-xl text-center items-center justify-center grid grid-cols-7",
          head_cell: "text-black rounded-md text-md md:text-4xl py-1 md:py-2",
          row: "grid grid-cols-7",
          cell: "outline outline-black p-0 bg-white h-[20vh] md:h-[20vh]",
          day: "",
          day_range_end: "",
          day_selected: "",
          day_outside: "",
          day_disabled: "",
          day_range_middle: "",
          day_hidden: "",
          ...classNames,
        }}
        components={{
          IconLeft: () => (
            <div onClick={prevMonth}>
              <SlArrowLeft />
            </div>
          ),
          IconRight: () => (
            <div onClick={nextMonth}>
              <SlArrowRight />
            </div>
          ),
          Day: ({ displayMonth, date }) => (
            <CalendarDay
              date={date}
              displayMonth={displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
