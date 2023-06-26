import { Container } from '@mui/material'
import ProductList from 'Components/Products/ProductList'
import ProductListItem from 'Components/Products/ProductListItem'
type Props = {
    title: string
    description: string
    price: number
}
const Main = ({ title, description, price }: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <ProductList />
            <ProductListItem
                title={title}
                description={description}
                price={price}
            />
        </Container>
    )
}
export default Main
