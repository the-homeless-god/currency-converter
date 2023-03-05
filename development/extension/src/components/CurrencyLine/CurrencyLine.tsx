import React, { FC } from 'react';
import { Currencies, CurrencyHolder } from '../../types';

import './CurrencyLine.scss';

export type CurrencyLineProps = {
  currencies: CurrencyHolder[];
};

export const CurrencyLine: FC<CurrencyLineProps> = ({ currencies }) => {
  const defaultCurrency = currencies.find((currency) => currency.isDefault);
  if (!defaultCurrency) {
    return null;
  }

  const otherCurrencies = currencies
    .filter((currency) => !currency.isDefault)
    .map((currency) => `${currency.value.toFixed(2)} ${currency.code}`);

  return (
    <div className="currencyLine">
      <div className="defaultCurrencyLine">{defaultCurrency.code}: </div>
      {otherCurrencies.map((otherCurrency, index) => (
        <p
          key={`${defaultCurrency.code}-${index}`}
          className="otherCurrencyLine"
        >
          {otherCurrency}
        </p>
      ))}
    </div>
  );
};
