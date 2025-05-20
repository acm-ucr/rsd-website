interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="w-full py-4 text-left md:w-2/3 xl:w-11/12">
      <div className="font-rsd-alt bg-rsd-dark-blue h-full rounded-4xl px-8 py-10 text-2xl font-bold text-white xl:px-20 xl:py-20">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
