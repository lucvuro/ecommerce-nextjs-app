import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type { Moment } from 'moment';
import moment from 'moment';
import type { FormEvent } from 'react';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';

import type {
  TPaymentInfo,
  TPaymentMethodProps,
} from '@/components/checkout/PaymentMethod/typings';
import { StyledStackFields } from '@/components/common/CustomStack';
import { RHFDatePicker, RHFTextField } from '@/components/RHF';
import removeStuffsNotNumber from '@/utils/removeStuffsNotNumber';

const customOnChangeCardNumber = (
  e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const targetEvent = e.target as HTMLInputElement | HTMLTextAreaElement;
  let newValue = removeStuffsNotNumber(targetEvent.value);
  newValue = `${newValue.slice(0, 4)} ${newValue.slice(4, 8)} ${newValue.slice(
    8,
    12
  )} ${newValue.slice(12, 19)}`;
  targetEvent.value = newValue.trim();
};
const customOnChangeCVV = (
  e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const targetEvent = e.target as HTMLInputElement | HTMLTextAreaElement;
  let newValue = removeStuffsNotNumber(targetEvent.value);
  newValue = `${newValue.slice(0, 3)}`;
  targetEvent.value = newValue.trim();
};

const PaymentMethod: React.FC<TPaymentMethodProps> = ({
  handleNextStep,
  handleBackStep,
  paymentInfo,
}) => {
  const methods = useForm<TPaymentInfo>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<TPaymentInfo> = (data) => {
    handleNextStep(data);
  };
  return (
    <FormProvider {...methods}>
      <form id="payment" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <RHFTextField
            name="cardNumber"
            defaultValue={paymentInfo?.cardNumber}
            rules={{
              required: {
                value: true,
                message: 'Card Number is required',
              },
            }}
            label="Card Number"
            error={!!errors.cardNumber}
            errorMsg={errors.cardNumber?.message}
            fullWidth
            inputProps={{
              onChange: customOnChangeCardNumber,
            }}
          />
          <RHFTextField
            name="nameOnCard"
            defaultValue={paymentInfo?.nameOnCard}
            rules={{
              required: {
                value: true,
                message: 'Name is required',
              },
            }}
            label="Name"
            error={!!errors.nameOnCard}
            errorMsg={errors.nameOnCard?.message}
            fullWidth
          />
          <StyledStackFields>
            <RHFDatePicker
              name="exp"
              defaultValue={paymentInfo?.exp}
              rules={{
                validate: {
                  checkMinDate: (value: Moment) => {
                    return (
                      value?.isAfter(moment(Date.now())) ||
                      'Expiry date is invalid'
                    );
                  },
                },
              }}
              fullWidth
              label="Expiry date"
              format="MM/YY"
              views={['month', 'year']}
              error={!!errors.exp}
              errorMsg={errors.exp?.message}
            />
            <RHFTextField
              name="cvv"
              defaultValue={paymentInfo?.cvv}
              rules={{
                required: {
                  value: true,
                  message: 'CVV is required',
                },
              }}
              label="CVV"
              error={!!errors.cvv}
              errorMsg={errors.cvv?.message}
              fullWidth
              inputProps={{
                onChange: customOnChangeCVV,
              }}
            />
          </StyledStackFields>
          <Stack direction="row" gap={3} justifyContent="flex-end">
            <Button form="payment" variant="outlined" onClick={handleBackStep}>
              Back
            </Button>
            <Button
              className="bg-[#1976d2]"
              form="payment"
              type="submit"
              variant="contained"
            >
              Next
            </Button>
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
};
export default PaymentMethod;
