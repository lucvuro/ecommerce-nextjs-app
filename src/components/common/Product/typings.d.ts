export type TProduct = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
};
export type TProductProps = {
  product: TProduct;
  addToCart?: (product: TProduct) => void;
};
