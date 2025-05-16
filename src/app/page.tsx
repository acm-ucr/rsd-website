import Carousel from "@/components/home/GalleryPreview";
import PracticeWrapper from "@/components/home/PracticeWrapper";
import Landing from "@/components/home/Landing";

const Home = () => {
  return (
    <div className="flex h-1/2 w-screen flex-col items-center justify-center">
      <Landing />
      <div className="flex pb-100">
        <PracticeWrapper />
      </div>

      <Carousel />
    </div>
  );
};

export default Home;
