import { Container } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import ProductListItem from 'Components/Products/ProductListItem'

type Props = {
    id: number
    title: string
    description: string
    price: number

    totalData: {
        totalPrice: number
    }
    countTotalCount: (total: number, price: number) => void
    currency: {
        oldRate: number
        newRate: number
        name: string
    }
    changeNewCurrency: (total: number, price: number) => void
}

const Main = ({
    id,
    title,
    description,
    price,
    totalData,
    countTotalCount,
    changeNewCurrency,
    currency,
}: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <ProductList
                totalData={totalData}
                countTotalCount={countTotalCount}
                changeNewCurrency={changeNewCurrency}
                currency={currency}
            />
            <ProductListItem
                id={id}
                title={title}
                description={description}
                price={price}
                totalData={totalData}
                countTotalCount={countTotalCount}
                currency={currency}
            />
        </Container>
    )
}
export default Main
