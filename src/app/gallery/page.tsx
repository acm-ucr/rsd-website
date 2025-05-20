import QuarterlyRaces from "@/components/gallery/QuarterlyRaces";
import Header from "@/components/Header";
const Gallery = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header text="Gallery" />
      <QuarterlyRaces />
    </div>
  );
};

export default Gallery;
