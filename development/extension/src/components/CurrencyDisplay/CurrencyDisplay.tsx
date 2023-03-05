import React, { FC, useEffect, useState } from 'react';
import { useCurrencyExchange } from '../../hooks/useCurrencyExchange';
import { useValue } from '../../hooks/useValue';
import { Currencies } from '../../types';
import { CurrencyLine } from '../CurrencyLine';

import './CurrencyDisplay.scss';

export type CurrencyDisplayProps = {};

const currencies = [Currencies.USD, Currencies.EURO, Currencies.RUB];

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({}) => {
  const exchangeCurrencies = useCurrencyExchange();

  return (
    <div className="currencyDisplay">
      {exchangeCurrencies.map((exchangeCurrencyHolders, index: number) => {
        return (
          <CurrencyLine
            key={`currency-line-${index}`}
            currencies={exchangeCurrencyHolders}
          />
        );
      })}
    </div>
  );
};
