import { createContext, useContext } from 'react';
import { Maybe } from '../types/global';

export const ValueContext = createContext<number | undefined>(undefined);

export const useValue = () => {
  const value = useContext(ValueContext);

  return value;
};
