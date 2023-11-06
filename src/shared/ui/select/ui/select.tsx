import { ChangeEvent, SelectHTMLAttributes, memo, useMemo } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './select.module.scss';
import { Label } from 'shared/ui/label';

export interface SelectOption<T> {
  value: T;
  label: string;
}

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

interface Props<T extends string> extends SelectHTMLProps {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: T;
  options?: SelectOption<T>[];

  readOnly?: boolean;
  error?: any;
  onChange?: (value: T) => void;
}

const Select = <T extends string>(props: Props<T>) => {
  const {
    className,
    value,
    options,
    readOnly,
    label,
    placeholder,
    onChange,
    error,
    ...otherProps
  } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const optionList = useMemo(
    () =>
      options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )),
    [options],
  );

  return (
    <Label value={label} className={className}>
      <div className={cls.wrapper}>
        <select
          className={classNames(cls.select, { [cls.error]: error })}
          onChange={handleChange}
          value={value}
          data-readonly={readOnly}
          {...otherProps}>
          {!value && (
            <option className={cls.placeholderOption} value="">
              {placeholder}
            </option>
          )}
          {readOnly && value && (
            <option className={cls.placeholderOption} value="">
              {options?.find(option => option.value === value)?.label}
            </option>
          )}
          {!readOnly && optionList && optionList}
        </select>
      </div>
    </Label>
  );
};

export { Select };
