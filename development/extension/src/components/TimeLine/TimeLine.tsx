import React, { FC } from 'react'
import { useValue } from '../../hooks/useValue'
import TimeAgo from '../TimeAgo/TimeAgo'

import './TimeLine.scss'

export type TimeLineProps = {}

export const TimeLine: FC<TimeLineProps> = () => {
    const { time } = useValue()

    return (
        <div className='timeLine'>
            <span>Updated at —&nbsp;</span >

            <TimeAgo
                datetime={time}
                locale='en_US'
            />
        </div>
    )
}
