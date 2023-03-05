import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Currencies, CurrencyHolder } from '../types';
import { getExchangeRate, getExchangeValue } from '../lib/exchange';
import { useRate } from './useRate';
import { useValue } from './useValue';

const currencies = [Currencies.USD, Currencies.EURO, Currencies.RUB];

export const useCurrencyExchange = () => {
  const value = useValue();
  const { rate } = useRate();

  const exchangeCurrencies: CurrencyHolder[][] = useMemo(() => {
    if (!value) {
      return [];
    }
    return currencies.map((currency) => {
      const defaultCurrency = {
        isDefault: true,
        code: currency,
        value,
      };

      if (!rate) {
        return [defaultCurrency];
      }

      const otherRates: CurrencyHolder[] = currencies
        .filter((otherCurrency) => otherCurrency !== currency)
        .map((otherCurrency) => {
          const exchangeValue = getExchangeValue({
            from: currency,
            to: otherCurrency,
            rate,
            value,
          });
          return {
            value: exchangeValue,
            code: otherCurrency,
          };
        });

      return [defaultCurrency, ...otherRates];
    });
  }, [rate, value]);

  return exchangeCurrencies;
};
