interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-8 w-full px-7 text-left md:w-2/3 xl:w-11/12 xl:px-0">
      <div className="font-rsd-alt bg-rsd-dark-blue h-full rounded-4xl px-12 py-12 text-xl font-bold text-white md:px-20 md:py-20 md:text-2xl xl:text-3xl">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
