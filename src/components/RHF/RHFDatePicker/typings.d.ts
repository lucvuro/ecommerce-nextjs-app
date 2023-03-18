import type { TextFieldProps } from '@mui/material';
import type { DatePickerProps } from '@mui/x-date-pickers';

export type TRHFDatePickerProps = Omit<
  DatePickerProps<TDate> & TextFieldProps,
  'onChange' | 'value'
> & {
  name: string;
  fullWidth?: boolean;
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
