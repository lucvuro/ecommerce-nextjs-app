import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { StepCheckout } from '@/components/checkout';
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
  const handleNextStep = (data: TShippingAddressData) => {
    const newCompletedSteps = completedSteps;
    newCompletedSteps.add(activeStep);
    setActiveStep((prevState) => prevState + 1);
    setCompeletedSteps(newCompletedSteps);
    if (activeStep === 0) setAddressInfo(data);
    console.log(addressInfo);
  };
  // const hanldeBackStep = () => {
  //   setActiveStep((prevState) => prevState - 1);
  // };
  return (
    <StyledBoxWrapper>
      <Typography variant="h5">Checkout</Typography>
      <StyledPaper>
        <StepCheckout activeStep={activeStep} />
        <StyledFormWrapper>
          {renderStep(activeStep, handleNextStep)}
        </StyledFormWrapper>
      </StyledPaper>
    </StyledBoxWrapper>
  );
};
export default Checkout;
