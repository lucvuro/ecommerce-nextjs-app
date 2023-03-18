import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type { Moment } from 'moment';
import moment from 'moment';
import { FormProvider, useForm } from 'react-hook-form';

import { StyledStackFields } from '@/components/common/CustomStack';
import { RHFDatePicker, RHFTextField } from '@/components/RHF';

const PaymentMethod = () => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form id="payment" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <RHFTextField
            name="cardNumber"
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
          />
          <RHFTextField
            name="nameOnCard"
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
              defaultValue={null}
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
            />
          </StyledStackFields>
          <div>
            <Button
              className="float-right bg-[#1976d2]"
              form="payment"
              type="submit"
              variant="contained"
            >
              Next
            </Button>
          </div>
        </Stack>
      </form>
    </FormProvider>
  );
};
export default PaymentMethod;
