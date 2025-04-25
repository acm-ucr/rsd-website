import Link from "next/link";
import Image from "next/image";

interface GalleryInfo {
  photoName: string;
  link: string;
  image: string;
}

const GalleryCard = ({ photoName, link, image }: GalleryInfo) => {
  return (
    <Link href={link} target="_blank">
      <div className="font-rsd-alt h-48 w-96 min-w-0 flex-col items-center rounded-t-2xl bg-gray-200">
        <Image
          className="h-full w-full"
          src={image}
          alt="product"
          width={400}
          height={400}
        />
        <div className="rounded-b-2xl bg-white p-2 text-center text-xl">
          {photoName}
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
