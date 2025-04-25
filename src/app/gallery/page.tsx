import GalleryCard from "@/components/gallery/GalleryCard";

const Gallery = () => {
  return (
    <div className="row flex h-screen w-screen items-center gap-5 justify-center">
        <GalleryCard photoName="Fall '24" link="https://en.wikipedia.org/wiki/Paddling" image="singlePaddle.webp"/>
        <GalleryCard photoName="Winter '25" link="https://en.wikipedia.org/wiki/Paddling" image="singlePaddle.webp"/>
    </div>
  );
};

export default Gallery;
