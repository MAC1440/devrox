import { useState, useRef, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import { FormProvider, RHFTextField } from "@/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FullWidthFormField from "./FullWidthFormField";
import HalfWidthFormField from "./HalfWidthFormField";
import { FormSchema, defaultValues, fieldsInfo } from "./formData";

const PersonalDetailsForm: FC<any> = () => {
  const fileInputRef: any = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const photo = useWatch({ control, name: "photo" });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickAttachPhoto = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center">
        <Grid container item xs={12}>
          <Grid item sm={12} container>
            {/* Dynamically Generated Fields  */}
            {fieldsInfo.map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  {/* if there is only one field that is accoupies whole width   */}
                  {item.length === 1 && (
                    <FullWidthFormField
                      item={item}
                      isSubmitting={isSubmitting}
                      disabled={disabled}
                    />
                  )}
                  {/* if there are two fields with 50% 50% width   */}
                  {item.length === 2 && (
                    <HalfWidthFormField
                      item={item}
                      isSubmitting={isSubmitting}
                      disabled={disabled}
                    />
                  )}
                </Fragment>
              );
            })}
            {/* A Custom Field On Full Width  */}
            {/* <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="previousExpCustom"
                  label="Previous Exp Custom"
                />
              </Grid>
            </Grid> */}
          </Grid>
          {!disabled && (
            <Grid item sm={12} container direction="column">
              <Grid item container sx={{ padding: "0.5em" }}>
                <Button variant="contained" type="submit">
                  Save
                </Button>
                <Button variant="contained" type="submit">
                  Continue
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default PersonalDetailsForm;
