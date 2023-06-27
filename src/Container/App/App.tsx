import { StyledEngineProvider } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import Main from 'Container/Main/Main'
import { useState } from 'react'

// type Props = {
//     title: string
//     description: string
//     price: number
//     totalData: {
//         totalPrice: number
//     }
//     countTotalCount: (total: number, price: number) => void
// }

type TotalData = {
    totalPrice: number
}
const App = () => {
    const [totalData, setTotalData] = useState<TotalData>({
        totalPrice: 100,
    })
    const countTotalCount = (total: number, price: number) => {
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

            {/* <Main
                // title={title}
                // description={description}
                // price={price}
                totalData={totalData}
                countTotalCount={countTotalCount}
            /> */}
            <button onClick={() => countTotalCount(1, 200)}> Add</button>
        </StyledEngineProvider>
    )
}
export default App
