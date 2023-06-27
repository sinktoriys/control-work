import { StyledEngineProvider } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import { useState } from 'react'

type TotalData = {
    totalPrice: number
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
    return (
        <StyledEngineProvider injectFirst>
            <ProductList
                totalData={totalData}
                countTotalCount={countTotalCount}
            />
        </StyledEngineProvider>
    )
}
export default App
