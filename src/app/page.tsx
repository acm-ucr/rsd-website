//import Example from "@/components/Example";
import Carousel from "@/components/home/GalleryPreview";
import Landing from "@/components/home/Landing";

const Home = () => {
  return (
    <div className="bg-rsd-light-blue flex h-screen w-screen flex-col items-center justify-center">
      {/* <Example text1="Adjust" text2="these" text3="Props" /> */}
      <Landing />
      <Carousel />
    </div>
  );
};

export default Home;
