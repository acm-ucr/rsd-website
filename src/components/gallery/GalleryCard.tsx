import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface GalleryInfo {
  photoName: string;
  link: string;
  image: string | StaticImageData;
}

const GalleryCard = ({ photoName, link, image }: GalleryInfo) => {
  return (
    <Link href={link} target="_blank">
      <div className="font-rsd-alt relative h-60 w-96 flex-col items-center rounded-t-2xl bg-gray-200">
        <Image className="object-cover" src={image} alt="product" fill />
      </div>
      <div className="bg-white rounded-b-2xl p-2 text-center text-xl">
        {photoName}
      </div>
    </Link>
  );
};

export default GalleryCard;
