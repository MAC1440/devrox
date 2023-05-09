// Cookies
import cookie from "cookie";

// editor
import "react-quill/dist/quill.snow.css";

// next
import Head from "next/head";
import App from "next/app";

// redux store
import { Provider as ReduxProvider } from "react-redux";
import store from "@/redux/store";

// mui
import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// utils
import { getSettings } from "@/utils/settings";

//theme
import ThemeProvider from "@/theme";

// contexts
import { CollapseDrawerProvider } from "@/contexts/CollapseDrawerContext";
import { SettingsProvider } from "@/contexts/SettingsContext";

// components
import NotistackProvider from "@/components/NotistackProvider";
import ThemeColorPresets from "@/components/ThemeColorPresets";
import ProgressBar from "@/components/ProgressBar";

function MyApp(props: any) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ReduxProvider store={store}>
        <>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
          <CollapseDrawerProvider>
            <SettingsProvider defaultSettings={settings}>
              <ThemeProvider>
                <NotistackProvider>
                  <ThemeColorPresets>
                    <ProgressBar />
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeColorPresets>
                </NotistackProvider>
              </ThemeProvider>
            </SettingsProvider>
          </CollapseDrawerProvider>
          {/* </LocalizationProvider> */}
        </>
      </ReduxProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};

export default MyApp;
