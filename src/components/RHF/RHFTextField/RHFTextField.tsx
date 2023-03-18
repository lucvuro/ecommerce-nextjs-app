import { FormHelperText, Stack, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import type { TRHFTextFieldProps } from '@/components/RHF/RHFTextField/typings';

const RHFTextField: React.FC<TRHFTextFieldProps> = ({
  name,
  rules = {},
  errorMsg = '',
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Stack sx={{ width: `${props.fullWidth}` ? '100%' : 'auto' }}>
          <TextField
            name={name}
            id={name}
            onChange={onChange}
            value={value}
            {...props}
          />
          <FormHelperText sx={{ color: '#d32f2f', marginLeft: '1rem' }}>
            {errorMsg}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
export default RHFTextField;
