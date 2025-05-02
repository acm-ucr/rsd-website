"use client";

const UseStateBad = () => {
  let count: number = 0;
  const increment = () => {
    count += 1;
    console.log(count);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-rsd-yellow cursor-pointer p-5 text-8xl"
        onClick={increment}
      >
        Increment Count
      </button>
      <p className="text-6xl">count: {count}</p>
    </div>
  );
};

export default UseStateBad;
