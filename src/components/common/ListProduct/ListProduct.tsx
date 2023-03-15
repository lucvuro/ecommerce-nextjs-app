import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';

import type { TListProductProps } from '@/components/common/ListProduct/typings';
import { Product } from '@/components/common/Product';
import { ProductSkeleton } from '@/components/common/Skeleton';
import generateEmptyArray from '@/utils/generateArrayEmpty';

const StyledListProductWrapper = styled(Box)(({ theme }) => ({
  margin: '2rem 0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(5),
}));

const ListProduct: React.FC<TListProductProps> = ({
  listProduct,
  isLoading,
  addToCart,
}) => {
  const emptyArray = generateEmptyArray(8);
  return (
    <StyledListProductWrapper>
      {!isLoading &&
        listProduct &&
        listProduct.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      {isLoading &&
        emptyArray.map((_, index) => (
          <ProductSkeleton key={`skeleton-product-${index}`} />
        ))}
    </StyledListProductWrapper>
  );
};
export default ListProduct;
