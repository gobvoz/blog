import { Country, Currency } from 'shared/constants/common';

export interface Profile {
  id: number;
  userId: number;
  first: string;
  last: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
