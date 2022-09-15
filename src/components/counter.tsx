import { useState } from 'react';
import './counter.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(9);

  const increaseHandler = () => setCounter(counter + 1);
  const decreaseHandler = () => setCounter(counter - 1);

  return (
    <div className="counter">
      <button className="button" type="button" onClick={decreaseHandler}>
        -
      </button>
      <span className="value">{counter}</span>
      <button className="button" type="button" onClick={increaseHandler}>
        +
      </button>
    </div>
  );
};
