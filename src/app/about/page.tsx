import InfoBox from "@/components/InfoBox";
import Race from "@/components/about/RaceResults";

const About = () => {
  return (
    <div>
      <div>
        <InfoBox text="Dragon boat racing dates back over 2,000 years to ancient China, where it originated as a ritual to honor the poet Qu Yuan and bring good fortune through competitive paddling. Over time, it evolved into an International water sport, blending tradition with high-intensity teamwork and endurance. At UCR, the Riverside Surging Dragons continues this legacy, providing students with a unique opportunity to build strength, camaraderie, and school spirit through competitive racing and community engagement." />
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <Race />
      </div>
    </div>
  );
};

export default About;
