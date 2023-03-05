import React, { useCallback, useEffect, useState } from 'react';

import { Box } from '../components/Box';
import { CurrencyDisplay } from '../components/CurrencyDisplay';
import { TimeLine } from '../components/TimeLine';
import { Value } from '../components/Value';
import { RateContext } from '../hooks/useRate';
import { ValueContext } from '../hooks/useValue';
import { getRate } from '../lib/converter';
import { Currencies } from '../types';
import { Maybe } from '../types/global';

export const Home = () => {
  const [value, setValue] = useState<number>(0);
  const [rate, setRate] = useState<Maybe<Record<Currencies, number>>>();

  const onValueChange = useCallback(
    (nextValue: number) => {
      setValue(nextValue);
    },
    [value]
  );

  useEffect(() => {
    async function refreshRate() {
      const freshRate = await getRate();
      setRate(freshRate);
    }

    if (value > 0) {
      refreshRate();
    }
  }, [value]);

  return (
    <RateContext.Provider value={rate}>
      <ValueContext.Provider value={value}>
        <Box>
          <Value onChange={onValueChange} />
          <CurrencyDisplay />
          <TimeLine />
        </Box>
      </ValueContext.Provider>
    </RateContext.Provider>
  );
};
