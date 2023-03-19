import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

const useGetProdcuts = () => {
  return useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};
export default useGetProdcuts;
