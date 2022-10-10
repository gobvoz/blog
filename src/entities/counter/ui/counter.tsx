import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';

import { Button, ButtonMod } from 'shared/ui/button';

import { counterActions } from '../model/slice/counter-slice';
import { selectCounterValue } from '../model/selectors/select-counter-value/select-counter-value';

interface ICounterProps {}

const Counter: FC<ICounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  const incrementHandler = () => dispatch(counterActions.increment());
  const decrementHandler = () => dispatch(counterActions.decrement());
  return (
    <>
      <h3 data-testid="counter-value">{counterValue}</h3>
      <Button data-testid="counter-increment" mod={ButtonMod.PRIMARY} onClick={incrementHandler}>
        {t('inc')}
      </Button>
      <Button data-testid="counter-decrement" mod={ButtonMod.PRIMARY} onClick={decrementHandler}>
        {t('dec')}
      </Button>
    </>
  );
};

export { Counter };
