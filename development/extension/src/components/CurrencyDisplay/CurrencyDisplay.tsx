import React, { FC, useEffect, useState } from 'react'
import { useValue } from '../../hooks/useValue'
import { Currencies } from '../../types'
import { CurrencyLine } from '../CurrencyLine'

import './CurrencyDisplay.scss'

export type CurrencyDisplayProps = {
}

const currencies = [
    Currencies.USD,
    Currencies.EURO,
    Currencies.RUB,
]

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({
}) => {

    const { usdValue, rubValue, euroValue } = useValue();


    const usdConfig = {
        code: Currencies.USD,
        value: usdValue
    }

    const euroConfig = {
        code: Currencies.EURO,
        value: euroValue
    }


    const rubConfig = {
        code: Currencies.RUB,
        value: rubValue
    }

    useEffect(() => {


        console.log(usdConfig, euroConfig, rubConfig, euroValue, rubValue, usdValue)
    }, [usdConfig, euroConfig, rubConfig, euroValue, rubValue, usdValue])
    return (
        <div className='currencyDisplay'>
            <CurrencyLine currencies={[{ ...rubConfig, isDefault: true }, euroConfig, usdConfig]} />
            {/* <CurrencyLine currencies={[{ ...usdConfig, isDefault: true }, rubConfig, euroConfig]} /> */}
            {/* <CurrencyLine currencies={[{ ...euroConfig, isDefault: true }, rubConfig, usdConfig]} /> */}
        </div>
    )
}
