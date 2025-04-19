const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 gap-10 bg-red-200 p-10 font-sans text-xl">
      <div className="w-1/2 bg-blue-200 p-5 text-center">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="w-full rounded-full bg-blue-300 p-5 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="w-1/2 bg-blue-500 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
