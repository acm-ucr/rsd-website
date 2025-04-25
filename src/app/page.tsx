<<<<<<< HEAD
//import Example from "@/components/Example";
import Carousel from "@/components/home/GalleryPreview";
import AwardCard from "@/components/home/AwardCard";
const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {/* <Example text1="Adjust" text2="these" text3="Props" /> */}
      <Carousel />

      <AwardCard AwardName={"Award\nName"} />
=======
import Carousel from "@/components/home/GalleryPreview";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Carousel />
>>>>>>> cdd9360d4c6b9edf36b0f1466862060ef4cdc7e2
    </div>
  );
};

export default Home;
