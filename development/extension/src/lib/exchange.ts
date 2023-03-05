import { DEFAULT_EXCHANGE_RATE_VALUE } from './constants';
import { Currencies } from '../types';
import { useRate } from '../hooks/useRate';

type ExchangeRatePayload = {
  from: Currencies;
  to: Currencies;
  rate: Record<Currencies, number>;
  value: number;
};

export const getExchangeRate = ({
  from,
  to,
  rate,
}: ExchangeRatePayload): number => {
  if (!rate) {
    return DEFAULT_EXCHANGE_RATE_VALUE;
  }

  const fromRate = rate[from];
  const toRate = rate[to];
  const exchangeRate = toRate / fromRate;

  return exchangeRate;
};

export const getExchangeValue = (payload: ExchangeRatePayload): number => {
  const { value } = payload;
  const rate = getExchangeRate(payload);
  return value * rate;
};
