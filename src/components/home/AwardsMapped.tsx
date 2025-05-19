import Award from "@/data/AwardsInfo";
import AwardCard from "@/components/home/AwardCard";
import Header from "../Header";
const AwardsMapped = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Header text="Awards and Recognition" />
      </div>
      <div className="mb-40 grid grid-cols-8 justify-center gap-5">
        {Award.map((award, index) => (
          <AwardCard key={index} AwardName={award.name} />
        ))}
      </div>
    </div>
  );
};

export default AwardsMapped;
