import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';

import { Button, ButtonMod } from 'shared/ui/button';

import { counterActions } from '../model/counter-slice';
import { selectCounterValue } from '../model/selectors/get-counter-value/select-counter-value';

interface ICounterProps {}

const Counter: FC<ICounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  const incHandler = () => dispatch(counterActions.increment());
  const decHandler = () => dispatch(counterActions.decrement());
  return (
    <>
      <h3>{counterValue}</h3>
      <Button mod={ButtonMod.PRIMARY} onClick={incHandler}>
        {t('inc')}
      </Button>
      <Button mod={ButtonMod.PRIMARY} onClick={decHandler}>
        {t('dec')}
      </Button>
    </>
  );
};

export { Counter };
