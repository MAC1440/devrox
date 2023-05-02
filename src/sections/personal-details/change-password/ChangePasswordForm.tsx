import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "@/components/hook-form";
import { ChangePasswordSchema, defaultValues } from ".";
import CustomCard from "@/components/CustomCard";

const ChangePasswordForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (credentials: any) => {
    console.log({ credentials });
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <CustomCard
        title="Change Password"
        titleTypographyProps={{ variant: "subtitle1" }}
        divider
      >
        <RHFTextField
          name="currentPassword"
          label="Current Password"
          disabled={isSubmitting}
          size="small"
          sx={{ mb: { xs: 2, sm: 3 }, mt: 2 }}
        />
        <RHFTextField
          name="newPassword"
          label="New Password"
          disabled={isSubmitting}
          size="small"
          sx={{ mb: { xs: 2, sm: 3 } }}
        />
        <RHFTextField
          name="confirmNewPassword"
          label="ConfirmNew Password"
          disabled={isSubmitting}
          size="small"
          sx={{ mb: { xs: 2, sm: 3 } }}
        />
        <LoadingButton
          color="primary"
          size="medium"
          type="submit"
          variant="contained"
          sx={{ boxShadow: "none" }}
        >
          Save
        </LoadingButton>
      </CustomCard>
    </FormProvider>
  );
};

export default ChangePasswordForm;
