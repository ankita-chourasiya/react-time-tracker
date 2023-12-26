import React, { useState, useEffect } from 'react';

const TimeTracker = () => {
  const [initialCount, setInitialCount] = useState(0);

  const increaseTime = () => {
    setInitialCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount % 31 === 0) {
        return 0;
      }

      return newCount;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(increaseTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Function Based Time Tracker {initialCount}</h1>
      </div>
    </>
  );
};

export default TimeTracker;
