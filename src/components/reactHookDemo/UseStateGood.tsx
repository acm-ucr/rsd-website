"use client";

import { useState } from "react";

const UseStateBad = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-rsd-yellow cursor-pointer p-5 text-4xl xl:text-8xl"
        onClick={increment}
      >
        Increment Count
      </button>
      <p className="text-6xl">count: {count}</p>
    </div>
  );
};

export default UseStateBad;
