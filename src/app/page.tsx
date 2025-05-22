import Carousel from "@/components/home/GalleryPreview";
import PracticeWrapper from "@/components/home/PracticeWrapper";
import AwardsMapped from "@/components/home/AwardsMapped";
import Landing from "@/components/home/Landing";

const Home = () => {
  return (
    <div className="flex h-1/2 w-screen flex-col items-center justify-center">
      <Landing />
      <div className="mt-10 mb-10 flex w-3/5 items-center justify-center">
        <iframe
          src="https://www.youtube.com/embed/Xs0hR3QIQNE?si=qkDfhaD82i5ogqoe"
          className="mt-10 mb-10 aspect-video w-full rounded-xl md:w-3/4 lg:w-2/3"
        />
      </div>
      <AwardsMapped />
      <div className="flex pb-100">
        <PracticeWrapper />
      </div>

      <Carousel />
    </div>
  );
};

export default Home;
