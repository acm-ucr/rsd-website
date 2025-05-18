interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-8 w-11/12 px-7 text-left">
      <div className="font-rsd-alt bg-rsd-dark-blue rounded-4xl px-20 py-20 text-xl font-bold text-white sm:text-2xl xl:text-3xl">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
