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
import { FormSchema, defaultValues, otherDetailsFormData } from ".";
import { LoadingButton } from "@mui/lab";

export default function OtherDetails(props: any) {
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
    trigger,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

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
            <Typography variant="h6">Other Details</Typography>
          </Grid>
          {otherDetailsFormData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} p={2} key={form.id}>
                {form.id !== 7.5 && (
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={disabled}
                  >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
                {form.id === 7.5 && (
                  <>
                    <Typography variant="body2">
                      Does this enquiry meet the criteria for IHV:
                    </Typography>
                    <RadioGroup
                      name="IHVcriteria"
                      sx={{ display: "flex", flexDirection: "row" }}
                      value={getValues("IHVcriteria")}
                      onChange={(e) => {
                        setValue("IHVcriteria", e.target.value);
                        trigger("IHVcriteria");
                      }}
                    >
                      {["Yes", "No"].map((mode, index) => {
                        return (
                          <Grid key={mode} item>
                            <FormControlLabel
                              disabled={disabled}
                              label={mode}
                              control={<Radio />}
                              value={mode}
                            />
                          </Grid>
                        );
                      })}
                    </RadioGroup>
                  </>
                )}
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
