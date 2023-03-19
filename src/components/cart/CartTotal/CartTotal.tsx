import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';

import type { TCartTotalProps } from '@/components/cart/CartTotal/typings';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  margin: theme.spacing(5),
  marginTop: theme.spacing(1),
  padding: theme.spacing(2),
  width: '300px',
  float: 'right',
  [theme.breakpoints.down('md')]: {
    width: 'inherit',
    float: 'unset',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
}));

const CartTotal: React.FC<TCartTotalProps> = ({ totalPrice = 0 }) => {
  return (
    <StyledBoxWrapper>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <p>Total</p>
        <p>{`$${totalPrice.toFixed(2)}`}</p>
      </Stack>
      <Link href="/checkout">
        <StyledButton variant="outlined">Checkout</StyledButton>
      </Link>
    </StyledBoxWrapper>
  );
};
export default CartTotal;
