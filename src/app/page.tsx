import Carousel from "@/components/home/GalleryPreview";
import PracticeWrapper from "@/components/home/PracticeWrapper";
import Header from "@/components/Header";
import AwardsMapped from "@/components/home/AwardsMapped";
import Landing from "@/components/home/Landing";

const Home = () => {
  return (
    <div className="flex w-full max-w-screen flex-col items-center justify-center">
      <Landing />
      <div className="mt-10 mb-10 flex w-5/6 max-w-screen-lg items-center justify-center px-5">
        <iframe
          src="https://www.youtube.com/embed/Xs0hR3QIQNE?si=qkDfhaD82i5ogqoe"
          className="mt-5 mb-5 aspect-video w-full rounded-xl"
        />
      </div>
      <AwardsMapped />
      <PracticeWrapper />
      <Header text="Gallery Preview" />
      <Carousel />
    </div>
  );
};

export default Home;
