import Carousel from "@/components/home/GalleryPreview";
import PracticeWrapper from "@/components/home/PracticeWrapper";
import Header from "@/components/Header";
import AwardsMapped from "@/components/home/AwardsMapped";
import Landing from "@/components/home/Landing";
import Video from "@/components/home/Video";

const Home = () => {
  return (
    <div className="">
      <Landing />
      <Video />
      <AwardsMapped />
      <PracticeWrapper />
      <Header text="Gallery Preview" />
      <Carousel />
    </div>
  );
};

export default Home;
