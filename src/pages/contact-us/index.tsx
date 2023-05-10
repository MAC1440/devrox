import {
  Button,
  Card,
  Grid,
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
import contact from "../../assets/contact.jpg";
import contactus from "../../assets/img/contactus.png";

const ContentStyle = styled("div")(({ theme }) => ({
  padding: "3rem",
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
      <Card
        sx={{
          p: 2,
          minHeight: "80vh",
          minWidth: "80vw",
          backgroundImage: `url(${contact.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            height={"80vh"}
            alignItems="center"
            justifyContent="center"
            p={2}
          >
            <Grid
              xs={0}
              md={6}
              height="100%"
              sx={{
                backgroundImage: `url(${contactus.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                transform: "rotate(-45deg)",
              }}
            >
              a
              {/* <Typography
                variant="h2"
                color={theme.palette.primary.contrastText}
                textAlign={"center"}
              >
                Contact Us:
              </Typography> */}
            </Grid>

            <Grid
              item
              container
              md={6}
              xs={12}
              p={4}
              spacing={3}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={4}
              boxShadow={4}
              sx={{
                backgroundColor: theme.palette.background.default,
                // filter: " blur(5px)",
              }}
            >
              <Grid item xs={12} md={8}>
                <RHFTextField
                  sx={{ color: "red" }}
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
          </Grid>
        </FormProvider>
      </Card>
    </ContentStyle>
    // </Layout>
  );
}
