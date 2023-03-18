import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useState } from 'react';

import { StepCheckout } from '@/components/checkout';
import type { TPaymentInfo } from '@/components/checkout/PaymentMethod/typings';
import renderStep from '@/components/checkout/renderStep';
import type { TShippingAddressData } from '@/components/checkout/ShippingAddress/typings';
import { StyledBoxWrapper } from '@/components/common';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '350px',
  margin: 'auto',
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    width: '600px',
  },
  [theme.breakpoints.up('md')]: {
    width: '700px',
  },
}));
const StyledFormWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: 0,
}));
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompeletedSteps] = useState(new Set<number>());
  const [addressInfo, setAddressInfo] = useState<TShippingAddressData | null>(
    null
  );
  const [paymentInfo, setPaymentInfo] = useState<TPaymentInfo | null>(null);
  const handleNextStep = useCallback((data: any) => {
    const newCompletedSteps = completedSteps;
    newCompletedSteps.add(activeStep);
    setActiveStep((prevState) => prevState + 1);
    setCompeletedSteps(newCompletedSteps);
    if (activeStep === 0) setAddressInfo(data);
    else if (activeStep === 1) setPaymentInfo(data);
  }, []);
  const hanldeBackStep = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, []);
  return (
    <StyledBoxWrapper>
      <Typography variant="h5">Checkout</Typography>
      <StyledPaper>
        <StepCheckout activeStep={activeStep} />
        <StyledFormWrapper>
          {renderStep(
            activeStep,
            handleNextStep,
            hanldeBackStep,
            addressInfo,
            paymentInfo
          )}
        </StyledFormWrapper>
      </StyledPaper>
    </StyledBoxWrapper>
  );
};
export default Checkout;
