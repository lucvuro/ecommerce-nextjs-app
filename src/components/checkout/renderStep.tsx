import { PaymentMethod, ShippingAddress } from '@/components/checkout';
import type { TShippingAddressData } from '@/components/checkout/ShippingAddress/typings';

const renderStep = (
  step: number,
  handleNextStep: (data: TShippingAddressData) => void
) => {
  switch (step) {
    case 0:
      return <ShippingAddress handleNextStep={handleNextStep} />;
    case 1:
      return <PaymentMethod />;
    default:
      return <></>;
  }
};

export default renderStep;
