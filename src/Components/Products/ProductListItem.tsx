import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    id: number
    title: string
    description: string
    price: number
    totalData: {
        totalPrice: number
    }
    countTotalCount: (id: number, price: number) => void
    currency: {
        oldRate: number
        newRate: number
    }
}

const ProductListItem = ({
    id,
    title,
    description,
    price,
    totalData,
    countTotalCount,
    currency,
}: Props) => {
    return (
        <>
            <Card className="product" variant="outlined">
                <CardContent>
                    <h4 className="product-title">{title}</h4>
                    <div className="product-description">{description}</div>
                    <div className="product-price">
                        {Math.round(price * currency.newRate)}
                    </div>
                    <CardActions className="btn-wrap">
                        <Button
                            className="btn-buy"
                            variant="outlined"
                            onClick={() => countTotalCount(id, price)}
                        >
                            Buy
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductListItem
