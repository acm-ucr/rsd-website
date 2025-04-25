interface InfoBoxProps {
  text_button: React.ReactNode;
}
const InfoBox: React.FC<InfoBoxProps> = ({ text_button }) => {
  return (
    <div className="my-8 w-10/12 px-7 text-left">
      <div className="font-rsd-alt bg-rsd-dark-blue rounded-4xl px-20 py-20 text-2xl font-bold text-white">
        {text_button}
      </div>
    </div>
  );
};

export default InfoBox;
