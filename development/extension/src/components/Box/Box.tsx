import React, { FC, PropsWithChildren } from 'react';

import './Box.scss';

export const Box: FC<PropsWithChildren> = ({ children }) => {
  return <div className="box">{children}</div>;
};
