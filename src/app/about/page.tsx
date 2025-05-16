import AboutUs from "@/components/about/AboutUs";
import History from "@/components/about/History";
import Race from "@/components/about/RaceResults";
import ImportantEvents from "@/components/about/ImportantEvents";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <AboutUs />
      <ImportantEvents />
      <History />
      <Race />
    </div>
  );
};

export default About;
