import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import type { TRHFDatePickerProps } from '@/components/RHF/RHFDatePicker/typings';

const RHFDatePicker: React.FC<TRHFDatePickerProps> = ({
  name,
  rules = {},
  fullWidth = false,
  errorMsg = '',
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Stack sx={{ width: `${fullWidth}` ? '100%' : 'auto' }}>
          <DatePicker
            onChange={onChange}
            value={value}
            {...props}
            slots={{
              textField: (params) => (
                <Stack>
                  <TextField {...params} error={props.error} />
                  <FormHelperText sx={{ color: '#d32f2f', marginLeft: '1rem' }}>
                    {errorMsg}
                  </FormHelperText>
                </Stack>
              ),
            }}
          />
        </Stack>
      )}
    />
  );
};
export default RHFDatePicker;
