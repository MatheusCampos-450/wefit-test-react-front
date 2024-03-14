import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { getTheme } from "@/shared/styles/theme";
import GlobalStyles from "@/shared/styles/GlobalStyles";
import Header from "@/shared/components/organisms/Header";
import { AppLayoutContainer } from "@/shared/styles/AppLayoutContainer";

export default function App({ Component, pageProps }: AppProps) {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppLayoutContainer>
        <Header />
        <Component {...pageProps} />
      </AppLayoutContainer>
    </ThemeProvider>
  );
}
