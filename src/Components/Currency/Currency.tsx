import { Button } from '@mui/material'
type Props = {}
const Currency = (props: Props) => {
    return (
        <>
            <Button variant="outlined">USD</Button>
            <Button variant="outlined">EUR</Button>
            <Button variant="outlined">UAH</Button>
            <Button variant="outlined">RUB</Button>
        </>
    )
}
export default Currency
