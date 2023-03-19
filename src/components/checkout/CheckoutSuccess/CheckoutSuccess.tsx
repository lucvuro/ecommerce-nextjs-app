import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const CheckoutSuccess = () => {
  return (
    <Stack mt={1}>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order has been created. We will send you an update when your order
        has shipped.
      </Typography>
    </Stack>
  );
};
export default CheckoutSuccess;
