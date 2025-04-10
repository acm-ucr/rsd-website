const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-rsd-light-blue font-rsd-alt flex w-2/3 flex-col items-center gap-1 gap-y-8 rounded-lg p-10 text-center text-xl">
      <div className="bg-rsd-gold w-1/2 p-5">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-1 gap-x-5 gap-y-8 text-center text-xl">
        <div className="bg-rsd-mid-blue w-full rounded-full p-5">
          {props.text2}
        </div>
        <div className="bg-rsd-mid-blue w-full rounded-full p-5">
          {props.text2}
        </div>
      </div>
      <div className="bg-rsd-gold w-1/2 p-5">{props.text3}</div>
    </div>
  );
};

export default Example;
