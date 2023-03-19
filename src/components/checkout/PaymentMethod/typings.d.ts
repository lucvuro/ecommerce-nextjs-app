export type TPaymentInfo = {
  cardNumber: number;
  nameOnCard: string;
  exp: Moment;
  cvv: number;
};
export type TPaymentMethodProps = {
  handleNextStep: (data: TPaymentInfo) => void;
  handleBackStep: () => void;
  paymentInfo?: TPaymentInfo | null;
};
