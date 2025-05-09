import Award from "@/data/AwardsInfo";
import AwardCard from "@/components/home/AwardCard";
const AwardsMapped = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="font-rsd-alt text-rsd-title-blue text-center text-4xl font-bold">
          {"Awards & Recognition"}
        </p>
      </div>
      <div className="mb-40 flex flex-row flex-wrap justify-center">
        {Award.map((award, index) => (
          <AwardCard key={index} AwardName={award.name} />
        ))}
      </div>
    </div>
  );
};

export default AwardsMapped;
