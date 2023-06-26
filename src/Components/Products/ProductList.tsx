import { Button, Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '40px',
                }}
            >
                Our Shop page
                <br />
                <Button variant="outlined">USD</Button>
                <Button variant="outlined">EUR</Button>
                <Button variant="outlined">UAH</Button>
                <Button variant="outlined">RUB</Button>
            </Typography>

            <Grid container spacing={4}>
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductListItem
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductList
