import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Page from "@/components/Page";
import { FormProvider } from "@/components/hook-form";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, personalDetails } from ".";
import { LoadingButton } from "@mui/lab";

export default function Contact(props: any) {
  const { disabled } = props;
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
  const fileInputRef: any = useRef(null);

  // const onSubmit = (data: any) => {
  //   data.preventDefault();
  //   console.log(data, "submitted data");
  //   // reset();
  // };

  const onSubmit = (data: any) => {
    console.log(data, "abcdefg");

    alert(
      JSON.stringify(
        {
          ...data,
        },
        null,
        2
      )
    );
    reset();
  };

  return (
    <Page title="Initial Enquiry">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {/* <FormProvider methods={methods} onSubmit={onSubmit}> */}
        <Grid container p={2}>
          <Grid item md={12}>
            <Typography variant="h6">Contact Details</Typography>
          </Grid>
          {personalDetails.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} p={2} key={form.id}>
                <form.component
                  {...form.componentProps}
                  size="small"
                  disabled={disabled}
                >
                  {form.componentProps.select
                    ? form.componentProps.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
          <LoadingButton
            fullWidth
            color="info"
            // size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </Grid>
      </FormProvider>
    </Page>
  );
}
