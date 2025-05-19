interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-8 w-11/12 px-7 text-left">
      <div className="font-rsd-alt bg-rsd-dark-blue h-full rounded-4xl px-8 py-4 text-2xl font-bold text-white xl:px-20 xl:py-20">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
