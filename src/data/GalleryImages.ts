import { StaticImageData } from "next/image";
import gallery1 from "@/public/home/galleryPreview/galleryPreview.webp";
import gallery2 from "@/public/home/galleryPreview/galleryPreview2.webp";
import gallery3 from "@/public/home/galleryPreview/galleryPreview3.webp";
import gallery4 from "@/public/home/galleryPreview/galleryPreview4.webp";
export const slides: slide[] = [
  { image: gallery1 },
  { image: gallery2 },
  { image: gallery3 },
  { image: gallery4 },
];

export type slide = {
  image: StaticImageData;
};
