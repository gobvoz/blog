import { ChangeEvent, SelectHTMLAttributes, memo, useMemo } from 'react';

import { classNames } from 'shared/libs/class-names';

import cls from './select.module.scss';
import { Label } from 'shared/ui/label';

export interface SelectOption {
  value: string;
  label: string;
}

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

interface Props extends SelectHTMLProps {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  options?: SelectOption[];

  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const Select = memo((props: Props) => {
  const { className, value, options, readOnly, label, placeholder, onChange, ...otherProps } =
    props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
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
          className={cls.select}
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
});

export { Select };
