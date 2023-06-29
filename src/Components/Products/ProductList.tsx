import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import { Button } from '@mui/material'

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
                <>
                    <Button
                        variant="outlined"
                        // onClick={() => countTotalCount(1, 1)}
                    >
                        USD:{totalData.totalPrice * 1.09}
                    </Button>

                    <Button variant="outlined">
                        EUR:{totalData.totalPrice}
                    </Button>
                    <Button variant="outlined">
                        UAH:{totalData.totalPrice * 40.14}
                    </Button>
                    <Button variant="outlined">
                        RUB:{totalData.totalPrice * 94.39}
                    </Button>
                </>
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
                <div className="product-total">
                    total EUR: {totalData.totalPrice}
                </div>
            </Grid>
        </>
    )
}
export default ProductList
