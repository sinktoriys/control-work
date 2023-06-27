import { Button, Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import Total from 'Components/Total/Total'

type Props = {
    totalData: {
        totalPrice: number
    }
    countTotalCount: (id: number, price: number) => void
}

const ProductList = ({ totalData, countTotalCount }: Props) => {
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
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            totalData={totalData}
                            countTotalCount={countTotalCount}
                        />
                    </Grid>
                ))}
                <Total totalData={totalData} />
            </Grid>
        </>
    )
}
export default ProductList
