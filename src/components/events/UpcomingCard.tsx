interface ComponentProps {
  month: string;
  date: string;
  name: string;
  desc: string;
}

const UpcomingCard = ({ month, date, name, desc }: ComponentProps) => {
  return (
    <div className="bg-rsd-dark-blue font-rsd-alt flex h-1/2 w-3/5 rounded-4xl p-10 text-white shadow-md">
      <div className="flex h-full w-1/3 shrink-0 flex-col items-center justify-center gap-y-8 rounded-3xl bg-white p-10 text-center text-black">
        <div className="text-5xl">{month}</div>
        <div className="text-8xl">{date}</div>
      </div>
      <div className="mt-8 flex h-full w-2/3 shrink-0 flex-col items-start gap-y-8 p-10 text-left text-white">
        <div className="text-5xl font-bold">{name}</div>
        <div className="text-xl font-bold">{desc}</div>
      </div>
    </div>
  );
};

export default UpcomingCard;
