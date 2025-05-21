import QuarterlyRaces from "@/components/gallery/QuarterlyRaces";
import OtherEvents from "@/components/gallery/OtherEvents";
import Header from "@/components/Header";
const Gallery = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header text="Gallery" />
      <QuarterlyRaces />
      <OtherEvents />
    </div>
  );
};

export default Gallery;
