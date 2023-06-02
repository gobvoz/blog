import { SelectHTMLAttributes, memo, useCallback } from 'react';

import { Select } from 'shared/ui/select';
import { useAppTranslation } from 'shared/libs/hooks';

import { Currency } from '../../model/types/currency';

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

interface Props extends SelectHTMLProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;

  readOnly?: boolean;
  error?: any;
}

const options = Object.values(Currency).map(value => ({ value, label: value }));

const CurrencySelect = memo((props: Props) => {
  const { className, value, readOnly, onChange, ...otherProps } = props;

  const { t } = useAppTranslation('currency');

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={className}
      label={t('currency', { ns: 'currency' })}
      placeholder={t('your-currency', { ns: 'currency' })}
      value={value}
      options={options}
      readOnly={readOnly}
      onChange={handleChange}
      {...otherProps}
    />
  );
});

export { CurrencySelect };
