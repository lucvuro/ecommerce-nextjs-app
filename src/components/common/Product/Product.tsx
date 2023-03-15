import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import type { TProductProps } from '@/components/common/Product/typings';

const StyledProductWrapper = styled(Box)(() => ({
  flex: '0 0 300px',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(1),
}));

const StyledCardActions = styled(CardActions)(() => ({
  width: '100%',
  justifyContent: 'space-between',
}));

const Product: React.FC<TProductProps> = ({
  product,
  addToCart = () => {},
}) => {
  return (
    <StyledProductWrapper>
      <StyledCard>
        <CardMedia
          image={product.image}
          component="img"
          sx={{ width: '200px', height: '286px' }}
        />
        <CardContent sx={{ height: '128px' }}>
          <p>{product.title}</p>
        </CardContent>
        <StyledCardActions disableSpacing>
          <Typography
            variant="body1"
            color="error"
          >{`$${product.price}`}</Typography>

          <Button variant="outlined" onClick={() => addToCart(product)}>
            <AddShoppingCartIcon />
            Add to Cart
          </Button>
        </StyledCardActions>
      </StyledCard>
    </StyledProductWrapper>
  );
};
export default Product;
