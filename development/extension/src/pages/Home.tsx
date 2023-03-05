import React, { useCallback, useState } from "react"

import { Box } from "../components/Box"
import { CurrencyDisplay } from "../components/CurrencyDisplay"
import { TimeLine } from "../components/TimeLine"
import { Value } from "../components/Value"
import { ValueContext } from "../hooks/useValue"

export const Home = () => {
    const [value, setValue] = useState<number>(0)

    const onValueChange = useCallback((nextValue: number) => {
        setValue(nextValue)
    }, [value])
    return (
        <ValueContext.Provider value={value}>
            <Box>
                <Value onChange={onValueChange} />
                <CurrencyDisplay />
                <TimeLine />
            </Box>
        </ValueContext.Provider>)
}
