const PracticeShuttle = () => {
  return (
    <div className="flex h-4/12 w-full flex-col bg-transparent bg-radial">
      <div className="font-rsd-alt text-rsd-dark-blue flex flex-wrap justify-center px-6 py-8 text-3xl font-normal md:justify-between md:text-4xl xl:text-6xl xl:text-white">
        <div>{"Saturday & Sunday"}</div>
        <div>{"10:00 am - 12:00 pm"}</div>
      </div>

      <div className="font-rsd-alt text-rsd-dark-bluexl:text-rsd-yellow flex justify-center px-14 py-10 text-center text-3xl font-bold md:text-4xl xl:text-5xl">
        {"*Shuttling starts at 8:30 am!"}
      </div>
    </div>
  );
};

export default PracticeShuttle;
