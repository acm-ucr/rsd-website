import GalleryCard from "@/components/gallery/GalleryCard";
import Paddle from "@/public/singlePaddle.webp";
const Gallery = () => {
  return (
    <div className="row flex h-screen w-screen items-center justify-center gap-5">
      <GalleryCard
        photoName="Fall '24"
        link="https://en.wikipedia.org/wiki/Paddling"
        image={Paddle}
      />
      <GalleryCard
        photoName="Winter '25"
        link="https://en.wikipedia.org/wiki/Paddling"
        image={Paddle}
      />
    </div>
  );
};

export default Gallery;
