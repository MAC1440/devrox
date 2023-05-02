// next-i18
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// guards
// import GuestGuard from "@/guards/GuestGuard";
// components
import Page from "../../components/Page";
import LoginForm from "@/sections/auth/login/LoginForm";
import Layout from "@/layouts";

// ----------------------------------------------------------------------

Login.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Login">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Login() {
  return (
    // <GuestGuard>
    // </GuestGuard>
    <Page title="Login">
      <LoginForm />
    </Page>
  );
}

// export const getStaticProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "en", ["common", "login"])),
//   },
// });
