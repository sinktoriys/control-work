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
    totalUsd: {
        usdNewCurrency: number
    }
    priceInUsd: (id: number, totalPrice: number) => void
}
const Main = ({
    id,
    title,
    description,
    price,
    totalData,
    countTotalCount,
    totalUsd,
    priceInUsd,
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
                totalUsd={totalUsd}
                priceInUsd={priceInUsd}
            />
            <ProductListItem
                id={id}
                title={title}
                description={description}
                price={price}
                totalData={totalData}
                countTotalCount={countTotalCount}
            />
        </Container>
    )
}
export default Main
