import type { TPaymentInfo } from '@/components/checkout/PaymentMethod/typings';
import type { TShippingAddressData } from '@/components/checkout/ShippingAddress/typings';

export type TReviewOrderProps = {
  addressInfo: TShippingAddressData | null;
  paymentInfo: TPaymentInfo | null;
  handleBackStep?: () => void;
  handleNextStep?: () => void;
};
