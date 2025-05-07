const PracticeShuttle = () => {
  return (
    <div className="flex h-4/12 w-full flex-col bg-transparent bg-radial">
      <div className="font-rsd-alt flex justify-between px-15 py-10 text-6xl font-normal text-white">
        <div>{"Saturday & Sunday"}</div>
        <div>{"10:00 am - 12:00 pm"}</div>
      </div>

      <div className="font-rsd-alt text-rsd-yellow flex justify-center p-5 text-5xl font-bold">
        {"*Shuttling starts at 8:30 am!"}
      </div>
    </div>
  );
};

export default PracticeShuttle;
