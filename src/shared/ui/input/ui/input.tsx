import React, { memo, InputHTMLAttributes } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';

import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = memo((props: Props) => {
  const { className, value, onChange, type = 'text', ...otherProps } = props;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <input
      className={classNames(cls.input, className)}
      value={value}
      onChange={handleChange}
      type={type}
      {...otherProps}
    />
  );
});

export { Input };
