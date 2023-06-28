import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import Currency from 'Components/Currency/Currency'

type Props = {
    totalData: {
        totalPrice: number
    }
    countTotalCount: (id: number, price: number) => void
    totalUsd: {
        usdNewCurrency: number
    }
    priceInUsd: (id: number, totalPrice: number) => void
}

const ProductList = ({
    totalData,
    countTotalCount,
    totalUsd,
    priceInUsd,
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
                <Currency
                    totalUsd={totalUsd}
                    priceInUsd={priceInUsd}
                    totalData={totalData}
                />
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
                    total : {totalData.totalPrice}
                </div>
            </Grid>
        </>
    )
}
export default ProductList
