import { SelectHTMLAttributes, memo, useCallback } from 'react';

import { Select } from 'shared/ui/select';
import { useAppTranslation } from 'shared/libs/hooks';

import { Country } from '../../model/types/country';

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

interface Props extends SelectHTMLProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;

  readOnly?: boolean;
  error?: any;
}

const options = Object.values(Country).map(value => ({ value, label: value }));

const CountrySelect = memo((props: Props) => {
  const { className, value, readOnly, onChange, ...otherProps } = props;

  const { t } = useAppTranslation('country');

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={className}
      label={t('country', { ns: 'country' })}
      placeholder={t('your-country', { ns: 'country' })}
      value={value}
      options={options}
      readOnly={readOnly}
      onChange={handleChange}
      {...otherProps}
    />
  );
});

export { CountrySelect };
