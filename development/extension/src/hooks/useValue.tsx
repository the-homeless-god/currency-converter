import { createContext, useContext, useEffect, useState } from "react";
import { getExchangeRate } from "../lib/converter";
import { Currencies } from "../types";

export const ValueContext = createContext<number>(0)

export const useValue = () => {
    const value = useContext(ValueContext);

    const [time, setTime] = useState(new Date())

    const [euroValue, setEuroValue] = useState(value)
    const [usdValue, setUsdValue] = useState(value)
    const [rubValue] = useState(value)

    useEffect(() => {
        async function fetchUsdRates() {
            const tempUsdRate = await getExchangeRate(Currencies.RUB, Currencies.EURO);
            
            setUsdValue(value * tempUsdRate)
        }


        async function fetchEuroRates() {
            const tempEuroRate = await getExchangeRate(Currencies.RUB, Currencies.USD);

            setEuroValue(value * tempEuroRate)
        }

        if (value !== undefined && value > 0) {
            fetchUsdRates()
            fetchEuroRates()

            setTime(new Date())
        }
    }, [value, setEuroValue, setUsdValue])

    return { value, usdValue, euroValue, rubValue, time };
}