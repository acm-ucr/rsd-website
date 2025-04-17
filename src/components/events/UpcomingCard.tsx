interface ComponentProps {
  month: string;
  date: string;
  name: string;
  desc: string;
}

const UpcomingCard = ({ month, date, name, desc }: ComponentProps) => {
  return (
    <div className="bg-rsd-dark-blue flex h-1/2 w-3/5 rounded-4xl p-10 text-white shadow-md">
      <div className="font-rsd-alt flex h-full w-1/3 shrink-0 flex-col items-center justify-center rounded-3xl bg-white p-10 text-center text-black gap-y-8">
        <div className="text-5xl font-normal">{month}</div>
        <div className="text-8xl font-normal">{date}</div>
      </div>
      <div className="font-rsd-alt flex flex-col items-start justify-center gap-y-10 p-10 text-left text-white">
        <div className="text-5xl font-bold">{name}</div>
        <div className="text-xl font-bold">{desc}</div>
      </div>
    </div>
  );
};

export default UpcomingCard;
