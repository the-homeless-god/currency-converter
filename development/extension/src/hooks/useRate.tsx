import { createContext, useContext, useEffect, useState } from 'react';
import { Currencies } from '../types';
import { Maybe } from '../types/global';
import { useValue } from './useValue';

export const RateContext =
  createContext<Maybe<Record<Currencies, number>>>(undefined);

export const useRate = () => {
  const rate = useContext(RateContext);
  const [time] = useState(new Date());

  return { rate, time };
};
