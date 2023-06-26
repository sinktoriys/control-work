import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    price: number
}
const ProductListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <div className="product-description">{props.description}</div>
                <div className="product-price">EUR{props.price}</div>
                <CardActions className="btn-wrap">
                    <Button className="btn-buy" variant="outlined">
                        Buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
