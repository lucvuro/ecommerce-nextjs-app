import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CartTotal, ListItemCart } from '@/components/cart';
import useCartState from '@/hooks/useCartState';
import type { TCartItem } from '@/store/slices/cartSlice';
import { addItem, removeItem, subtractItem } from '@/store/slices/cartSlice';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
}));
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useCartState();
  const increaseItem = useCallback((item: TCartItem) => {
    dispatch(addItem(item));
  }, []);
  const decreaseItem = useCallback((item: TCartItem) => {
    dispatch(subtractItem(item));
  }, []);
  const deleteItem = useCallback((item: TCartItem) => {
    dispatch(removeItem(item));
  }, []);
  return (
    <StyledBoxWrapper>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Your Cart</Typography>
        <Link href="/">
          <Button variant="contained" className="bg-[#1976d2]">
            Cotinue to shopping
            <ArrowForwardIcon />
          </Button>
        </Link>
      </Stack>
      <ListItemCart
        items={cartItems}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
        deleteItem={deleteItem}
      />
      {totalPrice !== 0 && <CartTotal totalPrice={totalPrice} />}
    </StyledBoxWrapper>
  );
};

export default Cart;
