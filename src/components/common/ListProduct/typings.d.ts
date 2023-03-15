import type {
  TProduct,
  TProductProps,
} from '@/components/common/Product/typings';

export type TListProductProps = Partial<TProductProps> & {
  listProduct: TProduct[];
  isLoading: boolean;
};
