interface InfoBoxProps {
  text: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="my-8 px-3 text-left md:px-2 xl:w-11/12 2xl:my-20 2xl:px-10">
      <div className="font-rsd-alt bg-rsd-dark-blue h-full rounded-4xl p-10 text-xl font-bold text-white md:p-10 md:text-2xl lg:text-3xl 2xl:text-5xl">
        {text}
      </div>
    </div>
  );
};

export default InfoBox;
