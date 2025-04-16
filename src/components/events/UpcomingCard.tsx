interface ComponentProps {
  month: string;
  date: string;
  name: string;
  desc: string;
}

const UpcomingCard = ({ month, date, name, desc }: ComponentProps) => {
  return (
    <div className="bg-rsd-dark-blue flex h-[371px] w-[770px] rounded-[70] p-10 text-white shadow-md">
      <div className="font-rsd-alt flex h-[297px] w-[264px] shrink-0 flex-col items-center justify-center rounded-[50px] bg-white p-10 text-center text-black">
        <div className="text-[40px] font-normal">{month}</div>
        <div className="text-[96px] font-normal">{date}</div>
      </div>
      <div className="font-rsd-alt flex flex-col justify-start gap-y-5 p-10 text-left text-white">
        <div className="text-[40px] font-bold">{name}</div>
        <div className="text-[20px] font-bold">{desc}</div>
      </div>
    </div>
  );
};

export default UpcomingCard;
