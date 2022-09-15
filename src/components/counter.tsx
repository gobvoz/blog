import { useState } from 'react';
import classes from './counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(9);

  const increaseHandler = () => setCounter(counter + 1);
  const decreaseHandler = () => setCounter(counter - 1);

  return (
    <div className={classes.counter}>
      <button className={classes.button} type="button" onClick={decreaseHandler}>
        -
      </button>
      <span className={classes.values}>{counter}</span>
      <button className={classes.button} type="button" onClick={increaseHandler}>
        +
      </button>
    </div>
  );
};
