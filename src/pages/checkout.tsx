import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { StepCheckout } from '@/components/checkout';
import type { TPaymentInfo } from '@/components/checkout/PaymentMethod/typings';
import renderStep from '@/components/checkout/renderStep';
import type { TShippingAddressData } from '@/components/checkout/ShippingAddress/typings';
import { StyledBoxWrapper } from '@/components/common';
import { removeAllItem } from '@/store/slices/cartSlice';

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
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [addressInfo, setAddressInfo] = useState<TShippingAddressData | null>(
    null
  );
  const [paymentInfo, setPaymentInfo] = useState<TPaymentInfo | null>(null);
  const handleNextStep: any = useCallback(
    (data: any) => {
      setActiveStep((prevState) => prevState + 1);
      if (activeStep === 0) setAddressInfo(data);
      else if (activeStep === 1) setPaymentInfo(data);
      else if (activeStep === 2) {
        setAddressInfo(null);
        setPaymentInfo(null);
        dispatch(removeAllItem());
      }
    },
    [activeStep, dispatch, removeAllItem]
  );
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
