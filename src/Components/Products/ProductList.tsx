import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import { Button } from '@mui/material'

type Props = {
    totalData: {
        totalPrice: number
    }
    countTotalCount: (id: number, price: number) => void
    currency: {
        oldRate: number
        newRate: number
    }
    changeNewCurrency: (id: number, coefficient: number) => void
}
const ProductList = ({
    totalData,
    countTotalCount,
    currency,
    changeNewCurrency,
}: Props) => {
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
                        onClick={() => changeNewCurrency(1, 1)}
                    >
                        EUR
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changeNewCurrency(1, 1.1)}
                    >
                        USD
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={() => changeNewCurrency(1, 40.14)}
                    >
                        UAH
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changeNewCurrency(1, 0.23)}
                    >
                        PLN
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
                            currency={currency}
                        />
                    </Grid>
                ))}
                <div className="product-total">
                    total: {Math.round(totalData.totalPrice)}
                </div>
            </Grid>
        </>
    )
}
export default ProductList
