import Award from "@/data/AwardsInfo";
import AwardCard from "@/components/home/AwardCard";
import Header from "../Header";
const AwardsMapped = () => {
  return (
    <div className="flex flex-col items-center">
      <Header text="Awards and Recognition" />
      <div className="mb-40 grid grid-cols-4 justify-center gap-5">
        {Award.map((award, index) => (
          <AwardCard key={index} AwardName={award.name} />
        ))}
      </div>
    </div>
  );
};

export default AwardsMapped;
