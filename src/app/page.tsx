import Carousel from "@/components/home/GalleryPreview";
import PracticeWrapper from "@/components/home/PracticeWrapper";

const Home = () => {
  return (
    <div className="flex h-1/2 w-screen flex-col items-center justify-center">
      <div className="flex pb-100">
        <PracticeWrapper />
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
