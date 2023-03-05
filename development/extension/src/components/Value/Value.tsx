import React, { FC } from 'react';
import { useValue } from '../../hooks/useValue';
import { VALUE_PLACEHOLDER } from './utils';

import './Value.scss';

export type ValueProps = {
  onChange: (value: number) => void;
};

export const Value: FC<ValueProps> = ({ onChange }) => {
  const value = useValue();

  return (
    <div className="value">
      <input
        type="number"
        defaultValue={value || ''}
        onChange={(event) => onChange(Number(event.target.value))}
        placeholder={VALUE_PLACEHOLDER}
      />
    </div>
  );
};
