import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ListProduct } from '@/components/common';
import type { TProduct } from '@/components/common/Product/typings';
import useGetProdcuts from '@/hooks/useGetProducts';
import { addItem } from '@/store/slices/cartSlice';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
}));

const Index = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProdcuts();
  const addToCart = useCallback((product: TProduct) => {
    dispatch(addItem(product));
  }, []);
  return (
    <StyledBoxWrapper>
      <Typography variant="h5">All Products</Typography>
      <ListProduct
        listProduct={data}
        isLoading={isLoading}
        addToCart={addToCart}
      />
    </StyledBoxWrapper>
  );
};

export default Index;
