import { useState } from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    totalData: {
        totalPrice: number
    }
}
const Total = ({ totalData }: Props) => {
    const [total, setTotal] = useState<number>(0)
    const changeTotal = () => {
        setTotal((prevState) => prevState + 1)
    }
    return (
        <>
            <div className="product-total">total:{totalData.totalPrice}</div>
            {/* <TextField
                value={total}
                size="small"
                sx={{
                    marginTop: '25px',
                }}
            />
            <Button variant="outlined" onClick={() => changeTotal()}>
                Total
            </Button> */}
        </>
    )
}
export default Total
