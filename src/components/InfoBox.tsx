interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-10 w-11/12 px-2 text-left xl:my-4 xl:px-12">
      <div className="font-rsd-alt bg-rsd-dark-blue flex h-full justify-center rounded-4xl p-10 text-xl font-bold text-white lg:text-2xl 2xl:text-3xl">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
