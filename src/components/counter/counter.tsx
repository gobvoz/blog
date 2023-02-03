import { useState } from 'react';

import cls from './styles.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandle = () => setCount(count + 1);
  const decreaseHandle = () => setCount(count - 1);

  return (
    <>
      <div className={cls.counterVal}>{count}</div>
      <button className={cls.button} onClick={decreaseHandle}>
        -
      </button>
      <button className={cls.button} onClick={increaseHandle}>
        +
      </button>
    </>
  );
};
