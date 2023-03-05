import React, { FC } from 'react'
import { Currencies } from '../../types'

import './CurrencyLine.scss'

type CurrencyHolder = {
    code: Currencies
    value: number
    isDefault?: boolean;
}

export type CurrencyLineProps = {
    currencies: CurrencyHolder[]
}

export const CurrencyLine: FC<CurrencyLineProps> = ({ currencies }) => {
    const defaultCurrency = currencies.find(currency => currency.isDefault)
    if (!defaultCurrency) {
        return null
    }

    const otherCurrencies = currencies.filter(currency => !currency.isDefault).map(currency => `${(currency.value).toFixed(2)} ${currency.code}`).join(' = ');


    return (
        <div className='currencyLine'>
            {defaultCurrency.code}: <br /> {otherCurrencies}
        </div>
    )
}
