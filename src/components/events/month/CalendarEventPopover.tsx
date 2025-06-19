import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
interface CalendarEventPopoverProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  endDate?: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  date: Date;
  location?: string;
  description?: string;
  eventType: string;
}

const CalendarEventPopover = ({
  startDate,
  endDate,
  title,
  date,
  location,
  description,
  eventType,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  if (endDate?.dateTime) {
    eventEndDate = new Date(endDate.dateTime);
    hasEndTime = true;
  } else if (endDate?.date) {
    eventEndDate = new Date(endDate.date);
  }

  let timeRangeDisplay = "";
  if (hasStartTime) {
    timeRangeDisplay = eventStartDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    if (hasEndTime) {
      timeRangeDisplay +=
        " - " +
        eventEndDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        });
    }
  }

  return (
    <Dialog>
      <DialogTrigger
        className={`bg-rsd-gold flex w-full cursor-pointer justify-between py-1 ${eventType === "general"} text-left hover:opacity-75`}
      >
        <span className="overflow-hidden px-1 pl-1 text-xs text-ellipsis whitespace-nowrap">
          {title}
        </span>
        <span className="pr-1 text-right text-xs">
          {hasStartTime &&
            eventStartDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: "America/Los_Angeles",
            })}
        </span>
      </DialogTrigger>
      <DialogOverlay className="bg-gray-400/60">
        <DialogContent className="z-50 w-[80vw] border-2 border-black bg-white p-0 shadow-md md:w-[40vw] 2xl:w-[30vw]">
          <DialogTitle className="hidden"></DialogTitle>
          <div className="bg-rsd-yellow grid grid-cols-4 rounded-t-md border-b-2 border-black px-4 py-2 text-xl font-semibold">
            <p className="col-span-3">{title}</p>
            <p className="flex justify-end">
              {date.toLocaleString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="rounded-b-xl bg-white px-4 py-3 text-lg">
            <div className="flex">
              {hasStartTime && <p>{timeRangeDisplay}</p>}
            </div>
            <p>{location}</p>
            {description && <p className="pt-8 pb-4">{description}</p>}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CalendarEventPopover;
