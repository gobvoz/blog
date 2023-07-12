import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

export type ValidateErrors = Partial<Record<keyof Profile, boolean>>;

export interface Profile {
  id?: string;
  userId?: string;
  first?: string;
  last?: string;
  age?: string;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
  about?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateErrors;
}
