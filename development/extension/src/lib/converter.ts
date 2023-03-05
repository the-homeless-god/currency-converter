import { API_KEY } from '../config/environment';
import { Currencies } from '../types';

export type ExchangeRate = {
  from: string;
  to: string;
  rate: number;
};

export const getRate = async (): Promise<Record<Currencies, number>> => {
  const response = await fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`
  );
  const data = await response.json();

  if (data && data.rates) {
    return data.rates;
  } else {
    throw new Error('Failed to retrieve exchange rates');
  }
};
