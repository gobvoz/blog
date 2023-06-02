import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

export interface ValidateErrors extends Omit<Partial<Profile>, 'userId' | 'currency' | 'country'> {
  userId?: string;
  currency?: string;
  country?: string;
}

export interface Profile {
  id?: number;
  userId?: number;
  first?: string;
  last?: string;
  age?: string;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateErrors;
}
