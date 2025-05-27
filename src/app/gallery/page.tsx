import OtherEvents from "@/components/gallery/OtherEvents";
import QuarterlyRaces from "@/components/gallery/QuarterlyRaces";
import Header from "@/components/Header";
const Gallery = () => {
  return (
    <div className="flex flex-col">
      <Header text="Gallery" />
      <QuarterlyRaces />
      <OtherEvents />
    </div>
  );
};

export default Gallery;
