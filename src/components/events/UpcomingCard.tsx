const UpcomingCard = ({month, date, name, desc}) => {
  return (
    <div className="flex w-[770px] h-[371px] rounded-[70] bg-rsd-dark-blue text-white p-10 shadow-md">
      <div className="flex flex-col w-[264px] h-[297px] rounded-[50px] bg-white text-black text-center font-rsd-alt p-10 justify-center items-center shrink-0">
        <div className="text-[40px] font-normal">{month}</div>
        <div className="text-[96px] font-normal">{date}</div>
      </div>
      <div className="flex flex-col text-white text-left font-rsd-alt justify-start p-10 gap-y-5">
        <div className="text-[40px] font-bold">{name}</div>
        <div className="text-[20px] font-bold">{desc}</div>
      </div>
    </div>
  );
};

export default UpcomingCard;
