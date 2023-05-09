// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, styled, useTheme } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFTextField({ name, ...other }: any) {
  const { control } = useFormContext();
  const theme: any = useTheme();

  const CssTextField = styled(TextField)({
    "& label": {
      color: theme.palette.text.primary,
    },
    "& label.Mui-focused": {
      color: theme.palette.action.neutral,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.info.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.success.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.action.active,
      },
    },
  });
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <CssTextField
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
