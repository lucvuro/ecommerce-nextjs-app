import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import React from 'react';

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

const ProductSkeleton = () => {
  return (
    <StyledProductWrapper>
      <StyledCard>
        <Skeleton variant="rectangular" width={200} height={186} />
        <CardContent sx={{ width: '100%' }}>
          <Skeleton variant="text" />
        </CardContent>
        <StyledCardActions disableSpacing>
          <Skeleton variant="text" width="30%" />

          <Skeleton variant="rectangular" width={155} height={37} />
        </StyledCardActions>
      </StyledCard>
    </StyledProductWrapper>
  );
};
export default ProductSkeleton;
