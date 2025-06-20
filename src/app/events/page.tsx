import UpcomingSection from "@/components/events/UpcomingSections";
import PastSection from "@/components/events/PastSection";
import CalendarWrapper from "@/components/events/CalendarWrapper";

const Events = () => {
  return (
    <div className="flex w-full max-w-screen flex-col items-center overflow-hidden">
      <UpcomingSection />
      <CalendarWrapper />
      <PastSection />
    </div>
  );
};

export default Events;
