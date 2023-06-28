import { Button } from '@mui/material'

type Props = {
    totalData: {
        totalPrice: number
    }

    totalUsd: {
        usdNewCurrency: number
    }
    priceInUsd: (id: number, totalPrice: number) => void
}
const Currency = ({ totalUsd, priceInUsd, totalData }: Props) => {
    return (
        <>
            <Button variant="outlined" onClick={() => priceInUsd(1, 2)}>
                USD:{totalUsd.usdNewCurrency}
            </Button>

            <Button variant="outlined">EUR</Button>
            <Button variant="outlined">UAH</Button>
            <Button variant="outlined">RUB</Button>
        </>
    )
}
export default Currency
