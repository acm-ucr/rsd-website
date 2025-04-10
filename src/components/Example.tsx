const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-10 rounded-lg bg-red-200 p-10">
      <div className="bg-rsd-light-blue font-rsd-main w-1/2 p-5 text-center text-3xl font-normal">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-x-5 gap-y-0">
        <div className="bg-rsd-mid-blue font-rsd-alt w-1/2 rounded-full p-5 text-center text-3xl font-normal">
          {props.text2}
        </div>
        <div className="bg-rsd-mid-blue font-rsd-alt w-1/2 rounded-full p-5 text-center text-3xl font-normal">
          {props.text2}
        </div>
      </div>
      <div className="bg-rsd-title-blue font-rsd-main w-1/2 p-5 text-center text-3xl font-normal text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
