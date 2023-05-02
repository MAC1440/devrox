// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Stack,
  FormLabel,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFRadioGroupWithLabel({
  name,
  options,
  label,
  getOptionLabel,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Stack direction="row" alignItems="center" spacing={3}>
            <FormLabel>{label} </FormLabel>
            <RadioGroup {...field} row {...other}>
              {options.map((option: any, index: number) => (
                <FormControlLabel
                  key={option}
                  style={{ display: "flex" }}
                  value={option}
                  control={<Radio />}
                  label={
                    getOptionLabel?.length ? getOptionLabel[index] : option
                  }
                />
              ))}
            </RadioGroup>
          </Stack>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
