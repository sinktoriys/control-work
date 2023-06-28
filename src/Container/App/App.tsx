import { StyledEngineProvider } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import { useState } from 'react'

type TotalData = {
    totalPrice: number
}

type TotalUsd = {
    usdNewCurrency: number
}

const App = () => {
    const [totalData, setTotalData] = useState<TotalData>({
        totalPrice: 0,
    })
    const countTotalCount = (id: number, price: number) => {
        setTotalData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    const [totalUsd, setTotalUsd] = useState<TotalUsd>({
        usdNewCurrency: 0,
    })
    const priceInUsd = (id: number, totalPrice: number) => {
        setTotalUsd((prevState) => ({
            usdNewCurrency: (prevState.usdNewCurrency + totalPrice) * 1.09,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <ProductList
                totalData={totalData}
                countTotalCount={countTotalCount}
                totalUsd={totalUsd}
                priceInUsd={priceInUsd}
            />
        </StyledEngineProvider>
    )
}
export default App
