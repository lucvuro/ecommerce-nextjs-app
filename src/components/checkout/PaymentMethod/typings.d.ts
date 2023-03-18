export type TPaymentInfo = {
  cardNumber: number;
  nameOnCard: string;
  exp: Moment;
  cvv: number;
};
export type TPaymentMethodProps = {
  handleBackStep: () => void;
  paymentInfo?: TPaymentInfo | null;
};
