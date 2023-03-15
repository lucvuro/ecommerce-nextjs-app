import type { TCartItem } from '@/store/slices/cartSlice';

export type TItemCartProps = {
  item: TCartItem;
  increaseItem?: (item: TCartItem) => void;
  decreaseItem?: (item: TCartItem) => void;
  deleteItem?: (item: TCartItem) => void;
};
