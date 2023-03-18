import type { FieldError, FieldErrorsImpl } from 'react-hook-form';

export type TDataSelect = {
  value: number | string;
  label: string;
};
export type TRHFSelectFieldProps = {
  name: string;
  label?: string;
  error?: boolean;
  errorMsg?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  fullWidth?: boolean;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined;
  data?: TDataSelect[];
};
