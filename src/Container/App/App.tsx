import { StyledEngineProvider } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import { useState } from 'react'

type TotalData = {
    totalPrice: number
}
type Currency = {
    price: number
}

const App = () => {
    const [totalData, setTotalData] = useState<TotalData>({
        totalPrice: 0,
    })
    const countTotalCount = (id: number, price: number) => {
        setTotalData((prevState) => ({
            totalPrice: prevState.totalPrice + price * currency.price,
        }))
    }
    const [currency, setCurrency] = useState<Currency>({
        price: 1,
    })
    const changeNewCurrency = (id: number, coefficient: number) => {
        setCurrency((prevState) => ({
            price: prevState.price * coefficient,
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
