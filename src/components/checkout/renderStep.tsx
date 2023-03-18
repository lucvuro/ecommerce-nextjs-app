import { PaymentMethod, ShippingAddress } from '@/components/checkout';
import type { TPaymentInfo } from '@/components/checkout/PaymentMethod/typings';
import type { TShippingAddressData } from '@/components/checkout/ShippingAddress/typings';

const renderStep = (
  step: number,
  handleNextStep: (data: TShippingAddressData) => void,
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
          handleBackStep={handleBackStep}
          paymentInfo={paymentInfo}
        />
      );
    default:
      return <></>;
  }
};

export default renderStep;
