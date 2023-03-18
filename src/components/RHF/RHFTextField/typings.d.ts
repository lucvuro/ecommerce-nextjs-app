import type { TextFieldProps } from '@mui/material';
import type { FieldValues, RegisterOptions } from 'react-hook-form';

export type TRHFTextFieldProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined;
  errorMsg?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
