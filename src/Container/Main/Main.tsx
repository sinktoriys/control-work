import { Container } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import ProductListItem from 'Components/Products/ProductListItem'
import Total from 'Components/Total/Total'
type Props = {
    id: number
    title: string
    description: string
    price: number
    totalData: {
        totalPrice: number
    }
    countTotalCount: (total: number, price: number) => void
}
const Main = ({
    id,
    title,
    description,
    price,
    totalData,
    countTotalCount,
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
            />
            <ProductListItem
                id={id}
                title={title}
                description={description}
                price={price}
                totalData={totalData}
                countTotalCount={countTotalCount}
            />
            <Total totalData={totalData} />
        </Container>
    )
}
export default Main
