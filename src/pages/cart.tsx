import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ListItemCart } from '@/components/cart';
import useCartState from '@/hooks/useCartState';
import type { TCartItem } from '@/store/slices/cartSlice';
import { addItem, removeItem, subtractItem } from '@/store/slices/cartSlice';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
}));

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useCartState();

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
      <Typography variant="h5">Your Cart</Typography>
      <ListItemCart
        items={cartItems}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
        deleteItem={deleteItem}
      />
    </StyledBoxWrapper>
  );
};

export default Cart;
