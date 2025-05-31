import OtherEvents from "@/components/gallery/OtherEvents";
import QuarterlyRaces from "@/components/gallery/QuarterlyRaces";
import Header from "@/components/Header";
const Gallery = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header text="Gallery" />
      <QuarterlyRaces />
      <OtherEvents />
    </div>
  );
};

export default Gallery;
