import {
  CheckoutSuccess,
  PaymentMethod,
  ReviewOrder,
  ShippingAddress,
} from '@/components/checkout';
import type { TPaymentInfo } from '@/components/checkout/PaymentMethod/typings';
import type { TShippingAddressData } from '@/components/checkout/ShippingAddress/typings';

const renderStep = (
  step: number,
  handleNextStep: (data?: any) => void,
  handleBackStep: () => void,
  addressInfo: TShippingAddressData | null,
  paymentInfo: TPaymentInfo | null
) => {
  switch (step) {
    case 0:
      return (
        <ShippingAddress
          handleNextStep={handleNextStep}
          addressInfo={addressInfo}
        />
      );
    case 1:
      return (
        <PaymentMethod
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
          paymentInfo={paymentInfo}
        />
      );
    case 2:
      return (
        <ReviewOrder
          addressInfo={addressInfo}
          paymentInfo={paymentInfo}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
        />
      );
    case 3:
      return <CheckoutSuccess />;
    default:
      return <></>;
  }
};

export default renderStep;
