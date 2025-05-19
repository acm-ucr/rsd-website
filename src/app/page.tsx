import Carousel from "@/components/home/GalleryPreview";
import PracticeWrapper from "@/components/home/PracticeWrapper";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="flex h-1/2 w-screen flex-col items-center justify-center">
      <div className="flex">
        <PracticeWrapper />
      </div>
      <Header text="Gallery Preview" />
      <Carousel />
    </div>
  );
};

export default Home;
