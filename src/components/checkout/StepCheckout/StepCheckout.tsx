import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';

import type { TStepCheckoutProps } from '@/components/checkout/StepCheckout/typings';

const steps = ['Shipping address', 'Payment method', 'Review your order'];
const StepCheckout: React.FC<TStepCheckoutProps> = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default StepCheckout;
