import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import React from 'react';

import { ItemCart } from '@/components/cart/ItemCart';
import type { TListItemCartProps } from '@/components/cart/ListItemCart/typings';

const StyledList = styled(List)(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  margin: theme.spacing(3),
}));

const ListItemCart: React.FC<TListItemCartProps> = ({
  items,
  increaseItem,
  decreaseItem,
  deleteItem,
}) => {
  return (
    <StyledList>
      {items?.map((item) => (
        <ListItem key={`item-cart-${item.id}`}>
          <ItemCart
            item={item}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
            deleteItem={deleteItem}
          />
        </ListItem>
      ))}
    </StyledList>
  );
};
export default ListItemCart;
