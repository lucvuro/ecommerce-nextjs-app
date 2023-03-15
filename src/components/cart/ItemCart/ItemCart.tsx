import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import type { TItemCartProps } from '@/components/cart/ItemCart/typings';

const StyledImg = styled('img')(() => ({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
}));

const StyledStackWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  width: '400px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const ItemCart: React.FC<TItemCartProps> = ({
  item,
  increaseItem = () => {},
  decreaseItem = () => {},
  deleteItem = () => {},
}) => {
  return (
    <StyledStackWrapper>
      <StyledImg src={item.image} />
      <StyledTypography noWrap>{item.title}</StyledTypography>
      <Stack direction="row" alignItems="center" gap={2}>
        <IconButton onClick={() => decreaseItem(item)}>
          <RemoveIcon />
        </IconButton>
        <p>{item.count}</p>
        <IconButton onClick={() => increaseItem(item)}>
          <AddIcon />
        </IconButton>
      </Stack>
      <Button variant="outlined" color="error" onClick={() => deleteItem(item)}>
        <CloseIcon />
        Remove
      </Button>
      <p style={{ width: '100px' }}>{`$${(item.count * item.price).toFixed(
        2
      )}`}</p>
    </StyledStackWrapper>
  );
};
export default ItemCart;
