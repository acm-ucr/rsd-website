import Link from "next/link";
import Image from "next/image";



interface GalleryInfo {
  photoName: string;
  link: string;
  image: string;
}

const GalleryCard = ({photoName, link, image}: GalleryInfo) => {
  return (
    <Link href={link} target="_blank">
      <div className="font-rsd-alt flex-col items-center h-48 w-96 bg-gray-200 min-w-0 rounded-t-2xl">
        <Image className="h-full w-full" src={image} alt="product" width={400} height={400}/>
        <div className="rounded-b-2xl bg-white p-2 text-center text-xl">{photoName}</div>
      </div>
    </Link>
  );
};

export default GalleryCard;
