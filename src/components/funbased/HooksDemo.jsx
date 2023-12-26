import React, { useState } from "react";

const HooksDemo = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={() => {setCounter(counter+1)}}>+</button>
      <button onClick={() => {setCounter(counter-1) }} disabled={counter == 0}>-</button>
      <button onClick={() => {setCounter(0)}} disabled={counter == 0}>Reset</button>
    </>
  )
};

export default HooksDemo;
