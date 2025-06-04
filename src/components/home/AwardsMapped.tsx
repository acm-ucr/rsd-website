import Award from "@/data/AwardsInfo";
import AwardCard from "@/components/home/AwardCard";
import Header from "@/components/Header";
const AwardsMapped = () => {
  return (
    <div className="flex flex-col items-center">
      <Header text="Awards and Recognition" />
      <div className="mb-20 grid grid-cols-1 justify-evenly gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Award.map((award, index) => (
          <AwardCard
            AwardImage={award.image}
            key={index}
            AwardName={award.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsMapped;
