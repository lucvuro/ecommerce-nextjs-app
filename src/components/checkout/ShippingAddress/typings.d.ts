export type TShippingAddressProps = {
  handleNextStep?: (data: TShippingAddressData) => void;
  addressInfo?: TShippingAddressData | null;
};
export type TShippingAddressData = {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  zipcode: number;
};
