import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';

import type {
  TShippingAddressData,
  TShippingAddressProps,
} from '@/components/checkout/ShippingAddress/typings';
import { StyledStackFields } from '@/components/common/CustomStack';
import { RHFSelectField, RHFTextField } from '@/components/RHF';

const countries = [
  {
    value: 'unitedstates',
    label: 'United States',
  },
  {
    value: 'vietname',
    label: 'Viet Nam',
  },
];
const cities = [
  {
    value: 'newyork',
    label: 'New York',
  },
  {
    value: 'hochiminhcity',
    label: 'Ho Chi Minh City',
  },
];

const ShippingAddress: React.FC<TShippingAddressProps> = ({
  handleNextStep = () => {},
}) => {
  const methods = useForm<TShippingAddressData>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<TShippingAddressData> = (data) => {
    handleNextStep(data);
  };
  return (
    <FormProvider {...methods}>
      <form id="shipping-address" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <StyledStackFields>
            <RHFTextField
              name="firstName"
              rules={{
                required: {
                  value: true,
                  message: 'First Name is required',
                },
              }}
              label="First Name"
              error={!!errors.firstName}
              errorMsg={errors.firstName?.message}
              fullWidth
            />
            <RHFTextField
              name="lastName"
              rules={{
                required: {
                  value: true,
                  message: 'Last Name is required',
                },
              }}
              label="Last Name"
              error={!!errors.lastName}
              errorMsg={errors.lastName?.message}
              fullWidth
            />
          </StyledStackFields>
          <RHFTextField
            name="address1"
            rules={{
              required: {
                value: true,
                message: 'Address 1 is required',
              },
            }}
            label="Address 1"
            error={!!errors.address1}
            errorMsg={errors.address1?.message}
            fullWidth
          />
          <RHFTextField name="address2" label="Address 2" fullWidth />
          <StyledStackFields>
            <RHFSelectField
              name="city"
              rules={{
                required: {
                  value: true,
                  message: 'City is required',
                },
              }}
              label="City"
              error={!!errors.city}
              errorMsg={errors.city?.message}
              fullWidth
              data={cities}
            />
            <RHFSelectField
              name="country"
              rules={{
                required: {
                  value: true,
                  message: 'Country is required',
                },
              }}
              label="Country"
              error={!!errors.country}
              errorMsg={errors.country?.message}
              fullWidth
              data={countries}
            />
          </StyledStackFields>
          <RHFTextField
            name="zipcode"
            rules={{
              required: {
                value: true,
                message: 'Zipcode is required',
              },
            }}
            label="Zipcode"
            error={!!errors.zipcode}
            errorMsg={errors.zipcode?.message}
            fullWidth
          />
          <div>
            <Button
              className="float-right bg-[#1976d2]"
              form="shipping-address"
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
export default ShippingAddress;
