import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import type { TReviewOrderProps } from '@/components/checkout/ReviewOrder/typings';
import useCartState from '@/hooks/useCartState';
import type { TCartItem } from '@/store/slices/cartSlice';

const StyledStackInfoShip = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
const ReviewOrder: React.FC<TReviewOrderProps> = ({
  addressInfo,
  paymentInfo,
  handleBackStep = () => {},
  handleNextStep = () => {},
}) => {
  console.log(addressInfo);
  const { cartItems, totalPrice } = useCartState();
  return (
    <Stack gap={2}>
      <Stack gap={2}>
        {cartItems.map((cartItem: TCartItem) => (
          <Stack
            key={cartItem.id}
            direction="row"
            justifyContent="space-between"
            gap={2}
          >
            <Typography width="200px" noWrap>
              {cartItem.title}
            </Typography>
            <p>{cartItem.count}</p>
            <Typography width="200px" textAlign="right">
              {`$${(cartItem.price * cartItem.count).toFixed(2)}`}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <p>Shipping</p>
        <p>$5</p>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <p>Total</p>
        <p>{`$${(totalPrice + 5).toFixed(2)}`}</p>
      </Stack>
      <StyledStackInfoShip>
        <Stack gap={1} p={1} flex="0 0 50%">
          <Typography variant="h6" mb={1}>
            Shipping Info
          </Typography>
          <p>{`${addressInfo?.firstName} ${addressInfo?.lastName}`}</p>
          <p>
            {`${addressInfo?.address1}, ${addressInfo?.city}, ${addressInfo?.country}, ${addressInfo?.zipcode}`}
          </p>
        </Stack>
        <Stack gap={1} p={1}>
          <Typography variant="h6" mb={1}>
            Payment Info
          </Typography>
          <p>{paymentInfo?.cardNumber}</p>
          <p>{paymentInfo?.nameOnCard}</p>
          <p>{paymentInfo?.exp.format('MM/YY')}</p>
        </Stack>
      </StyledStackInfoShip>
      <Stack
        direction="row"
        gap={3}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button form="payment" variant="outlined" onClick={handleBackStep}>
          Back
        </Button>
        <Button
          className="bg-[#1976d2]"
          form="payment"
          onClick={handleNextStep}
          variant="contained"
        >
          Place Order
        </Button>
      </Stack>
    </Stack>
  );
};
export default ReviewOrder;
