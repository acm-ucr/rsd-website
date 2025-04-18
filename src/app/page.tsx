//import Example from "@/components/Example";
import Carousel from "@/components/home/GalleryPreview";
import AwardCard from "@/components/home/AwardCard";
const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {/* <Example text1="Adjust" text2="these" text3="Props" /> */}
      <Carousel />

      <AwardCard AwardName={"Award\nName"} />
    </div>
  );
};

export default Home;
