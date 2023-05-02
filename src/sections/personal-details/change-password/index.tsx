import * as Yup from "yup";

export const defaultValues = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string().required("New Password is required"),
  confirmNewPassword: Yup.string().required("Confirm New Password is required"),
});

export { default as ReactHookForm } from "./ChangePasswordForm";
