import Page from "@/components/Page";
import Layout from "@/layouts";
import {
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider, RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendContactForm } from "@/lib/api";

const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));
export default function ContactUs() {
  const [message, setMessage] = useState("Submit");
  const theme = useTheme();
  const defaultValues = {
    email: "",
    enquiryMessage: "",
  };

  const FormSchema = Yup.object().shape({
    email: Yup.string().required("Required"), //1
    enquiryMessage: Yup.string().required("Required"), //2
  });

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    setMessage("Loading...");
    console.log(data, "submitted data");
    try {
      await sendContactForm(data);
      setMessage("Message Sent");
    } catch (error) {
      console.log(error, "ganda sa error");
      setMessage("Try Again");
    }
  };

  return (
    // <Layout>
    <ContentStyle>
      <Page title="Contact Us">
        <Card sx={{ p: 2 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container pt={2} spacing={3} justifyContent={"center"}>
              <Grid item md={12}>
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                >
                  Contact Us:{" "}
                </Typography>
              </Grid>

              <Grid item xs={12} md={8}>
                <RHFTextField
                  size="small"
                  fullWidth={true}
                  name="email"
                  label="Email"
                  placeholder="john@dev-rox.com"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <RHFTextField
                  size="small"
                  fullWidth={true}
                  name="enquiryMessage"
                  multiline
                  minRows={3}
                  label="Enquiry Message"
                />
              </Grid>

              <Grid item xs={12} textAlign={"center"}>
                <Button size="large" type="submit" variant="contained">
                  {message}
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Card>
      </Page>
    </ContentStyle>
    // </Layout>
  );
}
