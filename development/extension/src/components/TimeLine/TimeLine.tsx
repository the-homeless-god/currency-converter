import React, { FC } from 'react';
import { useRate } from '../../hooks/useRate';
import TimeAgo from '../TimeAgo/TimeAgo';

import './TimeLine.scss';

export type TimeLineProps = {};

export const TimeLine: FC<TimeLineProps> = () => {
  const { time } = useRate();

  return (
    <div className="timeLine">
      <span>Updated at —&nbsp;</span>

      <TimeAgo datetime={time} locale="en_US" />
    </div>
  );
};
