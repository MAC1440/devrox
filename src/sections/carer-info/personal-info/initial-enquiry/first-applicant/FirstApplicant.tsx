import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Page from "@/components/Page";
import { FormProvider, RHFCheckbox } from "@/components/hook-form";
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FormSchema, defaultValues, personalDetails, formData } from ".";
import { LoadingButton } from "@mui/lab";
import dayjs from "dayjs";
import RHFUploadFile from "../../form-f/components/RHFUploadFile";
import { TitleWithBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function FirstApplicant(props: any) {
  const { disabled: globallyDisabled } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { trigger, setValue, handleSubmit, getValues, watch } = methods;

  useEffect(() => {
    const subscription = watch((values: any) => {
      const newAge = dayjs().diff(dayjs(values["dob"]), "y");
      values.age !== newAge &&
        setValue("age", dayjs().diff(dayjs(values["dob"]), "y"));
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const onSubmit = (data: any) => {
    console.log(
      data,
      "submitted data",
      // calculateISOAge(data.dob.toISOString()),
      dayjs().diff(dayjs(data["dob"]), "y")
    );
    // reset();
  };
  return (
    <Page title="Initial Enquiry">
      <TitleWithBreadcrumbs title="First Applicant" />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container p={2}>
          <Grid item xs={12} md={12} p={2}>
            <RHFCheckbox
              value={getValues("isJointApplicant")}
              onChange={(e: any) => {
                setValue("isJointApplicant", e.target.checked);
                trigger("isJointApplicant");
              }}
              name="isJointApplicant"
              label="If Joint Applicant, tick the Checkbox"
            />
          </Grid>
          {formData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} p={2} key={form.id}>
                <form.component
                  {...form.componentProps}
                  size="small"
                  disabled={globallyDisabled}
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
          <Grid item md={12}>
            <Typography variant="h6">Personal Details</Typography>
          </Grid>
          {personalDetails.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} p={2} key={form.id}>
                {form.id === 1 ? (
                  <RHFUploadFile name="uploadPhoto" {...methods} />
                ) : (
                  <form.component
                    {...form.componentProps}
                    size="small"
                    disabled={form.name === "age" || globallyDisabled}
                  >
                    {form.componentProps.select
                      ? form.componentProps.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
              </Grid>
            );
          })}
          <Grid container alignItems={"center"} gap={2}>
            <Typography variant="body2">
              Do you have permanent residency in UK?
            </Typography>
            <RadioGroup
              name="residency"
              sx={{ display: "flex", flexDirection: "row" }}
              // value="After"
              onChange={(e) => {
                setValue("residency", e.target.value);
                trigger("residency");
              }}
              value={getValues("residency")}
            >
              {["Yes", "No"].map((mode, index) => {
                return (
                  <Grid key={mode} item>
                    <FormControlLabel
                      label={mode}
                      disabled={globallyDisabled}
                      control={<Radio />}
                      value={mode}
                    />
                  </Grid>
                );
              })}
            </RadioGroup>
          </Grid>
          <Grid container alignItems={"center"} gap={2}>
            <Typography variant="body2">
              Have you ever been convicted of any criminal or civil offense?
              Have you got any cautions or outstanding court orders?
            </Typography>
            <RadioGroup
              name="courtOrders"
              sx={{ display: "flex", flexDirection: "row" }}
              onChange={(e) => {
                setValue("courtOrders", e.target.value);
                trigger("courtOrders");
              }}
              value={getValues("courtOrders")}
            >
              {["Yes", "No"].map((mode, index) => {
                return (
                  <Grid key={mode} item>
                    <FormControlLabel
                      label={mode}
                      disabled={globallyDisabled}
                      control={<Radio />}
                      value={mode}
                    />
                  </Grid>
                );
              })}
            </RadioGroup>
          </Grid>
          <LoadingButton
            fullWidth
            sx={{ mb: 5 }}
            color="info"
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </Grid>
      </FormProvider>
    </Page>
  );
}
