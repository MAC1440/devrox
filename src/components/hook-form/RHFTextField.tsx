// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, useTheme } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFTextField({ name, ...other }: any) {
  const { control } = useFormContext();
  const theme: any = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          color="warning"
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
