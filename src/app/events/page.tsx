import PastCard from "@/components/events/PastCard";
import cloud from "@/public/cloud.webp";

const Events = () => {
  return (
    <div className="bg-amber-500 p-10">
      <PastCard eventName="hi" image={cloud} />
    </div>
  );
};

export default Events;
