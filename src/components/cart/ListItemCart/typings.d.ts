import type { TItemCartProps } from '@/components/cart/ItemCart/typings';
import type { TCartItem } from '@/store/slices/cartSlice';

export type TListItemCartProps = Partial<TItemCartProps> & {
  items: TCartItem[];
};
