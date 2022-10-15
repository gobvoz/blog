import React, { memo, InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/class-names/class-names';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = memo((props: IInputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props;

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <input
      className={classNames([cls.input, className])}
      value={value}
      onChange={onChangeHandler}
      type={type}
      data-testId="input"
      {...otherProps}
    />
  );
});

export { Input };
