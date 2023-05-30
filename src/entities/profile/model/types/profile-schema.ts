import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

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
}
