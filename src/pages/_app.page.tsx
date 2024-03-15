import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { getTheme } from "@/shared/styles/theme";
import GlobalStyles from "@/shared/styles/GlobalStyles";
import Header from "@/shared/components/organisms/Header";
import AppLayout from "@/shared/styles/AppLayout";
import GlobalContextProvider from "@/shared/context";

export default function App({ Component, pageProps }: AppProps) {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppLayout>
        <GlobalContextProvider>
          <Header />
          <Component {...pageProps} />
        </GlobalContextProvider>
      </AppLayout>
    </ThemeProvider>
  );
}
