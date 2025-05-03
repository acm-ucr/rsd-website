import InfoBox from "@/components/InfoBox";
import Race from "@/components/about/RaceResults";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="flex flex-col items-center">
        <Header text="History of Dragon Boat" />
        <InfoBox text="Dragon boat racing dates back over 2,000 years to ancient China, where it originated as a ritual to honor the poet Qu Yuan and bring good fortune through competitive paddling. Over time, it evolved into an International water sport, blending tradition with high-intensity teamwork and endurance. At UCR, the Riverside Surging Dragons continues this legacy, providing students with a unique opportunity to build strength, camaraderie, and school spirit through competitive racing and community engagement." />
        <Race />
    </div>
  );
};

export default About;
