import History from "@/components/about/History";
import Race from "@/components/about/RaceResults";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <History />
      <Race />
    </div>
  );
};

export default About;
