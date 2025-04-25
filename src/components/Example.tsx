import example from "@/data/Example";
import Image from "next/image";
import star from "@/public/5pointStar.webp";

const Example = () => {
  return (
    <div className="relative w-1/2 bg-blue-200/50">
      <Image src={star} alt="star" className="absolute left-1/2 -z-10" />
      {example.map(({ id, name }, index) => (
        <div className="flex flex-col text-8xl" key={index}>
          {id} {name}
        </div>
      ))}
    </div>
  );
};

export default Example;
