//import Image, { StaticImageData } from "next/image";
interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-8 w-full px-7 text-left">
      <div className="font-rsd-alt rounded-4xl bg-rsd-dark-blue px-20 py-20 text-2xl font-bold text-white">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
