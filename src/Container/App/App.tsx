import { StyledEngineProvider } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import { useState } from 'react'

type TotalData = {
    totalPrice: number
}
type Currency = {
    oldRate: number
    newRate: number
}

const App = () => {
    const [totalData, setTotalData] = useState<TotalData>({
        totalPrice: 0,
    })
    const countTotalCount = (id: number, price: number) => {
        setTotalData((prevState) => ({
            totalPrice: prevState.totalPrice + price * currency.newRate,
        }))
    }
    const [currency, setCurrency] = useState<Currency>({
        oldRate: 1,
        newRate: 1,
    })
    const changeNewCurrency = (id: number, coefficient: number) => {
        const oldRate = currency.newRate
        const newRate = id * coefficient
        setCurrency((prevState) => ({
            oldRate: oldRate,
            newRate: newRate,
        }))
        setTotalData((prevState) => ({
            totalPrice: prevState.totalPrice * (newRate / oldRate),
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <ProductList
                totalData={totalData}
                countTotalCount={countTotalCount}
                currency={currency}
                changeNewCurrency={changeNewCurrency}
            />
        </StyledEngineProvider>
    )
}
export default App
