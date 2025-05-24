const PracticeShuttle = () => {
  return (
    <div className="flex h-1/3 w-full flex-col bg-transparent bg-radial 2xl:p-20">
      <div className="font-rsd-alt flex flex-wrap justify-center p-6 text-3xl font-normal text-white md:justify-between md:text-4xl xl:text-5xl 2xl:text-6xl">
        <div>{"Saturday & Sunday"}</div>
        <div>{"10:00 am - 12:00 pm"}</div>
      </div>

      <div className="font-rsd-alt text-rsd-yellow flex justify-center px-14 py-8 text-center text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
        {"*Shuttling starts at 8:30 am!"}
      </div>
    </div>
  );
};

export default PracticeShuttle;