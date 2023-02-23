import React, { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return {
    count: count,
    handleIncrement: handleIncrement,
  };
}

export default useCounter;
