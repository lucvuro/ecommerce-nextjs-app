import { useSelector } from 'react-redux';

import { cartState } from '@/store/slices/cartSlice';

const useCartState = () => {
  return useSelector(cartState);
};
export default useCartState;
