import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="300px" gap={2}>
      <Typography variant="h5">{`Your cart is empty`}</Typography>
      <Link href="/">
        <Button variant="outlined">Continue to shopping</Button>
      </Link>
    </Stack>
  );
};
export default EmptyCart;
