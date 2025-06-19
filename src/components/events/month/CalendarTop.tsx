import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface CalendarTopProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarTop = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarTopProps) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="mx-auto flex w-10/12 flex-col items-end justify-between md:flex-row">
      <div className="flex w-full items-center justify-center pb-6 md:justify-end md:space-x-4 md:pb-0">
        <button
          onClick={onPrevMonth}
          className="order-1 text-2xl transition hover:-translate-x-1 md:order-2 md:text-3xl"
        >
          <SlArrowLeft />
        </button>
        <span className="order-2 w-fit px-4 text-3xl text-gray-900 md:order-1 md:px-0 md:text-4xl">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button
          onClick={onNextMonth}
          className="order-3 text-2xl transition hover:translate-x-1 md:text-3xl"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CalendarTop;
