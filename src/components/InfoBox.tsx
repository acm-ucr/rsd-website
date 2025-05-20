interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-8 w-11/12 px-7 text-left">
      <div className="font-rsd-alt bg-rsd-dark-blue mid:text-2xl mid:px-20 mid:py-20 rounded-4xl px-10 py-10 text-lg font-bold text-white sm:px-12 sm:py-12 sm:text-xl xl:text-3xl">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
