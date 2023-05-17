import { TOptionsBase } from 'i18next';
import { useTranslation } from 'react-i18next';

export const useAppTranslation = (ns?: string) => {
  const { t, i18n } = useTranslation(ns);

  return {
    t: (key: string, options?: TOptionsBase) => (options ? t(key, options) : t(key, { ns })),
    i18n,
  };
};
