import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    price: number
    totalData: {
        totalPrice: number
    }
    countTotalCount: (total: number, price: number) => void
}

const ProductListItem = ({
    title,
    description,
    price,
    totalData,
    countTotalCount,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-price">EUR{price}</div>
                <CardActions className="btn-wrap">
                    <Button
                        className="btn-buy"
                        variant="outlined"
                        // onClick={() => countTotalCount(total, price)}
                    >
                        Buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
