import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import type { TRHFSelectFieldProps } from '@/components/RHF/RHFSelectField/typings';

const RHFSelectField: React.FC<TRHFSelectFieldProps> = ({
  name,
  label = '',
  error = false,
  errorMsg = '',
  fullWidth = false,
  rules = {},
  data = [],
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth={fullWidth} error={error}>
          <InputLabel>{label}</InputLabel>
          <Select
            label={label}
            name={name}
            id={name}
            onChange={onChange}
            value={value}
          >
            {data.map((item) => (
              <MenuItem key={item.label} value={item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: '#d32f2f' }}>{errorMsg}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default RHFSelectField;
