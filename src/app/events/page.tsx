import PastSection from "@/components/events/PastSection";
import CalendarCall from "@/components/events/CalendarCall";

const Events = () => {
  return (
    <div className="flex w-full max-w-screen flex-col items-center overflow-hidden">
      <CalendarCall />
      <PastSection />
    </div>
  );
};

export default Events;
