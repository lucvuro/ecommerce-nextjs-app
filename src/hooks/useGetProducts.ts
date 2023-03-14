import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

const useGetProdcuts = () => {
  return useSWR('https://fakestoreapi.com/products', fetcher);
};
export default useGetProdcuts;
